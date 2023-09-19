"use client";
import CheckboxHeadless from "@/components/CheckboxHeadless";

export default async function page() {
  return (
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
  );
}
