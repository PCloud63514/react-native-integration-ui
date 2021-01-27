import {ColorPaltte} from '../colors'
import convertRGBA from '../utils/rgb2rgba'

const Dracula:Palette = {
    primaryColor:ColorPaltte.gray900,
    primaryLightColor:'#484848',
    primaryDarkColor:ColorPaltte.black,
    secondaryColor:ColorPaltte.redA700,
    secondaryLightColor:'#ff5131',
    secondaryDarkColor:'#9b0000',

    backgroundColor:ColorPaltte.white,
    surfaceColor:ColorPaltte.white,
    error:ColorPaltte.red700,
    onPrimaryColor:ColorPaltte.white,
    onSecondaryColor:ColorPaltte.white,
    onBackgroundColor:ColorPaltte.black,
    onSurfaceColor:ColorPaltte.black,
    onErrorColor:ColorPaltte.white,
    disablePrimaryColor:convertRGBA(ColorPaltte.gray900, 53),
    disableSecondaryColor:convertRGBA(ColorPaltte.redA700, 53),
}
export default Dracula