import React from "react";
import ProductCarousel from "../../components/carousel/product-carousel/ProductCarousel";
import Page from "../../components/page/Page";


//Use this as playground for now
export default function HomePage(): React.JSX.Element {

    return (
        <Page
            title="Welcome!"
            pageHeadExtensionNode={<ProductCarousel />}
        >

        </Page>
    )

}
