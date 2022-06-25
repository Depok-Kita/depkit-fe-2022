import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";

// field contains label & input element
type SelectFieldProps = {
  className?: string; // field className
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
};

export const SelectField = (props: SelectFieldProps) => {
  return (
    <FormControl isInvalid={props.isError} className={props.className}>
      <FormLabel>{props.label}</FormLabel>
      <Select
        placeholder={props.placeholder}
        onChange={props.onChange}
        isDisabled={props.isDisabled}
        className="cursor-pointer"
        icon={props.rightIcon}
        iconSize="17"
        value={props.value}
      >
        {props.children}
      </Select>
      {props.isError && (
        <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};
