import React from 'react'
import ReactDOM from 'react-dom/client'
import AppBusinessCard from './components_businessCard/App_businessCard'
import './index.css'
import Home from 'Home.jsx'
import TravelJournal from './components_TravelJournal/AppTravelJournal.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppForm from './components_form/AppForm'
import AppNotes from './components_notes/AppNote'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Home />
    <Routes>
      <Route path="/businessCard" element={<AppBusinessCard />} />
      <Route path="/" element={<AppNotes />} />
      <Route path="/travelJournal" element={<TravelJournal />} />
      <Route path="/appForm" element={<AppForm />} />
      <Route path='*' element={<h1>404</h1>} />
    </Routes>
  </BrowserRouter>
)
