import $ from 'jquery';
import { useMediaQuery } from 'react-responsive'
export function MediaCT(mideaSize) {
    let sizeValue = Number
    switch (mideaSize) {
        case 'xl':
            sizeValue = 1200
            break;
        case 'lg':
            sizeValue = 992
            break;
        case 'md':
            sizeValue = 768
            break;
        case 'sm':
            sizeValue = 575
            break;
    }
    return useMediaQuery({ query: `(max-width: ${sizeValue}px)` })
}