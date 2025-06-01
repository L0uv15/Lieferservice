import { TabListProps } from "@fluentui/react-components"
import TabProperties from "./tab/TabProperties"

type TabListProperties = {
    onTabSelect(value: TabListProperties["selectedValue"]): void,
    selectedValue: string,
    spreadTabs?: boolean,
    tabs: Map<TabProperties["value"], TabProperties>
} & Pick<TabListProps,
    "vertical"
    | "size"
    | "appearance"
>

export default TabListProperties;