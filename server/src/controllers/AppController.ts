import BaseController from './BaseController';
import IPathRoute from '../interfaces/IPathRoute';
import isAuth from '../middlewares/isAuth';
import AuthController from './AuthController';
import UserController from './UserController';
import FileController from './FileController';

class AppController extends BaseController {
    private routeList: IPathRoute[] = [
        {path: '/auth', controller: new AuthController()},
        {path: '/user', controller: new UserController()},
        {path: '/file', controller: new FileController()}
    ];
    
    public init() {
        this.router.get('/test', isAuth, (req, res) => {
            res.json({api: "test"});
        });

        for(const {path, controller} of this.routeList) {
            controller.init();
            this.router.use(`${path}`, controller.getRouter());
        }
    }
}

export default AppController;
