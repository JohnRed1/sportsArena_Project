import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { Homepage } from './Pages/Homepage/Homepage'
import { Auth } from './Components/Auth'
import { Account } from './Components/Account'
import { ProtectedRoute } from './Components/ProtectedRoutes' // Import your guard
import {ReadingPage} from './Pages/ReadingPage/ReadingPage'
import { Articles } from './Pages/Articles/Articles'
import { WriteForUs } from './Pages/WriteForUs/WriteForUs'

import './App.css'

function App() {
  return (

    <>
    {/* Toast */}
    <Toaster position="top-center" reverseOrder={false} />
    
    
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<h1>About</h1>} />
      <Route path='/contact' element={<h1>Contact</h1>} />
      <Route path='/news/:id' element={<ReadingPage />} />

      {/* Protected Routes Group */}
      <Route element={<ProtectedRoute />}>
        <Route path='/write-for-us' element={<WriteForUs />} />
      <Route path='/articles' element={<Articles />} />
        <Route path="/account/:pathname" element={<Account />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/auth/:pathname" element={<Auth />} />
    </Routes>
    </>
    
  )
}

export default App