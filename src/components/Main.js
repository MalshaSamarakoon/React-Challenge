import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails/UserDetails";
import UsersList from "./UsersList/UsersList";

const Main = () => {
  return (
      <Routes>
         <Route path="/" exact component={UsersList} />
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>  
      );
};

export default Main;
