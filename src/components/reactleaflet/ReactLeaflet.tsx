import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./reactLeaflet.css";
import { Icon } from "leaflet";

// setting the receive type
interface Props {
  leafletData: any;
}

const ReactLeaflet = (props: Props) => {
  let leafletData = props.leafletData;

  return (
    <div className="shadow-lg border-2 rounded-2xl border-gray-600">
      <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* looping over all the country data */}
        {leafletData.map((el: any, indx: number) => (
          <Marker
            position={[el.countryInfo.lat, el.countryInfo.long]}
            icon={
              new Icon({
                iconUrl: "/marker-icon.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
            key={indx}
          >
            <Popup>
              <ul>
                <li>Country: {el.country}</li>
                <li>Active: {el.active}</li>
                <li>Recovered: {el.recovered}</li>
                <li>Deaths: {el.deaths}</li>
              </ul>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ReactLeaflet;
