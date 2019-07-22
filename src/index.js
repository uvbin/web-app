import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
//import Amplify from "aws-amplify";
import * as serviceWorker from './serviceWorker';
//import config from "./config";
import './index.css';

// For use later - hitting backend
// Amplify.configure({
//     Auth: {
//       mandatorySignIn: true,
//       region: config.cognito.REGION,
//       userPoolId: config.cognito.USER_POOL_ID,
//       identityPoolId: config.cognito.IDENTITY_POOL_ID,
//       userPoolWebClientId: config.cognito.APP_CLIENT_ID
//     },
//     Storage: {
//       region: config.s3.REGION,
//       bucket: config.s3.BUCKET,
//       identityPoolId: config.cognito.IDENTITY_POOL_ID
//     },
//     API: {
//       endpoints: [
//         {
//           name: "uvbin",
//           endpoint: config.apiGateway.URL,
//           region: config.apiGateway.REGION
//         },
//       ]
//     }
//   });

ReactDOM.render(
    // We wrap our App render in Browser BrowserRouter, it works with Router
    // in App.js and Routes.js
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
