import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
// import WheelPickerExpo from 'react-native-wheel-picker-expo';
import Picker from './Picker/Picker'
import { IPicker } from '../interfaces/IPicker';
import { mainPage as styles } from '../styles/mainPage'

interface IValues {
    value: number
    label: string
}

export const FirstModel: FC = () => {
    const [ hours, setHours ] = useState<IValues>()
    const [ minutes, setMinutes ] = useState<IValues>()
    const [ firstCount, setFirstCount ] = useState<IValues[]>(() => {
        let arr: IValues[] = []
        for( let i = 0; i < 10; i++ ) {
            arr.push({value: Number(`0: ${i}`), label: `${i}`})
        }
        for( let i = 10;  i < 24; i++ ) {
            arr.push({value: i, label: `${i}`})
        }

        return arr
    })
    const [ secondCount, setSecondCount ] = useState<IValues[]>(() => {
        let arr: IValues[] = []
        for( let i = 0; i < 10; i++ ) {
            arr.push({value: Number(`0: ${i}`), label: `${i}`})
        }
        for( let i = 10; i < 60; i++ ) {
            arr.push({value: i, label: `${i}`})
        }
        return arr
    })
    return (
        <View style={styles.modalContainer}>
        <View style={styles.modelTime}>
            <Picker {...{values: firstCount, defaultValue: 0}}/>
            <Text style={styles.separetedSymbol}>:</Text>
            <Picker {...{values: secondCount, defaultValue: 0}}/>
        </View>
        
        <View style={styles.line} />
        <Text>{`${hours} : ${minutes}`}</Text>  
    </View>
    )
}