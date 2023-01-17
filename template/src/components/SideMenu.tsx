import {Menu, MenuProps} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React from "react";
import {useNavigate} from "react-router-dom";


function createLink(controller: string, action: string, params?: any){
    let url = "/" + controller + "/" + action
    return url
}

const sideMenuItems: MenuProps['items'] = [
    {
        key: 'basic',
        label: 'User',
        icon: <UserOutlined />,
        children:[
            {
                key: createLink('user', 'show'),
                label: 'User Info'
            }
        ]
    },

]

export function SideMenu(){
    const navigate = useNavigate();
    return (<Menu
        mode="inline"
        style={{ height: '100%'}}
        items={sideMenuItems}
        onClick={(e) => navigate(e.key)}
    />)
}