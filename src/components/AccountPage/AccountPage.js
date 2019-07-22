import React from 'react';

import classes from './AccountPage.module.css';

const accountPage = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <p>John Doe</p>
            </div>
            <div className={classes.content}>
                <div className={classes.sidebar}>
                    <ul>
                        <li>United States</li>
                        <li>Gold Member</li>
                        <li>Contract Work?</li>
                        <li>Interests</li>
                        <li>Style</li>
                    </ul>
                </div>
                <div className={classes.body}>
                    <p>John's Models</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                    <p>I'm a model</p>
                </div>
                <div className={classes.footer}>
                    <p>Followed By / Follows</p>
                </div>
            </div>
        </div>
    );
}

export default accountPage;