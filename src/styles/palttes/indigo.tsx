import {ColorPaltte} from '../colors'
import convertRGBA from '../utils/rgb2rgba'

const Indigo:Palette = {
    primaryColor:ColorPaltte.indigo500,
    primaryLightColor:'#757ce8',
    primaryDarkColor:'#002884',
    secondaryColor:ColorPaltte.purple200,
    secondaryLightColor:'#ffc4ff',
    secondaryDarkColor:'#9c64a6',

    backgroundColor:ColorPaltte.white,
    surfaceColor:ColorPaltte.white,
    error:ColorPaltte.red700,
    onPrimaryColor:ColorPaltte.white,
    onSecondaryColor:ColorPaltte.black,
    onBackgroundColor:ColorPaltte.black,
    onSurfaceColor:ColorPaltte.black,
    onErrorColor:ColorPaltte.white,
    disablePrimaryColor:convertRGBA(ColorPaltte.gray900, 53),
    disableSecondaryColor:convertRGBA(ColorPaltte.redA700, 53),
}
export default Indigo