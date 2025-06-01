import { TabList as FluentTabList, makeStyles, mergeClasses } from "@fluentui/react-components";
import React from "react";
import TabListProperties from "./TabListProperties";
import Tab from "./tab/Tab";

export default function TabList(properties: TabListProperties): React.JSX.Element {

    const { listStyles, spreadStyles } = useStyles();

    const tabs = React.useMemo(() => {
        return Array.from(properties.tabs.values());
    }, [properties.tabs]);

    const activeTab = React.useMemo(() => properties.selectedValue, [properties.selectedValue]);

    return (
        <FluentTabList
            selectedValue={activeTab}
            vertical={properties.vertical ?? false}
            className={mergeClasses(listStyles, properties.spreadTabs ? spreadStyles : undefined)}
            size={properties.size}
            appearance={properties.appearance}
        >
            {
                tabs?.map((tab, index) => {
                    return (
                        <Tab
                            key={index}
                            content={tab.content}
                            icon={tab.icon}
                            onClick={() => properties.onTabSelect(tab.value)}
                            value={tab.value}
                        />
                    )
                })
            }
        </FluentTabList>
    )
}

const useStyles = makeStyles({
    listStyles: {
        minWidth: "100%",
    },
    spreadStyles: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
})