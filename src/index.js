import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/Reducers/rootReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Common/Navigations';
import ManageCampaign from './components/ManageCampaigns/ManageCampaign';
import UserRoles from './components/UserRoles/UserRoles';

const store = createStore(rootReducer);

const Routes = () => (
    <Router>
        <React.Fragment>
            <Navigation />
            <div>
                <Route path="/manage_campaign"  component={ManageCampaign} />
                {/* <Route path="/compaign" component={ManageCampaign} /> */}
                <Route path="/" exact component={App} />
                <Route path="/user_roles"  component={UserRoles} />

            </div>
        </React.Fragment>
    </Router>
)

ReactDOM.render(
<Provider store={store}>
    <Routes />
    </Provider>
    , document.getElementById('root'));
serviceWorker();
