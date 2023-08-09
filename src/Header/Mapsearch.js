import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, Autocomplete } from '@react-google-maps/api';
import style from '../Airport/Airport.module.css';


const Mapsearch = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [center, setCenter] = useState({ lat: 37.5400456, lng: 126.9921017 });
  const autoCompleteRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const onLoad = useCallback((autoComplete) => {
    autoCompleteRef.current = autoComplete;
  }, []);

  const onPlaceChanged = () => {
    if (autoCompleteRef.current != null) {
      const place = autoCompleteRef.current.getPlace();
  
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setCenter({lat, lng});
        setSelectedPlace({name: place.name, lat, lng});
      } else {
        console.log("No location data available for the selected place.");
      }
    }
  };
  const activeButton = () => {
    alert(`${searchTerm} 입력 완료`);
  }

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      activeButton();
    }
  }

  return (
    <div className={style.map}>
      <LoadScript
        googleMapsApiKey="AIzaSyDv5r3BUbGGp9O1J36N1mz8RKHYiTaMTXw"
        libraries={['places']}
      >
        <div className={style.searchContainer}>
          <button type="button" className={style.mapbt} onClick={() => window.location.href = '/'}>메인화면으로 가기</button>
          <div className={style.search}>
            <Autocomplete
              onLoad={onLoad}
              onPlaceChanged={onPlaceChanged}
            >
              <div className={style.searchInput}>
                <div>
                <input
                  type="search"
                  placeholder="공항이름이나 공항코드를 입력하세요."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => activeEnter(e)}
                />
                </div>
                <div>
                  <button className={style.mapbt} onClick={activeEnter}>검색</button>
                </div>
              </div>
            </Autocomplete>
          </div>
        </div>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={10}
        >
          {selectedPlace && (
            <Marker 
              position={center}
              onClick={() => setSelectedPlace(null)}
            />
          )}
          {selectedPlace && (
            <InfoWindow
              position={center}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h6>{selectedPlace.name}</h6>
                <p>{selectedPlace.address}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Mapsearch;
