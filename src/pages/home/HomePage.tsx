import React from "react";
import ProductCarousel from "../../components/carousel/product-carousel/ProductCarousel";
import Page from "../../components/page/Page";
import ApiError from "../../api/utility/error/ApiError";
import useToastContext from "../../context/toast/useToastContext";


//Use this as playground for now
export default function HomePage(): React.JSX.Element {

    const error = new ApiError("client", "Ouch", "Shit went wrong (d5880972-23e9-4d0a-a75b-434d8e990945)")
    const { dispatchError } = useToastContext()
    const toast = error.useErrorToastProperties()

    React.useEffect(() => {
        dispatchError({ ...toast  })
    }, [])

    return (
        <Page
            title="Welcome!"
            pageHeadExtensionNode={<ProductCarousel />}
        >

        </Page>
    )

}
