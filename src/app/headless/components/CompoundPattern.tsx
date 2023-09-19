"use client";
import { useState } from "react";
import CheckboxWrapper from "./CheckboxWrapper";

export default function CompoundPattern() {
  return (
    <CheckboxWrapper id="checkbox-1">
      <CheckboxWrapper.Checkbox />
      <CheckboxWrapper.Label>Compound Component 패턴</CheckboxWrapper.Label>
    </CheckboxWrapper>
  );
}
