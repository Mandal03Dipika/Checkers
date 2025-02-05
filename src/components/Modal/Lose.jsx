import React from "react";

function Lose({ restart }) {
  return (
    <>
      <div className="size-[300px] flex justify-center items-center relative">
        <div className="size-[200px] bg-[#3D3D3D] flex justify-center items-center rounded-full outline-double outline-2 outline-[#FF3B30]">
          <div className="size-[180px] bg-[#A0A0A0] flex justify-center items-center rounded-full outline-double outline-2 outline-[#FF2E2E]">
            <div className="size-[150px] bg-[#1C1C1C] font-extrabold flex flex-col justify-center items-center rounded-full text-white outline-double outline-2 outline-[#FF3B30]">
              <span className="text-2xl">YOU</span>
              <span className="text-4xl text-[#FF2E2E]">LOSE!</span>
            </div>
          </div>
        </div>
        <div
          className="absolute top-[225px] bg-[#101010] text-[#D4D4D4] font-bold p-1 w-28 rounded-full text-center outline-double outline-2 outline-[#FF2E2E]"
          onClick={restart}
        >
          TRY AGAIN
        </div>
      </div>
    </>
  );
}

export default Lose;
