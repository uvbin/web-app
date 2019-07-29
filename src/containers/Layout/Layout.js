import React, { useState } from 'react';
import Aux from '../../hoc/Auxiliary';
import SearchPage from '../../components/SearchPage/SearchPage';
import AccountPage from '../../components/AccountPage/AccountPage.js';
import classes from './Layout.module.css';
import {
    Layout as PageLayout,
    Menu,
    Breadcrumb,
} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = PageLayout;


const Layout = (props) => {
    const [state, setState] = useState({
        searchContent: '',
        currentPage: <SearchPage />
    })

    const accountPageHandler = () => {
        setState({...state, currentPage: <AccountPage />})
    }

    return (
        <PageLayout>
            <Header className={classes.header}>
                {/* <div>
                    <a href="/" className={classes.logo}>uvbin</a>
                </div> */}
                <Menu 
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}>
                    <Menu.Item key="account">My Account</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                </Menu>
            </Header>
            {state.currentPage}
        </PageLayout>
    );
}

export default Layout;