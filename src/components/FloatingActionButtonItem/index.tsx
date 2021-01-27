import React, { PureComponent } from 'react'
import { View , Text, TouchableNativeFeedback, StyleSheet, GestureResponderEvent } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ThemeContext from '../../stores/ThemeContext'

declare global {
    type T_FloatingActionButtonItem = {
        key?:string,
        // type: 'regular' | 'mini' | 'extended'
        // states: 'enabled' | 'disabled' | 'hover' | 'focused' | 'pressed' | 'active'
        onPress?:any,
        // onLongPress?:any,
        // Items:FloatingActionButton
        text?:string,
        icon:string,
     }
}
