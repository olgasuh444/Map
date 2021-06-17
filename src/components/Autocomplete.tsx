import Autocomplete from "react-google-autocomplete";

const AutoCompl = () =>
    <Autocomplete
        apiKey={'AIzaSyD9s5nMJDYGZJCoYqfbMLVwXupPT-CKMCc'}
        onPlaceSelected={(place) => {
            console.log(place);
        }}
    />;
export default AutoCompl;

// import React from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// const Component = () => (
//     <div>
//         <GooglePlacesAutocomplete
//             apiKey="AIzaSyD9s5nMJDYGZJCoYqfbMLVwXupPT-CKMCc"
//         />
//     </div>
// );

// export default Component;