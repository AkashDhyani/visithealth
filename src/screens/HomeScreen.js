import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, Keyboard, TouchableOpacity } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { constants } from "../utils/constants";
import { FontAwesome } from '@expo/vector-icons';
import Styles from '../config/styles';

const HomeScreen = () => {

    const [loanValue, setLoanValue] = useState(1000)

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (loanValue < 1000 || loanValue > 20000) {
            setIsButtonDisabled(true)
        }
        else {
            setIsButtonDisabled(false)
        }
    }, [loanValue])

    return (
        <SafeAreaView style={Styles.loan.container}>
            <View style={Styles.loan.container}>
                <View style={Styles.loan.header}>
                    <AntDesign name="left" size={15} color="blue" />
                    <Text style={Styles.loan.headerText}>{constants.LOANAMOUNT}</Text>
                </View>
                <View style={Styles.loan.content}>
                    <View style={Styles.loan.minLoanContainer}>
                        <Image source={require('../../assets/Vector.png')} style={Styles.loan.warningIcon} />
                        <Text style={Styles.loan.minLoanText}>
                            <Text>{constants.MINLOAN}</Text>
                            <Text style={{ color: '#714FFF' }}>{constants.MINAMOUNT}</Text>
                        </Text>
                    </View>
                    <View>
                        <Text style={Styles.loan.selectLoanText}>
                            {constants.SELECT}
                        </Text>
                        <Text style={Styles.loan.eligibilityText}>
                            <Text>{constants.ELIGIBILTY}</Text>
                            <Text style={Styles.loan.eligibilityAmount}>{constants.ELIGIBILTYAMOUNT}</Text>
                        </Text>
                    </View>
                    <View style={Styles.loan.shadowView}>
                        <AnimatedCircularProgress
                            size={250}
                            width={8}
                            fill={(parseInt(loanValue) / 20000 * 100)}
                            tintColor="#714FFF"
                            backgroundColor="lightgrey"
                            rotation={360}
                        >
                            {
                                (fill) => (
                                    <View style={Styles.loan.circularProgress}>
                                        <Text style={Styles.loan.circularProgressText}>
                                            {constants.LOANAMOUNT.toUpperCase()}
                                        </Text>

                                        <View style={Styles.loan.circularProgressInputContainer}>
                                            <FontAwesome name="rupee" size={24} color="black" style={{ top: 1 }} />
                                            <TextInput value={loanValue.toString()}
                                                keyboardType="number-pad"
                                                returnKeyType='done'
                                                onChangeText={(text) => setLoanValue(text)}
                                                width={80}
                                                style={Styles.loan.circularProgressInputText} />
                                        </View>

                                    </View>
                                )
                            }

                        </AnimatedCircularProgress>
                    </View>

                    <TouchableOpacity style={[Styles.loan.button, isButtonDisabled && Styles.loan.disabledButton]} disabled={isButtonDisabled}>
                        <Text style={Styles.loan.buttonText}>{constants.SUBMIT}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
});

export default HomeScreen;