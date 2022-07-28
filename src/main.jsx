import React from 'react'
import ReactDOM from 'react-dom/client'
import AppBusinessCard from './components_businessCard/App_businessCard'
import './index.css'
import Home from './Home.jsx'
import TravelJournal from './components_TravelJournal/AppTravelJournal.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TravelJournal />
  </BrowserRouter>
)
