import React from 'react';
import Calculator from '../../components/Calculator/Calculator';
import {StyleSheet, Text, View,} from 'react-native';


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
        if (this.state.command.length === 0 && symbol !== "-" && isNaN(symbol) ) {
            return
        }
        if (this.state.command === "-" && symbol === "-") {
            return
        }
        this.setState ({command: this.state.command + symbol})
    };

    onPressResult = () => {
        try {
            this.setState ({result: eval(this.state.command) || 0, command: ''})
        } catch (e) {
            alert ("Error!");
            this.setState ({command: ''})
        }
    };

    onPressClearButton = () => {
        this.setState ({command: '', result: 0})
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

const styles = StyleSheet.create ({
    component: {
        flex: 1,
        flexDirection: 'column'
    },

    titleStyle: {
        color: '#000000',
    },

    clearButton: {
        flex: 2,
        backgroundColor: '#ffbb42',
        height: 75,
    },

    backspaceButton: {
        flex: 1,
        backgroundColor: '#ffbb42',
        height: 75,
    },

    equalButton: {
        flex: 1,
        height: 75,
        backgroundColor: '#ffbb42',
    },

    buttonNumber: {
        flex: 1,
        height: 75,
    },

    operation: {
        backgroundColor: '#ffbb42',
        height: 75,
        flex: 1,
    },

    textButton: {
        color: '#000000',
    },

    commandText: {
        flex: 1,
        color: '#000000',
        fontSize: 30,
        marginRight: 16,
        textAlign : 'right'
    },

    resultText: {
        color: '#000000',
        textAlign : 'right',
        fontSize: 60,
        marginRight: 16
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});