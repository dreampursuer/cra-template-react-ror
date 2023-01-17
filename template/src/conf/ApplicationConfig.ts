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

export function AccessCheck(params?: any){
    if (!loginUser){
        redirectTo('user', 'login')
        return false
    }
    return true
}
