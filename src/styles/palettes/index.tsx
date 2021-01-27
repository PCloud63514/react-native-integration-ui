// export { default as Dark } from './dark'
// export { default as light } from './light'
export { default as LightPurple } from './lightPurple'
export { default as Dracula } from './dracula'
export { default as Indigo } from './indigo'

// subPalette가 없다면 mainPalette의 subPalette를 호출하도록. (이럴 경우 중복데이터 제거됨)
declare global {

    /**
     * 버튼(ok, cancel, nature), 아이콘, 텍스트
     * 플로팅버튼, 
     */
    // interface SubPalette {
    //     floatingActionButton:String,
    //     selectionControl:String,
    //     slider:String,
    //     switch:String,
    //     progressBar:String,
    //     link:String,
    //     headline:String
    // }

    // 사이즈 맞춰서 margin하고 fontSize 등 전부 자동 변경되야함
    // 이게 되려면 ContextAPI를 쓰던 action을 쓰던 부가요소가 필요
    // 크기를 백분율로 나누고 이를 곱연산해도 괜찮을지도
     //배경, 상단바
     //텍스트(sub있으면 sub)
    /**
     * primaryColor: 
     * secondaryColor
     * 
     */ 
    interface Palette {
        primaryColor:String,
        primaryLightColor:String,
        primaryDarkColor:String,
        secondaryColor?:String,
        secondaryLightColor:String,
        secondaryDarkColor:String,
        backgroundColor:String,
        surfaceColor:String,
        error:String,
        onPrimaryColor:String,
        onSecondaryColor?:String,
        onBackgroundColor:String,
        onSurfaceColor:String,
        onErrorColor:String,
        disablePrimaryColor:String,
        disableSecondaryColor:String,
    }

    // TODO margin, fontSize 등의 normalize 가 필요한 상수는 나중에 빼고 우선 Platte 해결할 것
    interface Theme {
        palette:Palette,
        // Splash path,
        // 
    }
    
}

// TODO Typography and iconography






// alternateTextColor:String,
// activeBackgroundColor:String,
// canvasColor:String,
// borderColor:String,
// disableColor:String,
// disabledTextColor:String,
// activeIconColor:String,
// disableIconColor:String,
// inactiveIconColor:String,
// activeHelpTextColor:String,
