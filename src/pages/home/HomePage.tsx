import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Page from "../../components/page/Page";


//Use this as playground for now
export default function HomePage(): React.JSX.Element {

    const slideNodes = React.useMemo<React.JSX.Element[]>(() => {
        //this is cursed, too bad
        return [
            <div>
                ONE
            </div>,
            <div>
                TWO
            </div>
        ]
    }, [])


    return (
        <Page
            title="Welcome!"
            navExtensionNode={null}
            pageHeadExtensionNode={<Carousel slides={slideNodes} />}
        >

        </Page>
    )

}
