import React from "react";
import { IAllURL } from "../interfaces/response/Shortener.response";

interface IProps {
  allUrl: IAllURL | null;
}

const UrlTable: React.FC<IProps> = ({ allUrl }) => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-100 text-sm font-semibold text-gray-700">
          <th className="px-4 py-3 text-left whitespace-nowrap">
            Shortened URL
          </th>
          <th className="px-4 py-3 text-left whitespace-nowrap">
            Original URL
          </th>
          <th className="px-4 py-3 text-left whitespace-nowrap">
            Highest Country Visits
          </th>
          <th className="px-4 py-3 text-center whitespace-nowrap">Clicks</th>
        </tr>
      </thead>
      <tbody className="text-sm text-gray-700">
        {allUrl?.data.paginated?.map((item, index) => (
          <tr
            key={index}
            className={
              index < allUrl.data.paginated.length - 1 ? "border-b" : ""
            }
          >
            <td className="px-4 py-3 text-left text-blue-600 break-all">
              {item?.generatedURL}
            </td>
            <td className="px-4 py-3 text-left break-all">
              {item?.originalURL}
            </td>
            <td className="px-4 py-3 text-left whitespace-nowrap">
              {item?.mostVisitedCountry === "unknown"
                ? "-"
                : (item?.mostVisitedCountry as string)}
            </td>
            <td className="px-4 py-3 text-center">{item.totalHits}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UrlTable;
