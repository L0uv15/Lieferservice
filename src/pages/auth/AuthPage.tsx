import { makeStyles, tokens } from "@fluentui/react-components";
import Page from "../../components/page/Page";
import TabList from "../../components/tab-list/TabList";
import React from "react";
import TabProperties from "../../components/tab-list/tab/TabProperties";

import img from "../../_assets/images/yonghyun-lee.jpg";
import SignInForm from "../../components/form/sign-in/SignInForm";
import SignUpForm from "../../components/form/sign-up/SignUpForm";


const authPageTabLiterals = ["signIn", "signUp"] as const;
type AuthPageTab = (typeof authPageTabLiterals)[number];



export default function AuthPage(): React.JSX.Element {

    const { loginWrapper, tabListWrapper, menuSpacer, formWrapper, gradientHelper, imageStyles, imageWrapper, tabStyles } = useStyles();

    const [activeTab, setActiveTab] = React.useState<AuthPageTab>("signIn");

    const authPageTabs = React.useMemo((): Map<AuthPageTab, TabProperties> => {
        return new Map<AuthPageTab, TabProperties>([
            ["signIn", {
                value: "signIn",
                content: "Anmelden",
                className: tabStyles,
                icon: null
            }],
            ["signUp", {
                value: "signUp",
                content: "Registrieren",
                className: tabStyles,
                icon: null
            }]
        ]);
    }, []);

    return (
        <Page
            title="Login"
            navExtensionNode={null}
        >
            <div className={menuSpacer}>
                <div className={loginWrapper}>
                    <div className={tabListWrapper}>
                        <TabList
                            onTabSelect={(tab) => setActiveTab(tab as AuthPageTab)}
                            selectedValue={activeTab}
                            tabs={authPageTabs}
                            appearance="transparent"
                            size="large"
                            spreadTabs
                        />
                    </div>
                    <div className={formWrapper}>
                        {activeTab === "signIn" && <SignInForm />}
                        {activeTab === "signUp" && <SignUpForm />}
                    </div>
                </div>
            </div>

            <div className={imageWrapper}>
                <img
                    className={imageStyles}
                    src={img}
                    alt="Picture of a park by Yonghun Lee" />
                <div className={gradientHelper} />
            </div>

        </Page>
    )
}

const useStyles = makeStyles({
    loginWrapper: {
        background: tokens.colorNeutralBackground2Pressed,
        minHeight: "100%",
        minWidth: "100%",
        borderRadius: tokens.borderRadiusLarge,
        boxShadow: tokens.shadow16,
        padding: tokens.spacingHorizontalM
    },
    tabListWrapper: {
        marginBottom: tokens.spacingVerticalS
    },
    menuSpacer: {
        width: "100%",
        maxWidth: "700px",
        height: "400px",
        margin: `${tokens.spacingVerticalXXXL} auto 0 auto`,
        zIndex: 1,
    },
    formWrapper: {
        height: "400px",
        marginTop: tokens.spacingVerticalXXL,
        background: tokens.colorNeutralBackgroundAlpha2,
        borderRadius: tokens.borderRadiusLarge,
        padding: "10px"
    },
    imageWrapper: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
    },
    imageStyles: {
        objectFit: "cover",
        opacity: 0.3,
        filter: "grayscale(100%) blur(1vh)",
        width: "100vw",
        height: "100vh",
    },
    gradientHelper: {
        position: "absolute",
        minHeight: "100%",
        width: "100%",
        top: 0,
        left: 0,
        background: `radial-gradient(ellipse at top left, ${tokens.colorNeutralBackground2} 45%, transparent 55%)`
    },
    tabStyles: {
        color: tokens.colorNeutralBackground1,
    }
})