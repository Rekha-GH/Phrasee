import React from 'react';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './Login/Components/LoginPage';
import ProvideAuth from './Common/Components/ProvideAuth';
import { Provider } from 'react-redux';
import store from './Store/Store';
import PrivateRoute from './Common/Components/PrivateRoute';
import PatientPage from './Patient/Components/PatientPage';

const App = () => {
  return (
    <Provider store={store}>
      <header>
        <img src="./images/dhg_whole.png" alt={'logo'} />
      </header>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/">
              <PatientPage />
            </PrivateRoute>
          </Switch>
        </Router>
      </ProvideAuth>
      <footer>
      </footer>
    </Provider>
  );
}

export default App;
