import logo from './logo.svg';
import './App.css';
import React from 'react';
import RedComponent from './Components/RedComponent';
import PortalNav from './Components/PortalNav';
import Login from './Components/LoginComp';
import { appStore } from './ApplicationStore/LoginStore'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import { Provider } from 'react-redux';
import FuncStateComp from './Components/FuncStateComp';
import DisplayFuncEff from './Components/DisplayFuncEff';
import FuncReducerComp from './Components/FuncReducerComp';

export const nameContext = React.createContext();

function App() {
  const a = 4;
  const b = 6;
  return (
    <>
   {/*  <DisplayFuncEff />
    <h3 data-testid="sum">{a+b}</h3>
    <ul title='listItem'>
      <li>Mumbai</li>
      <li>Dubai</li>
      <li>New York</li>
    </ul> */}
    <Router>
        <Provider store={appStore}>
        <div>
            <PortalNav />
            <Switch>
              <Route  path="/Shop" component={RedComponent}></Route>
              <Route  path="/Login" component={Login}></Route>
            </Switch>
        </div>
        </Provider>
    </Router>
    </>
  );
}

export default App;
// React-router version 5
/* <Router>
        <Provider store={appStore}>
        <div>
            <PortalNav />
            <Switch>
              <Route  path="/Shop" component={RedComponent}></Route>
              <Route  path="/Login" component={Login}></Route>
            </Switch>
        </div>
        </Provider>
    </Router> */
// React Router version 6
// Switch --. Routes
// Route compo - Route element
// path - /users/:userId --> to access this - useParams()
//to access History obj --> useNavigate()
// Link component as it is
// <Redirect to="/home"> ==> navigate("/home")
/* <Router>
  <Provider store={appStore}>
    <div>
        <PortalNav />
        <Routes>
          <Route  path="/Shop" element={<RedComponent />}></Route>
          <Route  path="/Login" element={<Login />}></Route>
        </Routes>
    </div>
  </Provider>
</Router> */
