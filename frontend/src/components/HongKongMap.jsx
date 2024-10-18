import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { scaleLinear } from 'd3-scale';

// Function to create custom divIcon
const createCustomIcon = (count, color) => {
  return L.divIcon({
    html: `<div style="
      background-color: ${color};
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      color: white;
      font-weight: bold;
    ">${count}</div>`,
    className: ''
  });
};

const coordinatesToCount = {
  '22.2819,114.1582': 5,
  '22.2968,114.1722': 3,
  '22.3193,114.1694': 10,
  // Add more coordinates as needed
};

// Create a color scale
const colorScale = scaleLinear()
  .domain([0, Math.max(...Object.values(coordinatesToCount))])
  .range(['lightgreen', 'darkgreen']);

const HongKongMap = () => {
  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '75%' /* 16:9 Aspect Ratio */ }}>
      <MapContainer center={[22.3193, 114.1694]} zoom={12} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {Object.entries(coordinatesToCount).map(([coord, count], index) => {
          const [lat, lng] = coord.split(',').map(Number);
          const color = colorScale(count); // Get color from scale

          return (
            <React.Fragment key={index}>
              <Marker position={[lat, lng]} icon={createCustomIcon(count, color)}>
                <Popup>
                  <strong>Count: {count}</strong>
                </Popup>
              </Marker>
              <Circle center={[lat, lng]} radius={50} color="blue" fillOpacity={0.5} />
            </React.Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default HongKongMap;