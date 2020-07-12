import React, { useState} from 'react';
import GoogleMapReact from 'google-map-react';
import useClustersWithBounds from '../api/ClusterAPI';
import './GoogleMap.css';

const Marker = ({ children }) => children;

export default function GoogleMap()  {

  const onChange = ({zoom, bounds}) => {
    setZoom(zoom);
    setBounds({
      nw: {
        lng: bounds.nw.lng,
        lat: bounds.nw.lat,
      },
      se: {
        lng: bounds.ne.lng,
        lat: bounds.ne.lat
      }
    })
  }

  const mapRef = useState();
  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState({
    nw: {
      lng: -46.6357351149081,
      lat: -23.194985793907847
    }, 
    se: {
      lat: -23.927602731919876,
      lng: -45.785667976236226
    }
  })
  
  const markers = useClustersWithBounds({
    zoom,
    bounds,
  })
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: 'AIzaSyDoUsWiQB3I5XJvC2eXYlk4GJX_bsn_ZOI'}}
        defaultCenter={{ lat: -23.31509536897015, lng: -46.57099951314362 }}
        defaultZoom={10}
        distanceToMouse={()=>{}}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={onChange}
      >
        { markers.map((marker, index) => {
          const {
            cluster: isCluster,
            point_count: pointCount,
          } = marker.properties;

          if (isCluster) {
            return (
              <Marker 
              key={index}
              lat={marker.geometry.coordinates[1]}
              lng={marker.geometry.coordinates[0]}
              >
                <div
                  className="cluster"
                  style={{
                    width: `${10 + (pointCount / 200) * 20}px`,
                    height: `${10 + (pointCount / 200) * 20}px`
                  }}
                >
                  {pointCount}
                </div>
            </Marker>
            )
          }
          return (
              <Marker 
              key={index}
              lat={marker.geometry.coordinates[1]}
              lng={marker.geometry.coordinates[0]}
              >
                <div
                  className="marker"
                  style={{
                    width: `20px`,
                    height: `20px`
                  }}
                >
                  {marker.properties.name}
                </div>
            </Marker>
            )
        })}
      </GoogleMapReact>
    </div>
  );
}