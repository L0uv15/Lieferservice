import { Input as FluentInput, makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import React from "react";
import InputProperties from "./InputProperties";

export default function Input(properties: InputProperties): React.JSX.Element {

    const { inputStyles } = useStyles();

    return (
        <FluentInput
            name={properties.name}
            type={properties.type}
            value={properties.value}
            onChange={properties.onChange}
            placeholder={properties.placeholder}
            disabled={properties.disabled}
            required={properties.required}
            className={mergeClasses(inputStyles, properties.className)}
            appearance={properties.appearance ?? "outline"}
        />
    );
}


const useStyles = makeStyles({
    inputStyles: {
        width: "100%",
        borderRadius: tokens.borderRadiusCircular,

        "&:has(input:focus)": {
            borderBottomColor: tokens.colorNeutralStroke1Pressed,
        },
        "&:hover": {
            borderBottomColor: tokens.colorNeutralStroke1Hover,
        },

        "&:after": {
            marginLeft: "0.7rem",
            marginRight: "0.7rem",
        }
    }
})