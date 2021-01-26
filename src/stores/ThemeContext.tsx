import { createContext } from 'react'
import { light } from '../styles/palttes'
//ui design
//theme
//  - Component Color
//  - Component Location? margin & padding & translateX Y
//  - Default Theme Light or Dark

//  - 

// moko mdata
export const MokoData:Theme = {
    palette:light
}

// palette, theme 는 type 으로 변경해야할듯
export default createContext<Theme | null>(null)