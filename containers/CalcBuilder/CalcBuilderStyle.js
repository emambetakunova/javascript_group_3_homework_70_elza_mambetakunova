import {StyleSheet} from "react-native";

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