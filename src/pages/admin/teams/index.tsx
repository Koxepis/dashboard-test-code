import React, { useEffect, useState } from "react";
import Table from "../../../components/elements/Table";

const TeamPage = () => {
  const [dataArr, setDataArr] = useState([]) as any;

  const fetchData = async () => {
    const response = await fetch(
      "https://supercharge.info/service/supercharge/allSites"
    );
    const data: any[] = await response.json();
    sessionStorage.setItem("all-sites", JSON.stringify(data));
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

  const columns = React.useMemo(() => {
    if (dataArr.length === 0) return [];
    return Object.keys(dataArr[0])
      .filter(
        (key) =>
          key !== "locationId" &&
          key !== "counted" &&
          key !== "solarCanopy" &&
          key !== "battery" &&
          key !== "urlDiscuss"
      )
      .map((key) => {
        switch (key) {
          case "gps":
            return {
              id: key,
              Header: key,
              accessor: ({ gps }: any) => (
                <a
                  rel="noreferrer"
                  href={`https://www.google.com/maps/@${gps.latitude},${gps.longitude},23z`}
                  target="_blank"

                >
                  {gps.latitude}, {gps.longitude}
                </a>
              ),
            };
          case "address":
            return {
              id: key,
              Header: key,
              accessor: ({ address }: any) =>
                `${address.street}, ${address.city}`,
              maxWidth: 20,
            };
          default:
            return { Header: key, accessor: key };
        }
      });
  }, [dataArr]);

  const data = React.useMemo(() => [...dataArr], [dataArr]) as any[];

  return (
    <div className="mt-3">
      <Table
        columns={columns}
        data={data}
        className="bg-white border border-gray-400 rounded-md shadow-md"
        headerClass=""
        bodyClass="text-gray-900"
      />
    </div>
  );
};

export default TeamPage;
