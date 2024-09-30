import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import DetailCity from '../components/CardCidade';
import BotaoZao from '../components/Botao';
import { destinationDetails } from '../moks/destinos';






export default function CidadeShow() {
    const route = useRoute();
    const navigation = useNavigation();
    const { cidade } = route.params;


    useEffect(() => {
        navigation.setOptions({ title: cidade });
    }, [cidade, navigation]);


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


    const cityDetails = destinationDetails[cidade];

    return (
        <LinearGradient
            colors={getGradientColors()}
            style={styles.gradient}
        >
            <View style={styles.container}>
                <DetailCity details={cityDetails} />
                <BotaoZao texto={"Escolher outro Destino"} onPress={() => navigation.navigate('Segunda Tela')} />
            </View>
        </LinearGradient>
    );
};



const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoText: {
        fontSize: 18,
        marginVertical: 5,
        textAlign: 'center',
    },
    container: {
        marginVertical: 6,

    },
});
