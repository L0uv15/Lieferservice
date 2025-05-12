import { Input as FluentInput, makeStyles, mergeClasses } from "@fluentui/react-components";
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
    }
})