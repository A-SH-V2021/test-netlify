import React from "react";
import { useGlobalContext } from "../context/context";

const Buttons = () => {
  const { page, nbPage, pageHandle } = useGlobalContext();
  
  return (
    <div className="btn-container">
      <button onClick={() => pageHandle('prev')}>prev</button>
      <p>
        {page} of {nbPage}
      </p>
      <button onClick={() => pageHandle('next')}>next</button>
    </div>
  );
};

export default Buttons;
