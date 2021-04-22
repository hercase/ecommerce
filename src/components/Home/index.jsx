import React from "react";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__sector1">
        <div className="home__lista">
          <ul>
            <li className="home__li">
              <h2 className="home__subtitle">Search</h2>
              <p className="home__p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quibusdam eius modi voluptate ipsa non quisquam
                dolorum, labore ex velit.
              </p>
            </li>
            <li className="home__li">
              <h2 className="home__subtitle">Post</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quibusdam eius modi voluptate ipsa non quisquam
                dolorum, labore ex velit.
              </p>
            </li>
            <li className="home__li">
              <h2 className="home__subtitle">Find</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quibusdam eius modi voluptate ipsa non quisquam
                dolorum, labore ex velit.
              </p>
            </li>
            <li className="home__li">
              <h2 className="home__subtitle">Buy and Sell</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quibusdam eius modi voluptate ipsa non quisquam
                dolorum, labore ex velit.
              </p>
            </li>
          </ul>
        </div>
        <div className="home__heroimg">
          <img
            className="home__heroimg"
            src="https://i.imgur.com/OqB2ryV.png"
            alt=""
          />
        </div>
      </div>
      <div className="home__sector2">
        <div className="home__text">
          <h1>Powered By React</h1>
          <p>
            React (también llamada React. js o ReactJS) es una biblioteca
            Javascript de código abierto diseñada para crear interfaces de
            usuario con el objetivo de facilitar el desarrollo de aplicaciones
            en una sola página. Es mantenido por Facebook y la comunidad de
            software libre.
          </p>
        </div>
        <div className="home__reactimg">
          <img
            className="home__reactimg"
            src="https://i.imgur.com/YM1RKXH.png"
            alt="Selfphone with React logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
