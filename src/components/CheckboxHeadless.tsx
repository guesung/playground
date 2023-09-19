"use client";
import { useState } from "react";

interface CheckboxHeadlessProps {
  isChecked: boolean;
  onChange: () => void;
}

interface ChildrenType {
  children: (args: CheckboxHeadlessProps) => JSX.Element;
}

export default function CheckboxHeadless({ children }: ChildrenType) {
  const [isChecked, setIsChecked] = useState(false);

  if (!children || typeof children !== "function") return null;

  return children({
    isChecked,
    onChange: () => setIsChecked(!isChecked),
  });
}
