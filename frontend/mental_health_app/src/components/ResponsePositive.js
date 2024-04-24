import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mentalHealthBarcode from "../img/mentalHealthBarcode.png";

function ResponsePositive() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 15000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-4 text-white bg-gradient-to-br from-purple-500 via-blue-300 to-pink-400">
      <h1
        className="mb-4 text-4xl font-bold text-center"
        style={{ marginTop: "-16%" }}
      >
        We're glad you are feeling great!
      </h1>

      <p className="text-lg text-center">
        If things get tough, remember, you are never alone in your journey.
      </p>
      <br />

      <p className="text-lg text-center">
        If you ever need support, Yale's mental health resources are available
        for you.
      </p>
      <br />

      <p className="text-lg text-center">
        Please scan the QR code below to access them.
      </p>
      <br />
      <div className="flex justify-center w-full max-w-md">
        <img
          src={mentalHealthBarcode}
          alt="Mental Health Resources Barcode"
          className="w-3/4"
        />
      </div>
    </div>
  );
}

export default ResponsePositive;
