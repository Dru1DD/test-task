import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { FirstModel } from '../components/FirstModel';
import { SecondModel } from '../components/SecondModel';
import ThirdModel from '../components/ThirdModel';
import { mainPage as styles } from '../styles/mainPage'



export const MainPage: FC = () => {
    const [ isFirstModalOpen, setFirstModalOpen ] = useState<boolean>(false)
    const [ isSecondModalOpen, setSecondModalOpen ] = useState<boolean>(false)
    const [ isThirdModalOpen, setThirdModalOpen ] = useState<boolean>(false)

    const firstClickHandler: () => void = () => {
        setFirstModalOpen(!isFirstModalOpen)
    }
    
    const secondClickHandler: () => void = () => {
        setSecondModalOpen(!isSecondModalOpen)
    }

    const thirdClickHandler: () => void = () => {
        setThirdModalOpen(!isThirdModalOpen)
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Test Task</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.action}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={firstClickHandler}
                    >
                        <Text style={styles.btnText}>Первый компонент</Text> 
                    </TouchableOpacity>
                </View>
                <View style={styles.action}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={secondClickHandler}
                    >
                        <Text style={styles.btnText}>Второй компонент</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.action}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={thirdClickHandler}
                    >
                        <Text style={styles.btnText}>Третий компонент</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            <Modal 
                isVisible={isFirstModalOpen}
                onBackdropPress={() => setFirstModalOpen(!isFirstModalOpen)}
            >
                <FirstModel />
            </Modal>
            <Modal 
                isVisible={isSecondModalOpen}
                onBackdropPress={() => setSecondModalOpen(!isSecondModalOpen)}
            >
                <SecondModel />
            </Modal>

            <Modal 
                isVisible={isThirdModalOpen}
                onBackdropPress={() => setThirdModalOpen(!isThirdModalOpen)}
            >
                <ThirdModel />
            </Modal>
        </View>
    )
}