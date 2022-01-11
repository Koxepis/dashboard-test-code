import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mockData from "./../../shared/helpers/MOCK_DATA.json";

const MapComponent = () => {
  console.log(mockData[0].address.city);

  return (
    <div className="pb-12 flex flex-col items-center justify-center space-y-12">
      <div className="min-w-full mx-auto">
        <MapContainer
          center={[1.292839, 103.859512]}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution="Dashboard Test Code"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {mockData
            .filter((location) => location.address.city === "Singapore")
            .map((item) => (
              <Marker
                key={item.id}
                position={
                  [
                    item.gps.latitude as number,
                    item.gps.longitude as any,
                  ] as any
                }
              >
                <Popup>
                  <p>Name: {item.name}</p>
                  <p>Address: {item.address.street}</p>
                  <p>Status: {item.status}</p>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
