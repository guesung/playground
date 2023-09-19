"use client";
import CheckboxHeadless from "@/app/headless/components/CheckboxHeadless";
import { useState } from "react";
import CheckboxWrapper from "./components/CheckboxWrapper";

export default function page() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <CheckboxHeadless>
        {({ isChecked, onChange }) => {
          return (
            <label>
              <input type="checkbox" checked={isChecked} onChange={onChange} />
              <span>체크박스</span>
            </label>
          );
        }}
      </CheckboxHeadless>

      <CheckboxWrapper
        id="checkbox-1"
        isChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      >
        <CheckboxWrapper.Checkbox />
        <CheckboxWrapper.Label>체크박스 만들기</CheckboxWrapper.Label>
      </CheckboxWrapper>
    </div>
  );
}
