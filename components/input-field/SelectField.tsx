import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react";
import { FormLabel } from "./FormLabel";

// field contains label & input element
type SelectFieldProps = {
  className?: string; // wrapper select element className
  name?: string; // name of <select> element
  label?: string;
  placeholder?: string;
  value?: string | number; // value of <select> element
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode; // option elements, ex. <option value="opt1">Option 1<option/>

  isDisabled?: boolean;
  isError?: boolean;

  errorMessage?: string;

  rightIcon?: React.ReactElement;
  dark?: boolean; // dark mode, note: you must set <option> background to dark manually
};

export const SelectField = (props: SelectFieldProps) => {
  return (
    <FormControl
      isInvalid={props.isError}
      className={props.dark ? "text-totalwhite" : "text-denim-dark"}
    >
      <FormLabel className="font-jakarta-sans">{props.label}</FormLabel>
      <div className={props.className}>
        <Select
          placeholder={props.placeholder}
          onChange={props.onChange}
          isDisabled={props.isDisabled}
          className={"cursor-pointer font-jakarta-sans "}
          icon={props.rightIcon}
          iconSize="17"
          value={props.value}
        >
          {props.children}
        </Select>
      </div>
      {props.isError && (
        <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
