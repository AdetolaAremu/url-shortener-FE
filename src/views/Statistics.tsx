import React, { ChangeEvent } from "react";
import TextInput from "../components/TextInput";
import { Button } from "../components/ButtonComponent";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { getShortCodeStat } from "../store/Action";
import StatisticsTable from "../components/StatisticsTable";
import StatCard from "../components/StatCard";

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
    <div className="h-screen text-center space-y-6 mt-20  pb-5">
      <div className="font-bold text-2xl md:text-3xl lg:text-5xl text-blue-400">
        URL Statistics
      </div>

      <div className="flex justify-center">
        <TextInput
          value={Input}
          onChange={handleChange}
          name="Input"
          inputWidth="sm:w-96 md:w-[20rem] lg:w-[25rem] xl:w-[31rem]"
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
          <StatCard shortCodeStat={shortCodeStat} />

          <div className=" mt-5">
            <div>Last 15 Hits</div>

            <StatisticsTable shortCodeStat={shortCodeStat} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
