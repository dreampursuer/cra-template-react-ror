import {Avatar, Dropdown} from "antd";
import {LogoutOutlined, UserOutlined} from "@ant-design/icons";
import {loginUser} from "../conf/ApplicationConfig";
import {createLink} from "react-ror";

const items = [
    {
        key: 'center',
        icon: <UserOutlined />,
        label: <a href={createLink('user', 'show')}>User Info</a>,
    },
    {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: <a href={createLink('user', 'logout')}>Logout</a>,
    },
]

export function AvatarDropdown(){
    const user = loginUser
    return (
        <Dropdown menu={{items}} placement="bottom">
            <div>
                <Avatar size="small" src={"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"} alt="avatar" />
                <span style={{color: "#fff"}}> {user?.name}</span>
            </div>
        </Dropdown>
    );
}