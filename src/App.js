import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import UsersList from './components/UsersList/UsersList';

function App() {

  const [isUsersListVisible, setUsersListVisible] = useState(false);

const handleLoadUsers = () => {
  setUsersListVisible(true);
};

  return (
    <>
       <NavBar onLoadUsers={handleLoadUsers} />
      {isUsersListVisible && <UsersList />}
      <Main />
      <Footer />
    </>
  );
}

export default App;


