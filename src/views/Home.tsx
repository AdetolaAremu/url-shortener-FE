import React, { ChangeEvent } from "react";
import TextInput from "../components/TextInput";
import { Button } from "../components/ButtonComponent";
import { useAppDispatch, useAppSelector } from "../store/Hook";
import { decodeURL, encodeURL } from "../store/Action";
import { clearDecodeData, clearEncodedData } from "../store/Shortener.slice";

export type Tab = "encode" | "decode";

const Home = () => {
  const [Input, setInput] = React.useState("");
  const [currentTab, setCurrentTab] = React.useState<Tab>("encode");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const dispatch = useAppDispatch();
  const { loading, error, encodeData, decodeData } = useAppSelector(
    (state) => state.shortener
  );

  const handleTabSwitch = (tab: Tab) => {
    setCurrentTab(tab);
    dispatch(clearEncodedData());
    dispatch(clearDecodeData());
  };

  const decodeAPI = () => {
    dispatch(decodeURL({ url: Input }));
  };

  const encodeAPI = () => {
    dispatch(encodeURL({ url: Input }));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-6 -mt-44">
      <div className="font-bold text-2xl md:text-3xl lg:text-5xl text-blue-400">
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
          variant={currentTab === "encode" ? "primary" : "ghost"}
          onClick={() => handleTabSwitch("encode")}
        >
          Encode
        </Button>

        <Button
          className="mt-3.5 ml-3"
          size="sm"
          variant={currentTab === "decode" ? "primary" : "ghost"}
          onClick={() => handleTabSwitch("decode")}
        >
          Decode
        </Button>
      </div>
      <div className="flex items-center">
        <TextInput
          value={Input}
          onChange={handleChange}
          name="firstName"
          inputWidth="sm:w-96 md:w-[20rem] lg:w-[25rem] xl:w-[31rem]"
          placeholder={
            currentTab === "encode"
              ? "e.g https://www.facebook.com"
              : "e.g https://indi.ca/hAgtht"
          }
          extraClass="mt-4"
          type="text"
        />

        <div>
          {currentTab === "encode" ? (
            <Button
              disabled={Input ? false : true}
              isLoading={loading}
              className="ml-3 mt-3.5"
              height="h-10"
              variant="primary"
              onClick={() => encodeAPI()}
            >
              Shorten
            </Button>
          ) : (
            <Button
              disabled={Input ? false : true}
              isLoading={loading}
              className="ml-3 mt-3.5"
              height="h-10"
              variant="primary"
              onClick={() => decodeAPI()}
            >
              Decode
            </Button>
          )}
        </div>
      </div>
      {(currentTab === "encode" && encodeData?.shortenedlink) ||
      (currentTab === "decode" && decodeData?.originalURL) ||
      error ? (
        <div className="bg-white w-[20rem] px-2 py-2 text-center text-sm text-gray-600 space-y-2">
          <div>
            {currentTab === "encode" && encodeData?.shortenedlink}
            {currentTab === "decode" && decodeData?.originalURL}
            {error && <span className="text-red-500">{error}</span>}
          </div>

          {!error && (
            <button
              onClick={() => {
                const textToCopy =
                  currentTab === "encode"
                    ? encodeData?.shortenedlink
                    : decodeData?.originalURL;
                if (textToCopy) {
                  navigator.clipboard.writeText(textToCopy);
                }
              }}
              className="mt-1 text-blue-500 hover:underline text-xs"
            >
              Copy to clipboard
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
