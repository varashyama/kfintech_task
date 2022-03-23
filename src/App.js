import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "./components/nav/";

import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import SignUp from "./components/register";
import SignIn from "./components/login";
import MyProfile from "./components/my_profile";
import AllProfile from "./components/all_profiles";
import React, { useContext, useMemo, useState } from "react";

export const tokenContext = React.createContext({});

const PrivateComponent = ({ component: MyComponent }) => {
  const {token} = useContext(tokenContext);
  if (!token) {
    return <Navigate to="/login"/>
  }

  return <MyComponent token={token}/>
}

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
            
            <Route path="/allprofiles" element={<PrivateComponent component={AllProfile} />}  ></Route>
            <Route path='/myprofile' element={<PrivateComponent component={MyProfile} />} ></Route>
            <Route path='/login' element={<SignIn />} ></Route>
            <Route path='/' exact element={<SignUp />}></Route>
            <Route path="*" element={<Navigate to="/login" />}></Route>
          </Routes>
        </div>
      </Router>

    </tokenContext.Provider>

  );
}

export default App;
