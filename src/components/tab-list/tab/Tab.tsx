import { Tab as FluentTab } from "@fluentui/react-components";
import TabProperties from "./TabProperties";

export default function Tab(properties: TabProperties): React.JSX.Element {
    return  <FluentTab {...properties} />;
}