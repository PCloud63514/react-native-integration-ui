import convertRGBA from '../utils/rgb2rgba'
import { ColorPaltte } from '../colors'


const Dark:Palette = {
    primaryColor: ColorPaltte.black,
    // secondaryColor: ColorPaltte.white,
    borderColor:ColorPaltte.white,
    activeIconColor:convertRGBA(ColorPaltte.white, 87),
    disableIconColor:convertRGBA(ColorPaltte.white, 38),
    alternateTextColor:convertRGBA(ColorPaltte.white, 87),
    activeHelpTextColor:convertRGBA(ColorPaltte.red300, 100),
    
}