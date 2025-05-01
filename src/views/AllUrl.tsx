import React, { ChangeEvent } from "react";
import TextInput from "../components/TextInput";
import Pagination from "../components/Pagination";

const AllUrl = () => {
  const [Input, setInput] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const urlData = [
    {
      shortenedUrl: "https://sho.rt/abc123",
      originalUrl: "https://example.com/articles/2025/url-tracking",
      createdAt: "2025-04-27",
      clicks: 152,
    },
    {
      shortenedUrl: "https://sho.rt/qwe789",
      originalUrl: "https://anotherdomain.com/path/to/resource",
      createdAt: "2025-04-20",
      clicks: 89,
    },
    {
      shortenedUrl: "https://sho.rt/zxy456",
      originalUrl: "https://somedomain.com/special-offers/deals",
      createdAt: "2025-04-10",
      clicks: 240,
    },
  ];
  return (
    <div>
      <div className="h-screen text-center space-y-6 mt-20">
        <div className="font-bold text-3xl text-blue-400">
          All Shortened Links
        </div>

        <div className="flex justify-center">
          <TextInput
            value={Input}
            onChange={handleChange}
            name="Input"
            inputWidth="w-[31rem]"
            placeholder="Type here..."
            extraClass="mt-4"
            type="text"
          />
        </div>

        <div className="px-4 md:px-16 lg:px-48">
          <div className="rounded-lg bg-white py-6 px-4 shadow-md overflow-x-auto">
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
                    Created At
                  </th>
                  <th className="px-4 py-3 text-center whitespace-nowrap">
                    Clicks
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {urlData.map((item, index) => (
                  <tr
                    key={index}
                    className={index < urlData.length - 1 ? "border-b" : ""}
                  >
                    <td className="px-4 py-3 text-left text-blue-600 break-all">
                      {item.shortenedUrl}
                    </td>
                    <td className="px-4 py-3 text-left break-all">
                      {item.originalUrl}
                    </td>
                    <td className="px-4 py-3 text-left whitespace-nowrap">
                      {item.createdAt}
                    </td>
                    <td className="px-4 py-3 text-center">{item.clicks}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4">
              <Pagination
                currentPage={currentPage}
                totalPages={2}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUrl;
