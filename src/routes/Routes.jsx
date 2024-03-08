import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from '../pages/MovieDetails';
import Login from '../pages/Login'


const routes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="movies/:id" element={<MovieDetails/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default routes
