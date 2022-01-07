import React from "react";
interface Props {
  children: any;
}

const StatsCard = (props: Props) => {
  return (
    <div className="mt-10 pb-12 bg-white sm:pb-16">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Current Stats
      </h2>
      <div className="relative mt-3">
        <div className="relative max-w-full mx-auto sm:mx-0">
          <div className="max-w-4xl mx-auto">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
