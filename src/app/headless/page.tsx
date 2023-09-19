"use client";
import { Fragment } from "react";
import CompoundPattern from "./components/CompoundPattern";
import CustomHookPattern from "./components/CustomHookPattern";
import FunctionAsChildPattern from "./components/FunctionAsChildPattern";

export default function page() {
  return (
    <Fragment>
      <FunctionAsChildPattern />
      <CompoundPattern />
      <CustomHookPattern />
    </Fragment>
  );
}
