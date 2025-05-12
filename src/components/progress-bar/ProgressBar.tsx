import { Field, ProgressBar as FluentProgressBar } from "@fluentui/react-components"
import ProgressBarProperties from "./ProgressBarProperties"


export default function ProgressBar(properties: ProgressBarProperties): React.JSX.Element {

    return (
        <Field
            validationMessage={properties.validationMessage}
            validationState={properties.validationState}>
            <FluentProgressBar
                color={properties.color ?? "brand"}
                max={properties.max ?? 100}
                value={properties.value} />
        </Field>

    )
}