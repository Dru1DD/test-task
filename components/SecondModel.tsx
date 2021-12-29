import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import Picker from './Picker/Picker'
import { mainPage as styles } from '../styles/mainPage'

interface IValues {
    value: number
    label: string
}
export const SecondModel: FC = () => {
    const [ tempValue, setTempValue ] = useState<IValues>()
    const [ values, setValues ] = useState<IValues[]>(() => {
        let arr: IValues[] = []
        for(let i = -100; i <= 100; i++) {
            arr.push({value: i, label: `${i} °C`})
        }
        return arr
    })

    const defaultValue = 101

    return (
        <View style={styles.modalContainer}>

            <Picker {...{values, defaultValue}}/>
            <View style={styles.line} />
            <Text>{tempValue}</Text>               
        </View>
    )
}