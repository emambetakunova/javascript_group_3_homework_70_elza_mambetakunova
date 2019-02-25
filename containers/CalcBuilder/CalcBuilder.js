import React from 'react';
import Calculator from '../../components/Calculator/Calculator';
import {Text, View,} from 'react-native';

import './CalcBuilderStyle';

export default class CalcBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            command: '',
        };
        this.onPress = this.onPress.bind(this)
    }

    onPress = (symbol) => {
        if(symbol === "x") {
            symbol = "*";
        }
        this.setState ({formula: this.state.command + symbol})
    };

    onPressResult = () => {
        try {
            this.setState ({result: eval(this.state.command) || 0, command: ''})
        } catch (e) {
            alert ("Error!")
        }
    };

    onPressClearButton = () => {
        this.setState ({command: ''})
    };

    onPressBackspaceButton = () => {
        this.setState({command: this.state.command.slice(0,this.state.command.length - 1)})
    };


    render() {
        return (
            <View style = {{flex:1}}>
                <View style = {{backgroundColor:'#ffbb42', height:130}}>
                    <View style = {{flex:1, justifyContent:'center'}}>
                        <Text style = {[styles.resultText, {fontSize:(60-(this.state.result.toString().length))}]}>
                            {this.state.result}
                        </Text>
                    </View>
                </View>
                <View style = {{flex:1, justifyContent: 'flex-start', flexDirection: 'column'}}>
                    <View style = {{flex:1, backgroundColor: '#ffffff'}}>
                        <View style = {{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                            <Text style = {styles.commandText}>
                                {this.state.command}
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.row}>
                        <Calculator  style = {styles.clearButton} titleStyle = {styles.titleStyle} onPress = {this.onPressClearButton} title = "AC"/>
                        <Calculator  style = {styles.backspaceButton} titleStyle = {styles.titleStyle} onPress = {this.onPressBackspaceButton} title = "C"/>
                        <Calculator  style = {styles.equalButton} titleStyle = {styles.titleStyle} onPress ={this.onPressResult} title = "="/>
                    </View>
                    <View style = {styles.row}>
                        <Calculator  style ={styles.buttonNumber} onPress = {this.onPress} title = "1"/>
                        <Calculator  style ={styles.buttonNumber} onPress = {this.onPress} title = "2"/>
                        <Calculator  style ={styles.buttonNumber} onPress = {this.onPress} title = "3"/>
                        <Calculator  style = {styles.operation} titleStyle = {styles.titleStyle} onPress={this.onPress} title = "x"/>
                    </View>
                    <View style={styles.row}>
                        <Calculator  style = {styles.buttonNumber} onPress = {this.onPress} title = "4"/>
                        <Calculator  style = {styles.buttonNumber} onPress = {this.onPress} title = "5"/>
                        <Calculator  style = {styles.buttonNumber} onPress = {this.onPress} title = "6"/>
                        <Calculator  style = {styles.operation} titleStyle = {styles.titleStyle} onPress={this.onPress} title = "/"/>
                    </View>
                    <View style={styles.row}>
                        <Calculator  style ={styles.buttonNumber} onPress = {this.onPress} title = "7"/>
                        <Calculator  style ={styles.buttonNumber} onPress = {this.onPress} title = "8"/>
                        <Calculator  style ={styles.buttonNumber} onPress = {this.onPress} title = "9"/>
                        <Calculator  style ={styles.operation} titleStyle = {styles.titleStyle} onPress={this.onPress} title = "-"/>
                    </View>
                    <View style={styles.row}>
                        <Calculator  style = {styles.buttonNumber} onPress = {this.onPress} title = "0"/>
                        <Calculator  style = {styles.buttonNumber} onPress = {this.onPress} title = "00"/>
                        <Calculator  style = {styles.buttonNumber} onPress = {this.onPress} title = "."/>
                        <Calculator  style = {styles.operation} titleStyle = {styles.titleStyle} onPress = {this.onPress} title = "+"/>

                    </View>
                </View>
            </View>
        );
    }
}