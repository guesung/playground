import { useState } from "react";

export const useCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return {
    isChecked,
    onChange: () => setIsChecked(!isChecked),
  };
};
