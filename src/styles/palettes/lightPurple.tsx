import {ColorPaltte} from '../colors'
import convertRGBA from '../utils/rgb2rgba'

const LightPurple:Palette = {
    primaryColor:ColorPaltte.purpleA700,
    primaryLightColor:'#e254ff',
    primaryDarkColor:'#7200ca',
    secondaryColor:ColorPaltte.purple200,
    secondaryLightColor:'#fff2ff',
    secondaryDarkColor:'#ad8fb6',

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
export default LightPurple