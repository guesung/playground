"use client";
import { useState } from "react";
import CheckboxWrapper from "./CheckboxWrapper";

export default function CompoundPattern() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxWrapper
      id="checkbox-1"
      isChecked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    >
      <CheckboxWrapper.Checkbox />
      <CheckboxWrapper.Label>체크박스 만들기</CheckboxWrapper.Label>
    </CheckboxWrapper>
  );
}
