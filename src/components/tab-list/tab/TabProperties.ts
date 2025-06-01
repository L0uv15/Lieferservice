import { TabProps } from "@fluentui/react-components";

type TabProperties = Pick<TabProps, "content" | "icon" | "onClick"| "className"> & {
    value: string
}

export default TabProperties;