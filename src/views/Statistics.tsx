import React, { ChangeEvent } from "react";
import TextInput from "../components/TextInput";
import { Button } from "../components/ButtonComponent";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getShortCodeStat } from "../store/Action";

const Statistics = () => {
  const [Input, setInput] = React.useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const dispatch = useAppDispatch();
  const { loading, shortCodeStat, error } = useAppSelector(
    (state) => state.shortener
  );

  const callStatData = () => {
    dispatch(getShortCodeStat(Input?.split("/").pop() as string));
  };

  return (
    <div className="h-screen text-center space-y-6 mt-20">
      <div className="font-bold text-3xl text-blue-400">Link Statistics</div>

      <div className="flex justify-center">
        <TextInput
          value={Input}
          onChange={handleChange}
          name="Input"
          inputWidth="w-[31rem]"
          placeholder="e.g https://indi.ca/hAgtht"
          extraClass="mt-4"
          type="text"
        />

        <Button
          disabled={Input ? false : true}
          isLoading={false}
          className="ml-3 mt-4"
          height="h-10"
          variant="primary"
          onClick={() => callStatData()}
        >
          Submit
        </Button>
      </div>

      {loading ? <div>Loading Data</div> : ""}

      <div className="text-red-500">{error}</div>

      {shortCodeStat !== null && !error && (
        <div className="px-4 md:px-16 lg:px-48">
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
                <p className="font-medium break-all">
                  {shortCodeStat?.originalURL}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Short Code</p>
                <p className="font-medium break-all">
                  {shortCodeStat?.shortCode}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Clicks</p>
                <p className="font-medium">{shortCodeStat?.totalHits}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  Country with Most Visits
                </p>
                <p className="font-medium">
                  {shortCodeStat?.mostVisitedCountry}
                </p>
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

          <div className=" mt-5">
            <div>Last 15 Hits</div>
            <div className="rounded-lg bg-white py-6 px-4 shadow-md overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-100 text-sm font-semibold text-gray-700">
                    <th className="px-4 py-3 text-left whitespace-nowrap">
                      IP Address
                    </th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">
                      Agent
                    </th>
                    <th className="px-4 py-3 text-left whitespace-nowrap">
                      Country
                    </th>
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
                        index < shortCodeStat?.las15Hits.length - 1
                          ? "border-b"
                          : ""
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
