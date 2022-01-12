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

  const columns = React.useMemo(
    () =>
      dataArr[0]
        ? Object.keys(dataArr[0])
            .filter(
              (key) =>
                key !== "gps" &&
                key !== "address" &&
                key !== "counted" &&
                key !== "solarCanopy" &&
                key !== "battery" &&
                key !== "urlDiscuss"
            )
            .map((key) => {
              if (key === "id")
                return {
                  Header: key,
                  accessor: key,
                };
              return { Header: key, accessor: key };
            })
        : [],
    [dataArr]
  );

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
