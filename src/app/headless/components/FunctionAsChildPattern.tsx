import CheckboxHeadless from "./CheckboxHeadless";

export default function FunctionAsChildPattern() {
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
