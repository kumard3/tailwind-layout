/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import * as React from "react";
import Accordion from "../components/accordion";
import Header from "../components/Header";

const Nav = () => {
  return (
    <div className=" text-5xl font-mono font-semibold text-center py-10">
      <h1>TailWind-CSS Layout</h1>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Nav /> */}
      <Header />
      <div className="relative container mx-auto flex flex-col justify-center items-center w-full">
        <div className="sticky top-0 text-5xl font-mono px-2 w-full sm:px-10 font-semibold flex items-center">
          <div className="bg-gray-200 h-[1px] w-1/2"></div>
          <h1 className="px-3 text-gray-100">Display</h1>{" "}
          <div className="bg-gray-200 h-[1px] w-1/2"></div>
        </div>
        <Accordion />
      </div>
    </div>
  );
}
