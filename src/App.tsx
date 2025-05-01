import React, { ChangeEvent } from "react";
import TextInput from "./components/TextInput";

function App() {
  const [Inputs, setInputs] = React.useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setInputs({ Inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-blue-50 h-screen flex flex-col items-center justify-center text-center space-y-6">
      <div className="font-bold text-5xl text-blue-400">Create Short Link</div>

      <div className="text-gray-600 text-lg max-w-xl">
        Indi Link Shortener lets you customize your links for a more personal
        touch—making them clearer, more memorable, and easier to share.
      </div>

      <TextInput
        value={Inputs}
        onChange={handleChange}
        name="firstName"
        placeholder="e.g https://www.facebook.com"
        // error={InputErrors.firstName}
        extraClass="mt-4"
        type="text"
      />
    </div>
  );
}

export default App;
