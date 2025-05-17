import { EmblaOptionsType } from "embla-carousel";

type CarouselProperties = {
    slides: Array<React.JSX.Element>,
    options?: EmblaOptionsType,
    enableBorderingButtons?: boolean
}

export default CarouselProperties;