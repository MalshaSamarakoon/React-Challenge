import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import UserDetails from "./UserDetails/UserDetails";

const Main = () => {
  return (
      <Routes>
        <Route path="/user/:userId" element={<UserDetails />} />
      </Routes>  );
};

export default Main;
