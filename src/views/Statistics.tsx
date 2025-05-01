import React, { ChangeEvent } from "react";
import TextInput from "../components/TextInput";
import { Button } from "../components/ButtonComponent";

const Statistics = () => {
  const [Input, setInput] = React.useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
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
          onClick={() => console.log("yo")}
        >
          Submit
        </Button>
      </div>

      <div className="px-48">
        <div className="rounded-lg bg-white py-6 px-4 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <p className="text-gray-500 text-sm">Shortened URL</p>
              <p className="font-medium text-blue-600 break-all">
                https://indi.ca/abc123
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Original URL</p>
              <p className="font-medium break-all">
                https://example.com/very/long
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Clicks</p>
              <p className="font-medium">134</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Country with Most Visits</p>
              <p className="font-medium">US</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Region with Most Visits</p>
              <p className="font-medium">US</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Created At</p>
              <p className="font-medium">2025-04-28</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
