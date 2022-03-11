import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom'

import Header from './Components/Header/Header';
import Home from "./Containers/Home";
import Footer from './Components/Footer/Footer';

import Coaching from "./Containers/Coaching";
import Testimony from "./Containers/Testimony/Testimony";
import Software from "./Containers/Software/Software";
import Prevention from "./Containers/Prevention/Prevention";
import DetailCoach from "./Containers/DetailCoach/DetailCoach";

import RequireDataAuth from "./helpers/require-data-auth";
import Login from "./Containers/User/Login";
import Logout from "./Containers/User/Logout";
import Register from "./Containers/User/Register";
import Confirmation from "./Containers/User/Confirmation";
import Dashboard from "./Containers/User/Dashboard";
import UpdateForm from "./Containers/UpdateForm/UpdateForm";
import AddForm from "./Containers/AddForm/AddForm"

function App() {
  return (
    <>
      <div className="App">

        <RequireDataAuth child={Header} />

          <Routes>

              <Route exact path='/' element={<RequireDataAuth child={Home} />}/>
              <Route exact path='/coaching' element={<RequireDataAuth child={Coaching} />}/>
              <Route exact path='/detailCoachPage/:id' element = {<RequireDataAuth child={DetailCoach} />}/>
              <Route exact path='/testimony' element={<RequireDataAuth child={Testimony} />}/>
              <Route exact path='/software' element={<RequireDataAuth child={Software} />}/>
              <Route exact path='/prevention' element={<RequireDataAuth child={Prevention} />}/>
              <Route exact path='/login' element={<RequireDataAuth child={Login} />}/>
              <Route exact path="/logout" element = {<RequireDataAuth child={Logout} />}/>
              <Route exact path='/register' element={<RequireDataAuth child={Register} />}/>
              <Route exact path='/dashboard' element={<RequireDataAuth child={Dashboard} />}/>
              <Route exact path='/updateForm/:id' element={<RequireDataAuth child={UpdateForm} />}/>
              <Route exact path='/addForm' element={<RequireDataAuth child={AddForm} />}/>
              <Route exact path='/confirmation' element={<RequireDataAuth child={Confirmation} />}/>

          </Routes>

          <Footer />
      </div>
    </>
  );
}

export default App;
