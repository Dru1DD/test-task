import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { IPicker } from '../interfaces/IPicker';
import { mainPage as styles } from '../styles/mainPage'

export const FirstModel: FC = () => {
    const [ hours, setHours ] = useState<IPicker>()
    const [ minutes, setMinutes ] = useState<IPicker>()
    const [ firstCount, setFirstCount ] = useState<string[]>(() => {
        let arr: string[] = []
        for( let i = 0; i < 10; i++ ) {
            arr.push(`0${i}`)
        }
        for( let i = 10;  i < 24; i++ ) {
            arr.push(`${i}`)
        }

        return arr
    })
    const [ secondCount, setSecondCount ] = useState<string[]>(() => {
        let arr: string[] = []
        for( let i = 0; i < 10; i++ ) {
            arr.push(`0${i}`)
        }
        for( let i = 10; i < 60; i++ ) {
            arr.push(`${i}`)
        }
        return arr
    })
    return (
        <View style={styles.modalContainer}>
        <View style={styles.modelTime}>
            <WheelPickerExpo 
                initialSelectedIndex={1}
                items={firstCount.map((item) => ({ label: item, value: `${item}`}))}
                onChange={(item) => setHours(item.item.value)}
            />
            <Text style={styles.separetedSymbol}>:</Text>
            <WheelPickerExpo 
                initialSelectedIndex={1}
                items={secondCount.map((item) => ({ label: item, value: `${item}`}))}
                onChange={(item) => setMinutes(item.item.value)}
            />
        </View>
        
        <View style={styles.line} />
        <Text>{`${hours} : ${minutes}`}</Text>  
    </View>
    )
}