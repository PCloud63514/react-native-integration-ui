import React, { PureComponent } from 'react'
import { View , Text, TouchableNativeFeedback, Animated, Platform } from 'react-native'
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
 * onPress?:any
 * onLongPress?:any
 * text?:String
 * icon:String
 */
declare global {
    type T_FloatingActionButton = {
        key?:string,
        type: 'regular' | 'mini' | 'extended'
        states: 'enabled' | 'disabled' | 'hover' | 'focused' | 'pressed' | 'active'
        onPress?:any,
        onLongPress?:any,
        Items?:[T_FloatingActionButtonItem]
        text?:string,
        icon:string,
     }
}

function getStyle(props:T_FloatingActionButton, context:Theme):any {
    const { type, states, icon } = props
    const { palette } = context
    var styles: Record<string, any> = {
        container: {
            ...Platform.select({
                ios: {
                    shadowColor:'#000',
                    shadowOffset: {
                        width:0,
                        height:3
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,
                },
                android:{
                    elevation: 9,
                }
            }),
            
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'center',
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
        case 'regular': 
            styles.container.width = 56
            styles.container.height = 56
            styles.container.borderRadius=56/2
            styles.container.backgroundColor= palette.secondaryLightColor

            styles.icon.fontSize = 24
            styles.icon.color = palette.onSecondaryColor
        break
        case 'mini': 
            styles.container.width = 40
            styles.container.height = 40
            styles.container.borderRadius=20
            styles.container.backgroundColor = palette.secondaryLightColor
            styles.icon.color = palette.onSecondaryColor
        break
        case 'extended':
            styles.container.minHeight = 36
            styles.container.minWidth = 100
            styles.container.backgroundColor = palette.secondaryLightColor
            styles.container.borderColor = palette.secondaryLightColor
            styles.container.borderWidth = 1.5
            styles.container.borderRadius = 30

            styles.text.marginLeft = 16
            styles.text.marginRight = 16
            styles.text.marginLeft = 0
            styles.text.color = palette.onSecondaryColor

            styles.icon.marginLeft = 12
            styles.icon.marginRight = 8
            styles.icon.color = palette.onSecondaryColor
        break
    }

    // if(icon) {
    //     styles.icon.marginLeft = 12
    //     styles.icon.marginRight = 8
    //     styles.text.marginLeft = 0
    // }

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

class FloatingActionButton extends PureComponent<T_FloatingActionButton> {
    static contextType = ThemeContext

    state = {
        animation: new Animated.Value(0),
        animMode:'init',
        icon:this.props.icon
    }

    touchableEvent = () => {
        const { animation, animMode } = this.state
        
        const test = Animated.timing(
            this.state.animation,
            {
                toValue:animMode === 'init' ? 1 : 0,
                duration:500,
                useNativeDriver:true
            },
        ).start(() => this.setState({animMode: animMode !== 'init' ? 'init': 'final'}))
    }

    animationListener = (state: {value:number}) => {
        if (state.value === 0.5) {
            this.setState({icon: this.state.animMode !== 'init' ? this.props.icon : 'close'})
        }
    }

    constructor(props:T_FloatingActionButton) {
        super(props)
        this.state.animation.addListener(this.animationListener)
    }

    getAnimationStyle() {
        const animationStyle = {
            transform:[
                {
                    rotate: this.state.animation.interpolate({
                        inputRange:[0,1],
                        outputRange:['0deg', '360deg']
                    })
                },
                {
                    scale: this.state.animation.interpolate({
                        inputRange:[0, 0.5, 1],
                        outputRange:[1, 0.5, 1]
                    })
                }
            ]
        }
        return animationStyle
    }
    
    renderAnimatedView= (mergeStyles:any, type:string, text?:string) => (
        <View style={mergeStyles.container}>
            <Animated.View style={ [{}, this.getAnimationStyle()]}>
                <Icon style={mergeStyles.icon} name={this.state.icon} size={mergeStyles.icon.fontSize} color={mergeStyles.icon.color}/>
                {/* {  type === 'extended' && (<Text style={mergeStyles.text}> {text?.toUpperCase()} </Text>) }  */}
            </Animated.View>
        </View>
    )

    renderView = (mergeStyles:any, type:string, text?:string) => (
        <View style={ mergeStyles.container}>
            <Icon style={mergeStyles.icon} name={this.state.icon} size={mergeStyles.icon.fontSize} color={mergeStyles.icon.color}/>
            {  type === 'extended' && (<Text style={mergeStyles.text}> {text?.toUpperCase()} </Text>) } 
        </View>
    )

    render():any {
        const { key, onPress, text, icon, type } = this.props
        const mergeStyles = getStyle(this.props, this.context)

        const tochableEvent = onPress !== undefined ? onPress : this.touchableEvent
        const content = onPress !== undefined ? this.renderView(mergeStyles, type, text) : this.renderAnimatedView(mergeStyles, type, text)
        return (
            <TouchableNativeFeedback onPress={tochableEvent}>
                { content }
            </TouchableNativeFeedback>    
        )
    }
}

export default FloatingActionButton