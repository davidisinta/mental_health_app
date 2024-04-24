import React from "react";
import mentalHealthBarcode from "../img/mentalHealthBarcode.png";

function ResponsePositive() {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen p-4 text-center text-white bg-gradient-to-br from-yellow-500 via-red-500 to-pink-600"
      style={{ backdropFilter: "blur(12px)", marginTop: "-5%" }}
    >
      <h1 className="mb-4 text-2xl font-bold">
        Happy to hear you're feeling good! 😊
      </h1>
      <p className="mb-4">
        If you ever need to access Yale's mental health resources, scan the code
        below.
      </p>
      <img
        src={mentalHealthBarcode}
        alt="Mental Health Resources Barcode"
        className="w-full max-w-xs"
      />
    </div>
  );
}

export default ResponsePositive;
