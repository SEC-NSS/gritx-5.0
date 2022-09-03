import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import EventsSlide from './components/eventsslide';
import Campusambassador from './components/campusambassador';
import Busroute from './components/busroute';
import Description from './components/Description';
import Details from './components/Details';
import Descriptionfooter from './components/Descriptionfooter';
import  Mindtwisterdetails  from "./contents/mindtwisterdetails";
import Hyperzestdetails from "./contents/hyperzest";
import Dazeplaydetails from "./contents/dazeplay";
import mindtwisterslogo from "./assets/mindtwisterslogo.png";
import hyperzestlogo from "./assets/hyperzestlogo.png";
import funnyweaverlogo from "./assets/funnyweaverlogo.png";
import dazeplaylogo from "./assets/dazeplaylogo.png";
import campusambassadorlogo from "./assets/campusambassadorlogo.png";
import pixmelogo from "./assets/pixmelogo.png";
import thewarriorsleaguelogo from "./assets/warriorsleaguelogo.png";
import squidgamelogo from "./assets/squidgamelogo.png";
import hyperzestbrochure from "./assets/hyperzestbrochure.pdf"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes >
      <Route path="/" element={
        <>
        <Navbar />
        <Home />
        <EventsSlide />
        <Campusambassador />
        <Busroute />
        <Footer />
        </>
      } />
      

    </Routes>
    <Routes >
      <Route path="/mindtwisters" element={
        <>
          <Description Descriptioncontent={Mindtwisterdetails.Mindtwisterdetails} eventlogo={mindtwisterslogo} />
          <Details Descriptioncontent={Mindtwisterdetails.Mindtwistersroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Mindtwisterdetails.Mindtwisterscontactdetails} />
        </>
      } />

    <Route path="/hyperzest" element={
        <>
          <Description Descriptioncontent={Hyperzestdetails.Hyperzestdetails} eventlogo={hyperzestlogo} brochure={hyperzestbrochure}/>
          <Details Descriptioncontent={Hyperzestdetails.Hyperzestsroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Hyperzestdetails.Hyperzestcontactdetails} />
        </>
      } />
      <Route path="/dazeplay" element={
        <>
          <Description Descriptioncontent={Dazeplaydetails.Dazeplaydetails} eventlogo={dazeplaylogo}/>
          <Details Descriptioncontent={Dazeplaydetails.Dazeplaysroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Dazeplaydetails.Dazeplaycontactdetails}/>
        </>
      } />
      <Route path="/pixme" element={
        <>
          <Description Descriptioncontent={Mindtwisterdetails.Mindtwisterdetails} eventlogo={pixmelogo}/>
          <Details Descriptioncontent={Mindtwisterdetails.Mindtwistersroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Mindtwisterdetails.Mindtwisterscontactdetails} />
        </>
      } />
      <Route path="/squidgame" element={
        <>
          <Description Descriptioncontent={Mindtwisterdetails.Mindtwisterdetails} eventlogo={squidgamelogo}/>
          <Details Descriptioncontent={Mindtwisterdetails.Mindtwistersroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Mindtwisterdetails.Mindtwisterscontactdetails} />
        </>
      } />
      <Route path="/funnyweaver" element={
        <>
          <Description Descriptioncontent={Mindtwisterdetails.Mindtwisterdetails} eventlogo={funnyweaverlogo}/>
          <Details Descriptioncontent={Mindtwisterdetails.Mindtwistersroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Mindtwisterdetails.Mindtwisterscontactdetails} />
        </>
      } />
      <Route path="/thewarriorsleague" element={
        <>
          <Description Descriptioncontent={Mindtwisterdetails.Mindtwisterdetails} eventlogo={thewarriorsleaguelogo}/>
          <Details Descriptioncontent={Mindtwisterdetails.Mindtwistersroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Mindtwisterdetails.Mindtwisterscontactdetails}/>
        </>
      } />
      <Route path="/campusambassador" element={
        <>
          <Description Descriptioncontent={Mindtwisterdetails.Mindtwisterdetails} eventlogo={campusambassadorlogo}/>
          <Details Descriptioncontent={Mindtwisterdetails.Mindtwistersroundsdetails}  />
          <Descriptionfooter Descriptioncontent={Mindtwisterdetails.Mindtwisterscontactdetails}/>
        </>
      } />


    </Routes>
    
    </HashRouter>
   
  </React.StrictMode>
);
