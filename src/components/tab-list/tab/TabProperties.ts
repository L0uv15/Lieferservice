import { TabProps } from "@fluentui/react-components";

type TabProperties = Pick<TabProps, "content" | "icon" | "onClick"> & {
    value: string
}

export default TabProperties;