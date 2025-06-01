import { FieldProps, InputProps } from "@fluentui/react-components";

type InputProperties = Pick<InputProps,
    | "appearance"
    | "className"
    | "contentBefore"
    | "disabled"
    | "name"
    | "onBlur"
    | "onChange"
    | "placeholder"
    | "required"
    | "type"
    | "value"> & Pick<FieldProps,
        | "validationMessage"
        | "validationState"
        | "label">;

export default InputProperties;