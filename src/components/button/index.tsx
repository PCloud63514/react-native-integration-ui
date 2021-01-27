import React, { PureComponent } from 'react'
import { View , Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ThemeContext from '../../stores/ThemeContext'

/**
 * Material Component UI 규칙
 * Single Line
 */

/**
 * key:String
 * type: 'text' | 'outlined' | 'contained' | 'toggle'
 * states:'enabled' | 'disabled' | 'hover' | 'focused' | 'pressed' | 'active'
 * onPress:any
 * onLongPress:any
 * text:String
 * icon:String
 */
declare global {
    type T_Button = {
        key?:string,
        type: 'text' | 'outlined' | 'contained' | 'toggle',
        states: 'enabled' | 'disabled' | 'hover' | 'focused' | 'pressed' | 'active'
        onPress?:any,
        onLongPress?:any,
        text:string,
        icon?:string,
     }
}

function getStyle(props:T_Button, context:Theme):any {
    const { type, states, icon } = props
    const { palette } = context
    var styles: Record<string, any> = {
        container: {
            flexDirection: 'row',
            alignItems:'center',
            
            minWidth:64,
            minHeight:36,
        },
        text:{
            fontWeight:'bold',
            fontSize:10
            // textAlign:'center'
        },
        icon:{
            color:'#ffffff',
            fontSize:10
        }
    }

    switch(type) {
        case 'text': 
            styles.text.marginLeft = 8
            styles.text.marginRight = 8
            styles.text.color = palette.secondaryColor
            styles.icon.color = palette.secondaryColor
        break
        case 'contained': 
            styles.text.marginLeft = 16
            styles.text.marginRight = 16
            styles.container.backgroundColor= palette.secondaryLightColor
            styles.text.color = palette.onSecondaryColor
            styles.icon.color = palette.onSecondaryColor
            styles.container.borderRadius=5
        break
        case 'outlined': 
            styles.text.marginLeft = 16
            styles.text.marginRight = 16
            styles.container.borderColor = palette.secondaryLightColor
            styles.icon.color = palette.secondaryColor
            styles.text.color = palette.secondaryColor
            styles.container.borderWidth = 1.5
            styles.container.borderRadius = 5
        break
        case 'toggle': break
    }

    if(icon) {
        styles.icon.marginLeft = 12
        styles.icon.marginRight = 8
        styles.text.marginLeft = 0
    }

    return {
        container: [
            styles.container
        ],
        text: [
            styles.text,
            
        ],
        icon:[
            styles.icon
        ]
    }
}

class Button extends PureComponent<T_Button> {
    static contextType = ThemeContext

    render():any {
        const { key, onPress, text, icon } = this.props
        
        const mergeStyles = getStyle(this.props, this.context)

        return (
            <TouchableNativeFeedback onPress={onPress}>
            <View style={ mergeStyles.container}>
                { icon && (<Icon style={mergeStyles.icon} name={icon} size={mergeStyles.icon.fontSize} color={mergeStyles.icon.color}/>)}
                    <Text style={mergeStyles.text}>
                        {text?.toUpperCase()}
                    </Text>
                </View>
            </TouchableNativeFeedback>    
        )
    }
}

export default Button