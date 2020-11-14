import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
// import GameLogoComponent from '../../components/GameLogoComponent/GameLogoComponent';
import SpoonImageComponent from '../../components/SpoonImageComponent/SpoonImageComponent';
import ForkImageComponent from '../../components/ForkImageComponent/ForkImageComponent';
import Title from '../../components/Title/Title';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
// import Footer from '../../components/FooterComponent/FooterComponent';
import Layout from '../../components/Layout';

export const Home = () => (
  <body className="bodycontainer">
    <div className="headercontainer">
      <div className="homelogo">
        <GameLogoComponent />
      </div>
      <Title title="MEMORY GAME" subtitle="- perserve culinary heritage -" />
    </div>

    <ForkImageComponent />
    <div className="homebutton">
      <Link to="/pick-game-page">
        <SubmitButton buttonTitle="Play EAT THE PAIR" />
      </Link>
    </div>

    <SpoonImageComponent />

    <div className="footer">
      <Footer />
    </div>
  </body>

);
