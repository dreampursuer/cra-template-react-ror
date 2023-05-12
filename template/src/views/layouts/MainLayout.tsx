import React from "react";
import {Layout, Menu, MenuProps} from "antd";
import {AvatarDropdown} from "../../components/AvatarDropdown";
import {SideMenu} from "../../components/SideMenu";
import {Outlet} from "react-router-dom";
import "../../assets/stylesheets/main.css"

const topMenuItems: MenuProps['items'] = [
    {
        key: 'nav1',
        label: 'nav 1'
    },
    {
        key: 'nav2',
        label: 'nav 2'
    }
]

export function MainLayout(){
    return (
        <Layout style={{height: "100vh"}}>
            <Layout.Header style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={"logo"}><a href={'/'}>React Ror</a></div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['nav1']} items={topMenuItems} />
                <div style={{marginLeft: 'auto'}}>
                    <AvatarDropdown />
                </div>
            </Layout.Header>
            <Layout>
                <Layout.Sider width={200}>
                    <SideMenu />
                </Layout.Sider>
                <Layout>
                    <Layout.Content style={{paddingLeft: 20, paddingRight: 20}}>
                        <Outlet />
                    </Layout.Content>
                    <Layout.Footer>
                        <div>©2023 Powered by react-ror</div>
                    </Layout.Footer>
                </Layout>
            </Layout>
        </Layout>
    );
}