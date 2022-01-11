import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  const [dataArr, setDataArr] = useState([]) as any;

  const fetchData = async () => {
    const response = await fetch(
      "https://supercharge.info/service/supercharge/allSites"
    );
    const data: any[] = await response.json();
    sessionStorage.setItem("all-sites", JSON.stringify(data));
    setDataArr(data);
    console.log(data);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("all-sites")) {
      fetchData();
    } else {
      let data = sessionStorage.getItem("all-sites");
      if (data) {
        data = JSON.parse(data);
        setDataArr(data);
      }
    }
  }, []);

  return (
    <div className="pb-12 flex flex-col items-center justify-center space-y-12">
      <div className="min-w-full mx-auto">
        {dataArr.length > 0 && (
          <MapContainer
            center={[
              dataArr[2822].gps.latitude as number,
              dataArr[2822].gps.longitude as number,
            ]}
            zoom={7}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution="My Dashboard Test Code"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {dataArr
              .filter((location: any) => location.address.country === "Taiwan")
              .map((item: any) => (
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
        )}
      </div>
    </div>
  );
};

export default MapComponent;