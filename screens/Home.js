import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ClimaNow from '../components/ClimaAgora';
import ProximosSeteDias from '../components/ProximosDias';
import BotaoZao from '../components/Botao';

export default function HomeScreen() {
    const navigation = useNavigation();

    const getGradientColors = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour < 12) {

            return ['#89CFF0', '#AEE3F5', '#FFD700'];
        } else if (currentHour >= 12 && currentHour < 18) {

            return ['#FDB813', '#FF5E62', '#FA3C4C'];
        } else {

            return ['#0A0C14', '#17243E', '#17243E'];
        }
    };

    return (
        <LinearGradient
            colors={getGradientColors()}
            style={styles.gradient}
        >
            <ScrollView>
                <View>
                    <ClimaNow />
                    <ProximosSeteDias />
                    <BotaoZao texto={"Destinos"} onPress={() => navigation.navigate('Segunda Tela')} />
       
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
    },
});
