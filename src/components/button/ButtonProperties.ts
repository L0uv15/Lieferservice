import { ButtonProps } from "@fluentui/react-components";

type ButtonProperties = Pick<ButtonProps,
    | "appearance"
    | "as"
    | "className"
    | "disabled"
    | "icon"
    | "iconPosition"
    | "shape"
    | "size"
    | "style"
> & {
    isSubmitButton?: boolean,
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

export default ButtonProperties;