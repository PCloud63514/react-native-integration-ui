import { default as Dark } from './dark'
import { default as light } from './light'

// subPalette가 없다면 mainPalette의 subPalette를 호출하도록. (이럴 경우 중복데이터 제거됨)


declare global {
    interface SubPalette {
        floatingActionButton:String,
        selectionControl:String,
        slider:String,
        switch:String,
        progressBar:String,
        link:String,
        headline:String
    }

    interface Palette {
        primaryColor:String,
        secondaryColor:SubPalette,
        alternateTextColor:String,
        canvasColor:String,
        borderColor:String,
        disableColor:String,
        disabledTextColor:String,
        activeIconColor:String,
        inactiveIconColor:String,
    }

    interface theme {
        mainPalette:Palette,
        subPalette:SubPalette,
    }
    
}