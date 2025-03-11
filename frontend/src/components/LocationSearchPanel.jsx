// import Reac
// t from 'react';
import PropTypes from 'prop-types';

const LocationSearchPanel = (props) => {
    const locations = [
        "Sf 55 janta flat xu1 grater noida",
        "Sf 56 janta flat grater noida",
        "Sf 574 flat xu1 grater noida",
        "Sf 57 janta flat xu1 grater noida",
    ];

    return (
        <div>
            {/* Display fetched suggestions */}
            {locations.map((elem, idx) => (
                <div 
                    key={idx} 
                    onClick={() => {
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }} 
                    className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
                >
                    <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                        <i className="ri-map-pin-fill"></i>
                    </h2>
                    <h4>{elem}</h4>
                </div>
            ))}
        </div>
    );
};

// PropTypes validation
LocationSearchPanel.propTypes = {
    setVehiclePanel: PropTypes.func.isRequired,
    setPanelOpen: PropTypes.func.isRequired,
};

export default LocationSearchPanel;
