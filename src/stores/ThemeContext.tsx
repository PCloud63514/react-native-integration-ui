import { createContext } from 'react'
import { LightPurple, Dracula, Indigo } from '../styles/palttes'
//ui design
//theme
//  - Component Color
//  - Component Location? margin & padding & translateX Y
//  - Default Theme Light or Dark

//  - 

// moko mdata
export const MokoData:Theme = {
    palette:Dracula
}

// palette, theme 는 type 으로 변경해야할듯
export default createContext<Theme | null>(null)