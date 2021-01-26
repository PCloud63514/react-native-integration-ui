// export { default as Dark } from './dark'
export { default as light } from './light'

// subPalette가 없다면 mainPalette의 subPalette를 호출하도록. (이럴 경우 중복데이터 제거됨)
declare global {

    /**
     * 버튼(ok, cancel, nature), 아이콘, 텍스트
     * 플로팅버튼, 
     */
    interface SubPalette {
        floatingActionButton:String,
        selectionControl:String,
        slider:String,
        switch:String,
        progressBar:String,
        link:String,
        headline:String
    }

    /**
     * 배경, 상단바
     * 텍스트(sub있으면 sub)
     */
    interface Palette {
        primaryColor:String,
        secondaryColor?:SubPalette,
        alternateTextColor:String,
        activeBackgroundColor:String,
        canvasColor:String,
        borderColor:String,
        disableColor:String,
        disabledTextColor:String,
        activeIconColor:String,
        disableIconColor:String,
        inactiveIconColor:String,
        activeHelpTextColor:String,
    }

    // main 및 sub에 따로 접근하면 사용자 지정이 쉬운데 일단 고정적으로 Paltette로 끝
    interface Theme {
        palette:Palette,
    }
    
}