import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import geolib from 'geolib/es/getCenter';

function Map( {searchResult} ) {
    

    const [ selectedLocation, setSelectedLocation ] = useState({});

    const cordinate = searchResult.map(item => {
        return {
            latitude:item.lat,
            longitude:item.long
        }
    })
    const center = geolib(cordinate);

        const [ viewport, setViewport ] = useState({
        latitude: 51.509865,
        longitude: -0.118092,
        zoom: 10,
        width:650,
        height:2300,
    });
    
    const selectedLocationHandler = (item) => {
        setSelectedLocation(item)
    }
 

    return (
        <ReactMapGL
            
            mapStyle='mapbox://styles/ismailsaghraoui/ckvc6wbet0ici15miub2z5ti5'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            >
            {searchResult.map(item => {
                return <div key={item.lat}>
                    <Marker
                        latitude={item.lat}
                        longitude={item.long}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                    <p onClick={selectedLocationHandler.bind(null, item)} className="cursor-pointer animate-bounce text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </p>
                    </Marker>
                    {selectedLocation.long === item.long ? (
                        <Popup onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={item.lat}
                            longitude={item.long}
                            className="bg-gray-300 p-4"
                        >
                            <div className="p-3">
                                <p className="p-2 border mb-2 shadow-md rounded-full hover:bg-gray-400 font-bold">{item.title}</p>
                                
                                <img className="h-48 w-48 rounded-lg" src={item.img}/>
                                
                            </div>
                        </Popup>
                    ):(false)}
                </div>
                
            })}
        </ReactMapGL>
    )
}

export default Map;
