import {MainController} from "../controllers/MainController";
import {UserController} from "../controllers/UserController";
import {NeatLayout} from "../views/layouts/NeatLayout";
import {MainLayout} from "../views/layouts/MainLayout";
import {User} from "../domain/User";
import {redirectTo} from "react-ror";

export const controllerMapping = {
    main: MainController,
    user: UserController,
}

export const layoutMapping = {
    '/user/login': NeatLayout,
    '*': MainLayout
}

export let loginUser: User|null = null
export function setLoginUser(user: User|null){
    loginUser = user
}

export const skipAccessCheck = ["/user/login"]

export function AccessCheck(params?: any){
    if (!loginUser){
        redirectTo('user', 'login')
        return false
    }
    return true
}

function loadConfig(){
    let env: string = process.env.NODE_ENV
    if (env === 'production'){
        env = 'prod'
    }
    else if (env === 'development'){
        env = 'dev'
    }
    const config = require(`./config.${env}.js`);
    return config
}

export const config = loadConfig()
