import React from "react";
import {Show} from "../views/user/show";
import {Login} from "../views/user/login";
import {setLoginUser} from "../conf/ApplicationConfig";
import {skipAccessCheck, redirectTo} from "react-ror";

export class UserController{
    public show(){
        return (<Show />)
    }

    @skipAccessCheck
    public login(){
        return <Login />
    }

    public logout(){
        setLoginUser(null)
        redirectTo('user', 'login')
    }
}