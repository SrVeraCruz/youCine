import React from 'react'
import ReactDOM from 'react-dom/client'
import { BowserRouter, Routes, Route } from "react-router-dom"

import App from './App.jsx'


import './index.css'
import Home from './routes/Home.jsx'
import Movie from './routes/Movie.jsx'
import Search from './routes/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BowserRouter>
  </React.StrictMode>,
)
