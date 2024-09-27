import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import DetailCity from '../components/CardCidade';
import BotaoZao from '../components/Botao';



const destinationDetails = {
    Teresina: {
        description: "Teresina, capital do Piauí, encanta com o calor intenso e belas paisagens à beira dos rios Parnaíba e Poti.",
        image: require('../assets/teresina.png'),
        attractions: ["Encontro dos Rios", "Ponte Estaiada", "Potycabana", "Palácio de Karnak"],
    },
    Timon: {
        description: "Timon, no Maranhão, é vizinha de Teresina e une o melhor de duas culturas em suas tradições e riquezas naturais.",
        image: require('../assets/timon.jpg'),
        attractions: ["Balneário Sena Brasil", "Centro de Convenções", "Balneário Seu Chico", "Cocais Shopping"],
    },
    Parnaiba: {
        description: "Parnaíba, litoral do Piauí, destaca-se pelo Delta do Parnaíba, um dos mais belos e únicos ecossistemas do mundo.",
        image: require('../assets/parnaiba.png'),
        attractions: ["Museu do Mar", "Lagoa do Portinho", "Praia de Atalaia", "Delta do Parnaíba"],
    },
    CampoMaior: {
        description: "Campo Maior é conhecida por seu papel histórico na Batalha do Jenipapo e por suas belas paisagens naturais.",
        image: require('../assets/campomaior.png'),
        attractions: ["Monumento Heróis do Jenipapo", "Catedral de Santo Antônio", "Açude Grande", "Budega do Felipe"],
    },
    SeteCidades: {
        description: "O Parque Nacional de Sete Cidades impressiona com suas formações rochosas únicas e paisagens de tirar o fôlego.",
        image: require('../assets/setecidades.jpg'),
        attractions: ["Parque", "Museu", "Igreja", "Formações Rochosas"],
    },
    Oeiras: {
        description: "Oeiras, primeira capital do Piauí, é repleta de história, cultura e religiosidade, com festas e tradições centenárias.",
        image: require('../assets/oeiras.jpg'),
        attractions: ["Praça das Vitórias", "Museu de Arte Sacra", "Morro do Leme", "Teatro de Oeiras"],
    },
    Floriano: {
        description: "Floriano, às margens do Rio Parnaíba, é conhecida por seu Carnaval animado e pela rica herança cultural piauiense.",
        image: require('../assets/floriano.jpg'),
        attractions: ["Espaço Cultural Maria Bonita", "Museu de Arte Folclórica", "Cais do Rio Parnaíba", "Igreja de São Pedro Alcantara"],
    },
    Picos: {
        description: "Picos, centro econômico do Piauí, é famosa por sua produção de mel e pelas belas serras que a cercam.",
        image: require('../assets/picos.png'),
        attractions: ["Estádio Municipal Helvídio Nunes", "Balneário Vista Serrana", "Museu Ozildo Albano", "Picos Plaza Shopping"],
    },
};



const CidadeShow = () => {
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

export default CidadeShow;

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
});
