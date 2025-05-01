import React, { ChangeEvent } from "react";
import TextInput from "../components/TextInput";
import { Button } from "../components/ButtonComponent";

export type Tab = "encode" | "decode";

const Home = () => {
  const [Input, setInputs] = React.useState("");
  const [currentTab, setCurrentTab] = React.useState<Tab>("decode");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setInputs({ Inputs, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-blue-50 h-screen flex flex-col items-center justify-center text-center space-y-6">
      <div className="font-bold text-5xl text-blue-400 -mt-44">
        Create Short Link
      </div>

      <div className="text-gray-600 text-sm max-w-xl">
        Indi Link Shortener lets you customize your links for a more personal
        touch—making them clearer, and easier to share.
      </div>

      <div className="flex items-center">
        <Button
          className="mt-3.5"
          size="sm"
          variant={currentTab === "decode" ? "primary" : "ghost"}
          onClick={() => setCurrentTab("decode")}
        >
          Encode
        </Button>

        <Button
          className="mt-3.5 ml-3"
          size="sm"
          variant={currentTab === "encode" ? "primary" : "ghost"}
          onClick={() => setCurrentTab("encode")}
        >
          Decode
        </Button>
      </div>

      <div className="flex items-center">
        <TextInput
          value={Input}
          onChange={handleChange}
          name="firstName"
          inputWidth="w-[31rem]"
          placeholder={
            currentTab === "decode"
              ? "e.g https://www.facebook.com"
              : "e.g https://indi.ca/hAgtht"
          }
          error={Input}
          extraClass="mt-4"
          type="text"
        />

        {currentTab === "decode" ? (
          <Button
            disabled={Input ? false : true}
            className="ml-3 mt-3.5"
            height="h-10"
            variant="primary"
            onClick={() => alert("Clicked!")}
          >
            Shorten
          </Button>
        ) : (
          <Button
            disabled={Input ? false : true}
            className="ml-3 mt-3.5"
            height="h-10"
            variant="primary"
            onClick={() => alert("Clicked!")}
          >
            Decode
          </Button>
        )}
      </div>

      <div className="bg-white w-[20rem] px-2 py-2 text-center text-sm text-gray-600">
        https://tola.com
      </div>
    </div>
  );
};

export default Home;
