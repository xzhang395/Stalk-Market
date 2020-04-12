import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation/index.js';
import AccountPage from './components/Account';
import * as ROUTES from './constants/routes.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
            <div>
              <Navigation />
              <Route exact path={ROUTES.LANDING} component={App} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            </div>
          </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
         