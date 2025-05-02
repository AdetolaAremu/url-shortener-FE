import { ChangeEvent, useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import Pagination from "../components/Pagination";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getAllUrls } from "../store/Action";

const AllUrl = () => {
  const [page, setPage] = useState(1);
  const limit = 15;
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchInput.length === 0 || searchInput.length >= 3) {
        setDebouncedSearch(searchInput);
      }
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  const dispatch = useAppDispatch();
  const { loading, allUrl } = useAppSelector((state) => state.shortener);

  useEffect(() => {
    dispatch(getAllUrls({ page, limit, searchQuery: debouncedSearch }));
  }, [page, limit, debouncedSearch, dispatch]);

  return (
    <div>
      <div className="h-screen text-center space-y-6 mt-20 pb-4">
        <div className="font-bold text-2xl md:text-3xl lg:text-5xl text-blue-400">
          All Shortened Links
        </div>

        <div className="flex justify-center">
          <TextInput
            value={searchInput}
            onChange={handleChange}
            name="Input"
            inputWidth="sm:w-96 md:w-[20rem] lg:w-[25rem] xl:w-[31rem]"
            placeholder="Type here... (search activates after 3 characters)"
            extraClass="mt-4"
            type="text"
          />
        </div>

        <div className="px-4 md:px-16 lg:px-48">
          {loading ? (
            "Loading data....."
          ) : (
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
                      Highest Country Visits
                    </th>
                    <th className="px-4 py-3 text-center whitespace-nowrap">
                      Clicks
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {allUrl?.data.paginated?.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index < allUrl.data.paginated.length - 1
                          ? "border-b"
                          : ""
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
                      <td className="px-4 py-3 text-center">
                        {item.totalHits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4">
                <Pagination
                  currentPage={page}
                  limit={limit}
                  totalItems={allUrl?.data?.total || 0}
                  onPageChange={(newPage) => setPage(newPage)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUrl;
