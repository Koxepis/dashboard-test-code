import React from "react";
import BarChart from "../elements/BarChart";
<dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3"></dl>;

const Chart = () => {
  return (
    <div>
      <div className="relative mt-3">
        <div className="relative max-w-full mx-auto sm:mx-0">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <BarChart />
              <BarChart />
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
