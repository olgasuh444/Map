import React from 'react';
import initMap from './map';
import logo from './map.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Эх, прокачу</h1>
        <div className="Register"><span>вход</span>/<span>регистрация</span></div>
      </header>
      <main className="Users-nav">
        <div className="user-nav">
          <h2>Маршрут</h2>
          <div className="begin">
            <input type="text" placeholder="начало маршрута" />
            {/* <input name="1" placeholder="Начальная точка маршрута" point="[object Object]" couriertype="car" topswitcher="route" points="[object Object]" waybillpoints="[object Object]" waybillarray="" currentlocation="40,80" id="1" class="Input" type="text" value=""></input> */}
          </div>
          <div className="finish">
            <input type="text" placeholder="пункт назначения" />

          </div>
        </div>
        <div className="map">

          {/* `{initMap()}`; */}
        </div>


      </main>
    </div>
  );
}

export default App;



// AIzaSyD9s5nMJDYGZJCoYqfbMLVwXupPT-CKMCc