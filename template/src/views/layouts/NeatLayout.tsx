import React from "react";
import {Outlet} from "react-router-dom";


export function NeatLayout(){
    return (
        <div><Outlet /></div>
    );
}