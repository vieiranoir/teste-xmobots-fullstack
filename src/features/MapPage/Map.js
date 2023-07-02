import { MapContainer, TileLayer, Popup, Circle } from "react-leaflet";
import { MapWrapper } from "./styles";

export function Map({ content }) {
  const FIVE_KM = 5000;
  return (
    <MapWrapper>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[51.505, -0.09]} radius={FIVE_KM}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Circle>
      </MapContainer>
    </MapWrapper>
  );
}
