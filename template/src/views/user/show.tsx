import React from 'react';
import {Breadcrumb, Descriptions} from "antd";
import {loginUser} from "../../conf/ApplicationConfig";

export function Show(){
    const user = loginUser
    return (
        <div>
            <Breadcrumb style={{marginTop: 20, marginBottom: 20}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>User</Breadcrumb.Item>
            </Breadcrumb>
            <Descriptions title="User Info">
                <Descriptions.Item label="UserName">{user?.name}</Descriptions.Item>
                <Descriptions.Item label="Age">{user?.age}</Descriptions.Item>
                <Descriptions.Item label="email">{user?.email}</Descriptions.Item>
            </Descriptions>
        </div>
    );
}