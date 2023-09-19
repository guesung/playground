"use client";

import { useCheckbox } from "../hooks/useCheckbox";

export default function CustomHookPattern() {
  const { isChecked, onChange } = useCheckbox();

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span>체크박스 만들기</span>
    </label>
  );
}
