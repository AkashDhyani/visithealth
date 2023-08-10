import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    loan:{
        container: {
            flex: 1
        },
        header: {
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1
        },
        headerText: {
            marginLeft: 10,
            fontWeight: 'bold',
            fontSize: 16
        },
        content: {
            marginTop: 25,
            marginHorizontal: 15,
            flex: 1
        },
        minLoanContainer: {
            backgroundColor: '#d9e6fa',
            flexDirection: "row",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            marginBottom: 15
        },
        warningIcon: {
            width: 15,
            height: 15
        },
        minLoanText: {
            fontSize: 12,
            fontWeight: '600',
            marginLeft: 10
        },
        eligibilityAmount: {
            color: '#714FFF'
        },
        selectLoanText: {
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: 5
        },
        eligibilityText: {
            fontSize: 12,
            fontWeight: '600'
        },
        shadowView: {
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 4,
            alignSelf: 'center',
            marginVertical: 100
        },
        circularProgress: { 
            alignItems: "center" 
        },
        circularProgressText: { 
            color: "#A5A6BB", 
            fontSize: 10, 
            marginBottom: 8 
        },
        circularProgressInputContainer: { 
            flexDirection: "row", 
            alignItems: "center", 
            backgroundColor: '#e7e8e6', 
            borderRadius: 5, 
            paddingLeft: 10 
        },
        circularProgressInputText: { 
            fontSize: 24, 
            fontWeight: "700", 
            paddingVertical: 5, 
            paddingHorizontal: 8, 
            width: 100 
        },
        button: {
            backgroundColor: '#714FFF',
            paddingVertical: 15,
            borderRadius: 8,
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
            marginTop: 'auto',
    
        },
        buttonText: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
            alignSelf: "center",
            textAlignVertical: "center",
        },
        disabledButton: {
            backgroundColor: '#ccc', // Change the color to a disabled state
        }
    }
})