import React, { FC, useState } from 'react'
import { View, Text } from 'react-native'
import Picker from './Picker/Picker'
import { mainPage as styles } from '../styles/mainPage'

interface IValues {
    value: number
    label: string
}
export const SecondModel: FC = () => {
    const [ values, setValues ] = useState<IValues[]>(() => {
        let arr: IValues[] = []
        for(let i = -10; i <= 10; i++) {
            arr.push({value: i, label: `${i} °C`})
        }
        return arr
    })

    return (
        <View style={styles.modalContainer}>
            <Picker {...{values, defaultValue: 0}}/>
            {/* <View style={styles.line} />             */}
        </View>
    )
}