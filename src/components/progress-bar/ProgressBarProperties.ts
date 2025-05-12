import { FieldProps, ProgressBarProps } from "@fluentui/react-components";

type ProgressBarProperties = Pick<ProgressBarProps,
    | "color"
    | "max"
    | "value"
> & Pick<FieldProps,
    | "validationMessage"
    | "validationState"
>

export default ProgressBarProperties;