import React from "react";
import { IStatResponse } from "../interfaces/response/Shortener.response";

interface IProps {
  shortCodeStat: IStatResponse;
}

const StatCard: React.FC<IProps> = ({ shortCodeStat }) => {
  return (
    <div className="rounded-lg bg-white py-6 px-4 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
        <div>
          <p className="text-gray-500 text-sm">Shortened URL</p>
          <p className="font-medium text-blue-600 break-all">
            {shortCodeStat?.generatedURL}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Original URL</p>
          <p className="font-medium break-all">{shortCodeStat?.originalURL}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Short Code</p>
          <p className="font-medium break-all">{shortCodeStat?.shortCode}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Clicks</p>
          <p className="font-medium">{shortCodeStat?.totalHits}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Country with Most Visits</p>
          <p className="font-medium">{shortCodeStat?.mostVisitedCountry}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Region with Most Visits</p>
          <p className="font-medium">
            {shortCodeStat?.mostVisitedRegion === "unknown"
              ? "-"
              : shortCodeStat?.mostVisitedRegion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
