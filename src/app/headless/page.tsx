"use client";
import CompoundPattern from "./components/CompoundPattern";
import CustomHookPattern from "./components/CustomHookPattern";
import FunctionAsChildPattern from "./components/FunctionAsChildPattern";

export default function page() {
  return (
    <div>
      <FunctionAsChildPattern />
      <CompoundPattern />
      <CustomHookPattern />
    </div>
  );
}
