import React, { PureComponent } from 'react'
import { View , Text, TouchableHighlight, StyleSheet } from 'react-native'
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
 * onPress:Function
 * text:String
 * icon:String
 */
declare global {
    type Button = {
        key?:string,
        type: 'text' | 'outlined' | 'contained' | 'toggle',
        states: 'enabled' | 'disabled' | 'hover' | 'focused' | 'pressed' | 'active'
        onPress?:Function,
        onLongPress?:Function,
        text?:string,
        icon:string,
     }
}

const test = StyleSheet.create({
    container: {
        
    }
})

function getStyle(props:Button, context:Theme):any {
    const { type, states, icon } = props
    const { palette } = context
    var styles: Record<string, any> = {
        container: {
            flexDirection: 'row',
            padding:15,
            alignItems:'center',
            justifyContent:'center'
        },
        text:{},
        icon:{
            color:'#ffffff',
            fontSize:14
        }
    }

    switch(type) {
        case 'text': 

        break
        case 'contained': 
            styles.container.backgroundColor= palette.activeBackgroundColor
            styles.text.color = palette.alternateTextColor
            styles.container.borderRadius=5
        break
        case 'outlined': 
            styles.container.backgroundColor= palette.alternateTextColor
            styles.container.borderColor = palette.activeBackgroundColor
            styles.icon.color = palette.activeBackgroundColor
            styles.container.borderWidth = 1
            styles.container.borderRadius = 5
        break
        case 'toggle': break
    }

    if(icon) {
        styles.icon.marginRight = 8
    }

    return {
        container: [
            styles.container
        ],
        text: [
            styles.text
        ],
        icon:[
            styles.icon
        ]
    }
}

class ImplButton extends PureComponent<Button> {
    static contextType = ThemeContext

    test = () => {
        console.log('hi')
    }
    render():any {
        const { key, onPress, text, icon } = this.props
        
        const mergeStyles = getStyle(this.props, this.context)

        return (
            <TouchableHighlight style={{backgroundColor:'red'}}onPress={this.test}>
            <View style={ mergeStyles.container}>
                    <Icon style={mergeStyles.icon} name={'plus'} size={mergeStyles.icon.fontSize} color={mergeStyles.icon.color}/>
                    <Text style={mergeStyles.text}>
                        {text?.toUpperCase()}
                    </Text>
                </View>
            </TouchableHighlight>    
        )
    }
}

export default ImplButton