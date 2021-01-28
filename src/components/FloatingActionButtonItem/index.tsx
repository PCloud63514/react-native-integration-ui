import { transform } from '@babel/core'
import React, { PureComponent } from 'react'
import { View , Text, TouchableNativeFeedback, StyleSheet, Animated, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ThemeContext from '../../stores/ThemeContext'

declare global {
    type T_FloatingActionButtonItem = {
        id?:string,
        // type: 'regular' | 'mini' | 'extended'
        // states: 'enabled' | 'disabled' | 'hover' | 'focused' | 'pressed' | 'active'
        onPress?:any,
        // onLongPress?:any,
        // Items:FloatingActionButton
        text?:string,
        icon:string,
        status?: 'init'|'final'|'none'|string
     }
}
StyleSheet.create({
    container: {
        display:'none'
    }
})
function getStyle(context:Theme, display:string):any {
    const { palette } = context

    var styles: Record<string, any> = {
        container: {
            flexDirection: 'row',
            alignItems:'center',
            display:display,
        },
        iconContainer:{
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
            width:40,
            height:40,
            borderRadius:20,
            backgroundColor:palette.onSecondaryColor
        },
        text:{
            
            fontWeight:'bold',
            fontSize:10,
            // textAlign:'center'
        },
        icon:{
            color:'#ffffff',
            fontSize:14,
            
        }
    }
    styles.icon.color = palette.secondaryLightColor

    return {
        container: [
            styles.container
        ],
        iconContainer: [
            styles.iconContainer
        ],
        text: [
            styles.text,
            
        ],
        icon:[
            styles.icon
        ]
    }
}

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

class FloatingActionButtonItem extends PureComponent<T_FloatingActionButtonItem> {
    static contextType = ThemeContext
    moveValue:number = 25
    state = {
        moveAnimation: new Animated.Value(this.moveValue),
        fadeAnimation: new Animated.Value(0),
        display:'none'
    }

    constructor(props:T_FloatingActionButtonItem) {
        super(props)
    }

    getAnimationStyle() {
        const animationStyle = {
            opacity: this.state.fadeAnimation.interpolate({
                inputRange:[0, 1],
                outputRange:[0,1]
            }),
            transform:[
                {translateY: this.state.moveAnimation}
            ]
        }
        return animationStyle
    }
    test = () => {
        console.log('test_FloatingActionButtonItem')
    }

    playAnimation() {
        if(this.props.status === 'init') {
            this.setState({display:'flex'})
        }
        //display -> flex
        Animated.timing(
            this.state.fadeAnimation,
            {
                toValue:this.props.status === 'init' ? 1: 0,
                duration:300,
                useNativeDriver:true
            }
        ).start()

        Animated.timing(
            this.state.moveAnimation,
            {
                toValue:this.props.status === 'init' ? -this.moveValue : this.moveValue,
                duration:500,
                useNativeDriver:true
            }
        ).start(() => { if(this.props.status == 'final' || this.props.status == 'none') {this.setState({display:'none'})}})//status === 'final' => display -> none
    }

    componentDidUpdate() {
        this.playAnimation()
    }

    pressTest = () => {
        console.log('pressTest123')
    }

    render():any {
        const { id, icon, text, onPress, status } = this.props
        const styles = getStyle(this.context, this.state.display)

        return (
            <View style={styles.container}>
                    {/* {text && <Animated.Text style={[styles.text]}>{text}</Animated.Text> } */}

                    <TouchableNativeFeedback onPress={this.pressTest}>
                        <Animated.View style={[styles.iconContainer, this.getAnimationStyle()]}>
                            <AnimatedIcon name={icon} style={styles.icon} size={styles.icon.fontSize} color={styles.icon.color}/>
                        </Animated.View>
                    </TouchableNativeFeedback>
            </View>
        )
    }
}

export default FloatingActionButtonItem