import React from "react";

export default function Accordion() {
  return (
    <>
      <div className="w-96 bg-slate-600 ">
        <details className=" border  rounded-t px-3 py-1 cursor-pointer	 ">
          <summary>Title</summary>
          This is all description
        </details>{" "}
        <details className=" border px-3 py-1  cursor-pointer	">
          <summary>Title 2</summary>
          This is all description
        </details>
        <details className="border rounded-b px-3 py-1 cursor-pointer	">
          <summary>Title 3</summary>
          This is all description 2
        </details>
      </div>
    </>
  );
}
