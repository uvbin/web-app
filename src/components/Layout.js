import React, { useState } from 'react';
import SearchPage from '../components/SearchPage';
import AccountPage from '../containers/AccountPage.js/index.js.js';
import {
    Layout as PageLayout,
    Menu,
    Breadcrumb,
} from 'antd';
import classes from './Layout.module.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = PageLayout;

const headerStyle = {
    lineHeight: '48px',
    height: '48px',
    display: 'flex',
    padding: '0px',
};


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
            <Header style={headerStyle}>
                <div className={classes.headerLeft}>
                    <a className={classes.logo}>uvbin</a>
                </div>
                <div className={classes.headerMiddle}></div>
                <Menu 
                    className={[classes.menu, classes.headerRight].join(' ')}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}>
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