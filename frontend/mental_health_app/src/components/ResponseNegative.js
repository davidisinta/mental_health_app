import React from "react";
import mentalHealthBarcode from "../img/mentalHealthBarcode.png";

function ResponseNegative() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-4 text-center text-white bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <h1 className="mb-4 text-2xl font-bold">Sorry you are feeling bad...</h1>
      <h1 className="mb-4">
        If you ever need to access Yale's mental health resources, scan the code
        below.
      </h1>
      <img
        src={mentalHealthBarcode}
        alt="Mental Health Resources Barcode"
        className="w-full max-w-xs"
      />
    </div>
  );
}

export default ResponseNegative;
