
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";


const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,

)((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 49.23, lng: 28.43 }}
    >
        {<Marker position={{ lat: 49.23, lng: 28.43 }} />}

    </GoogleMap>


)

export default MyMapComponent;