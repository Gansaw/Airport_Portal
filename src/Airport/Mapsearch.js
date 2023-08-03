import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import style from './Airport.module.css';

const Mapsearch = () => {
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  
  const malls = [
    { label: "C", name: "코엑스몰", lat: 37.5115557, lng: 127.0595261 },
    { label: "G", name: "고투몰", lat: 37.5062379, lng: 127.0050378 },
    { label: "D", name: "동대문시장", lat: 37.566596, lng: 127.007702 },
    { label: "I", name: "IFC몰", lat: 37.5251644, lng: 126.9255491 },
    { label: "L", name: "롯데월드타워몰", lat: 37.5125585, lng: 127.1025353 },
    { label: "M", name: "명동지하상가", lat: 37.563692, lng: 126.9822107 },
    { label: "T", name: "타임스퀘어", lat: 37.5173108, lng: 126.9033793 },
  ];

  return (
    <div className={style.map}>
      <LoadScript
        googleMapsApiKey="AIzaSyDv5r3BUbGGp9O1J36N1mz8RKHYiTaMTXw"
      >
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat: 37.5400456, lng: 126.9921017 }}
          zoom={10}
        >
          {malls.map(mall => (
            <Marker 
              key={mall.name}
              position={{ lat: mall.lat, lng: mall.lng }}
              label={mall.label}
              onClick={() => setSelectedPlace(mall)}
            />
          ))}
          {selectedPlace && (
            <InfoWindow
              position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h2>{selectedPlace.name}</h2>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Mapsearch;
