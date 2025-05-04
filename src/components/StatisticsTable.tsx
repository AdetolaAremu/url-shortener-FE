import React from "react";
import { IStatResponse } from "../interfaces/response/Shortener.response";

interface IProps {
  shortCodeStat: IStatResponse;
}

const StatisticsTable: React.FC<IProps> = ({ shortCodeStat }) => {
  return (
    <div className="rounded-lg bg-white py-6 px-4 shadow-md overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-sm font-semibold text-gray-700">
            <th className="px-4 py-3 text-left whitespace-nowrap">
              IP Address
            </th>
            <th className="px-4 py-3 text-left whitespace-nowrap">Agent</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">Country</th>
            <th className="px-4 py-3 text-center whitespace-nowrap">
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {shortCodeStat?.las15Hits?.map((item, index) => (
            <tr
              key={index}
              className={
                index < shortCodeStat?.las15Hits.length - 1 ? "border-b" : ""
              }
            >
              <td className="px-4 py-3 text-left text-blue-600 break-all">
                {item?.ip}
              </td>
              <td className="px-4 py-3 text-left break-all">
                {item?.agent?.length > 40
                  ? `${item?.agent?.slice(0, 40)}...`
                  : item?.agent}
              </td>
              <td className="px-4 py-3 text-left whitespace-nowrap uppercase">
                {item.country}
              </td>
              <td className="px-4 py-3 text-center">
                {new Date(item.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;
