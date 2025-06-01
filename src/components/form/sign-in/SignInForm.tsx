import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import useCloudFunctions from "../../../api/firebase/cloud-functions/useCloudFunctions";
import Button from "../../button/Button";
import Input from "../../input/Input";
import { signInFormInputMap } from "./util/signInFormInputMap";
import SignInFormInputName from "./util/SignInFormInputName";
import signInFormInputNameValues from "./util/signInFormInputNameValues";


const validationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignInForm(): React.JSX.Element {

    const { componentWrapper, formInputWrapper, buttonStyles, buttonWrapper } = useStyles();
    const { signInWithGoogle } = useCloudFunctions();

    const [formState, setFormState] = React.useState({ email: "", password: "" });
    const [validationState, setValidationState] = React.useState({ email: "", password: "" });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted with state:", formState);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
        validateInput(event);
    }

    function validateInput(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setValidationState({ ...validationState, [name]: "" });
        switch (name as SignInFormInputName) {
            case "email":
                if (!validationRegex.test(value)) setValidationState({ ...validationState, email: "Invalides Format: [you@example.com]." });
                return;
            case "password":
                if (value.trim().length <= 5) setValidationState({ ...validationState, password: "Passwörter sollten mindestens 6 Zeichen lang sein." });
                return;
            default: return;
        }
    }

    const formSubmittable = React.useMemo<boolean>(() => {
        for (const input of signInFormInputNameValues) {
            if ((formState[input].trim().length <= 0) || (validationState[input].trim().length >= 1)) return false;
        }
        return true;
    }, [validationState, formState]);

    return (
        <div className={componentWrapper}>

            <form onSubmit={handleSubmit}>
                <div className={formInputWrapper}>
                    {
                        Array.from(signInFormInputMap.values()).map((individualProps, index) => {
                            return (
                                <Input
                                    {...individualProps}
                                    appearance="underline"
                                    key={index}
                                    onChange={handleChange}
                                    onBlur={validateInput}
                                    required
                                    validationMessage={validationState[individualProps.name]}
                                    value={formState[individualProps.name]}
                                />
                            )
                        })
                    }
                    <div className={buttonWrapper}>
                        <Button
                            appearance="outline"
                            className={buttonStyles}
                            disabled={!formSubmittable}
                            isSubmitButton
                            onClick={() => { }}
                            shape="circular"
                        >
                            Anmelden
                        </Button>
                        <Button
                            appearance="primary"
                            className={buttonStyles}
                            onClick={() => signInWithGoogle()}
                            shape="circular"
                        >
                            Google
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export const useStyles = makeStyles({
    componentWrapper: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px"
    },
    formInputWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: tokens.spacingVerticalXXL
    },
    buttonStyles: {
        width: "48%"
    },
    buttonWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
});