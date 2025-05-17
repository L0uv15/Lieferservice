import { ButtonProps } from "@fluentui/react-components";

type ButtonProperties = Pick<ButtonProps,
    | "appearance"
    | "as"
    | "className"
    | "icon"
    | "iconPosition"
    | "shape"
    | "size"
    | "style"
> & {
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

export default ButtonProperties;