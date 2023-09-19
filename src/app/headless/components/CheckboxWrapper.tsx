import * as React from "react";

type CheckboxContextProps = {
  id: string;
  isChecked: boolean;
  onChange: () => void;
};

type CheckboxProps = CheckboxContextProps & React.PropsWithChildren<{}>;

const CheckboxContext = React.createContext<CheckboxContextProps>({
  id: "",
  isChecked: false,
  onChange: () => {},
});

interface CheckboxWrapperProps {
  id: string;
  children: React.ReactNode;
}

const CheckboxWrapper = ({ id, children }: CheckboxWrapperProps) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const onChange = React.useCallback(
    () => setIsChecked((isChecked) => !isChecked),
    []
  );
  const value = {
    id,
    isChecked,
    onChange,
  };

  return (
    <CheckboxContext.Provider value={value}>
      {children}
    </CheckboxContext.Provider>
  );
};

const useCheckboxContext = () => {
  const context = React.useContext(CheckboxContext);
  return context;
};

const Checkbox = ({ ...props }) => {
  const { id, isChecked, onChange } = useCheckboxContext();
  return (
    <input
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={onChange}
      {...props}
    />
  );
};

const Label = ({ children, ...props }: React.PropsWithChildren<{}>) => {
  const { id } = useCheckboxContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

CheckboxWrapper.Checkbox = Checkbox;
CheckboxWrapper.Label = Label;

export default CheckboxWrapper;
