import express from 'express';
import {Express} from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import AppController from './controllers/AppController';

/**
 * Main class of application
 */
export default class App {
    /**
     * App instanse
     */ 
    private static instance: App;
    /**
     * Express instance
     */ 
    private expApp: Express;


    private appController: AppController;

    /**
     * Return App instance
     * Create App instance if it does not exist yet
     */
    public static getInstance(): App {
        if(!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }
    /**
     * App constructor
     * @constructor
     */
    constructor() {
        this.expApp = express();
        this.appController = new AppController();
    }

    /**
     * Initialize and run an application
     */
    public async run(): Promise<void> {
        // oportinity to get body of request as json type
        this.expApp.use(bodyParser.urlencoded({extended: false}));
        this.expApp.use(bodyParser.json());

        // API routing
        this.appController.init();
        this.expApp.use(`${config.apiPrefix}`, this.appController.getRouter());

        // connect database
        await mongoose.connect(config.databaseURL, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        // start server
        const port = config.port;
        this.expApp.listen(port, (err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log('Server is running on port ', port);
            }
        });
    }
}