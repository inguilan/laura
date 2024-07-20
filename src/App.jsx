import React from 'react';
import './App.css';

const BirthdayCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="title">¡Feliz Cumpleaños, María!</h1>
      </div>
      <div className="card-body">
        <p className="message">
          Hay momentos inolvidables que se atesoran para siempre en el corazón.
          Por esta razón quiero compartir contigo este día tan especial.
        </p>
        <h2 className="subtitle">Mis 15 Años</h2>
        <div className="details">
          <div className="detail-item">
            <p><strong>03</strong></p>
            <p>AGO</p>
          </div>
          <div className="detail-item separator">
            <hr />
          </div>
          <div className="detail-item">
            <p><strong>RESTAURANTE RILLETE (FRENTE AL BATALLÓN)</strong></p>
          </div>
          <div className="detail-item separator">
            <hr />
          </div>
          <div className="detail-item">
            <p><strong>7</strong></p>
            <p>PM</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Mapa de la ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.2635153436495!2d-76.28686452590732!3d3.526478596447801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a04daf4875153%3A0x106bb69726479b66!2sRillete%20Restaurante!5e0!3m2!1ses!2sus!4v1721422856687!5m2!1ses!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="decoration">
          <img src="https://www.svgrepo.com/show/192917/balloons.svg" alt="Balloons" />
        </div>
      </div>
      <div className="card-footer">
        <p>¡Te espero!</p>
        <p>Confirmar Asistencia</p>
      </div>
      <div className="confetti"></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BirthdayCard />
    </div>
  );
}

export default App;
