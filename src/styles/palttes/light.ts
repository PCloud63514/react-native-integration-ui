import RGBA from '../utils/rgb2rgba'
import { ColorPaltte } from '../colors'

// subPalette가 없다면 mainPalette의 subPalette를 호출하도록. (이럴 경우 중복데이터 제거됨)
interface theme {
    mainPalette:Palette,
    subPalette:SubPalette,
}

interface Palette {

}

interface SubPalette {
    floatingActionButton:String,
    selectionControl:String,
    slider:String,
    switch:String,
    progressBar:String,
    link:String,
    headline:String
}