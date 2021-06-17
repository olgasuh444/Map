import * as React from "react";
import { hot } from "react-hot-loader";
import MyMapComponent from "./Component";
import PlacesAutocomplete from "./Autocomplete2"
import AutoCompl from "./Autocomplete"
// import MapWithAMarkerWithLabel from "./MarkerMap";
// import MapWithASearchBox from "./MarkerMap"

// import InitMapGoogle from "./Geolocation"

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import Header from "./Header";
import Main from "./Main";
class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <AutoCompl />
        <PlacesAutocomplete />
        <MyMapComponent />
        {/* <InitMapGoogle /> */}



      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);


// AIzaSyD9s5nMJDYGZJCoYqfbMLVwXupPT-CKMCc

// AIzaSyD1q85xJZykSobJkGEx-lVCx8J-EMNB12E  geolocation