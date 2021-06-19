import Autocomplete from "react-google-autocomplete";

const AutoCompl = () =>
    <Autocomplete
        apiKey={'AIzaSyCwhn1ScQEGkSmUHWJGbnsrWBimgHc-e9k'}
        className="AutoC"
        onPlaceSelected={(place) => {
            console.log(place);
        }}
    />;
export default AutoCompl;

