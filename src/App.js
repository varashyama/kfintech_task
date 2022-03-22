import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./components/nav/";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/register";
import SignIn from "./components/login";
import MyProfile from "./components/my_profile";
import AllProfile from "./components/all_profiles";
import React, { useMemo, useState } from "react";

export const tokenContext = React.createContext({});

function App() {
  const [token, setToken] = useState("");
  const value = useMemo(
    () => ({ token, setToken }), 
    [token]
  );

  return (
    <tokenContext.Provider value={value}>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/allprofiles" element={<AllProfile />}  ></Route>
            <Route path='/myprofile' element={<MyProfile />} ></Route>
            <Route path='/login' element={<SignIn />} ></Route>
            <Route path='/' exact element={<SignUp />}></Route>
            <Route path="*" element={<SignUp />}></Route>
          </Routes>
        </div>
      </Router>

    </tokenContext.Provider>

  );
}

export default App;
