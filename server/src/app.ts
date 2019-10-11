import express from 'express';
import {Express} from "express";
import bodyParser from 'body-parser';

import config from './config';

export default class App {
    /**
     * App instanse
     */ 
    private static instance: App;
    /**
     * Express instance
     */ 
    private expApp: Express;

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
    }

    /**
     * Initialize and run an application
     */
    public run(): void {
        // oportinity to get body of request as json type
        this.expApp.use(bodyParser.urlencoded({extended: false}));
        this.expApp.use(bodyParser.json());

        // API routing
        // ------------
        this.expApp.use(`${config.apiPrefix}/test`, (req, res) => {
            console.log("test api");
            res.json({api: "test"});
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