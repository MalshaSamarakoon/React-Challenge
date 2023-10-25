import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UsersList from './UsersList/UsersList'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<UsersList />}></Route>
                {/* Add UserDetails routes here... */}
            </Routes>
        </main>
    )
}

export default Main