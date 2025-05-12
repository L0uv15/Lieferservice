import { InputProps } from "@fluentui/react-components";

type InputProperties = Pick<InputProps,
    | "appearance"
    | "className"
    | "disabled"
    | "name"
    | "onChange"
    | "placeholder"
    | "required"
    | "type"
    | "value">;

export default InputProperties;