import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import PatientState from './context/patient/patient.state'
import DoctorState from './context/doctor/doctor.state'

import Home from './components/pages/Home.page'
import Register from './components/pages/Register.page'
import _500 from './components/pages/500.page'
import Login from './components/pages/Login.page'
import DoctorDashboard from './components/pages/Doctor/DoctorDasboard.page'

function App() {
  return (
    <DoctorState>
      <PatientState>
        <Router>  
          <div className="App">
            <Switch>

              { /* HOME ROUTE */ }
              <Route exact path="/">
                <Home />
              </Route>

              {/* REGISTER ROUTE */}
              <Route exact path="/register">          
                <Register />
              </Route>

              {/* LOGIN ROUTE */}
              <Route exact path="/login">
                <Login />
              </Route>

              {/* DOCTOR DASHBOARD ROUTE */}
              <Route path="/doctor">
                <DoctorDashboard/>
              </Route>

              {/* 500 Error Route */}
              <Route exact path="/error">
                <_500 />
              </Route>
            </Switch> 
          </div>

        </Router>
      </PatientState>
    </DoctorState>
  );
}

export default App;
