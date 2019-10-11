import App from './app';
/**
 * Bootstrap server
 */
function startServer(): void {
    try{
        const app: App = App.getInstance();
        app.run();
    }
    catch(err) {
        console.log(err);
    }
}

startServer();