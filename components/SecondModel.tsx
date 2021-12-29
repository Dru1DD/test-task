import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import { IPicker } from '../interfaces/IPicker'
import WheelPickerExpo from 'react-native-wheel-picker-expo'
import { mainPage as styles } from '../styles/mainPage'

export const SecondModel: FC = () => {
    const [ tempValue, setTempValue ] = useState<IPicker>()
    const [ tempLabel, setTempLabel ] = useState<string[]>(() => {
        let arr: string[] = []
        for(let i = -100; i <= 100; i++) {
            arr.push(`${i} °C`)
        }
        return arr
    })

    return (
        <View style={styles.modalContainer}>
            <WheelPickerExpo
                initialSelectedIndex={101}
                items={tempLabel.map((item) => ({ label: item, value: `${item}`}))}
                onChange={(item) => setTempValue(item.item.value)}
            />
            <View style={styles.line} />
            <Text>{tempValue}</Text>               
        </View>
    )
}