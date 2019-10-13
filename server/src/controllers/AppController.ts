import BaseController from './BaseController';
import IPathRoute from '../interfaces/IPathRoute';
import AuthController from './AuthController';

class AppController extends BaseController {
    private routeList: IPathRoute[] = [
        {path: '/auth', controller: AuthController}
    ];
    
    public init() {
        this.router.use('/test', (req, res) => {
            res.json({api: "test"});
        });

        for(const {path, controller: Controller} of this.routeList) {
            const controller: BaseController = new Controller();
            controller.init();
            this.router.use(`${path}`, controller.getRouter())
        }
    }
}

export default AppController;
