import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const TesteConcluido = () => {
    const navigation = useNavigation();
    const destinations = ['Teresina', 'Timon', 'Parnaiba', 'Campo Maior', 'Sete Cidades', 'Oeiras', 'Floriano', 'Picos'];

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
                <View style={styles.container}>
                    <View style={styles.main}>
                        <View style={styles.column}>
                            {destinations.slice(0, Math.ceil(destinations.length / 2)).map(places => (
                                <TouchableOpacity 
                                    style={styles.touchableOpacity} 
                                    key={places} 
                                    onPress={() => {
                                        navigation.navigate('Cidade', { cidade: places });
                                    }}
                                >
                                    <Text style={styles.buttonText}>{places}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.column}>
                            {destinations.slice(Math.ceil(destinations.length / 2)).map(places => (
                                <TouchableOpacity 
                                    style={styles.touchableOpacity} 
                                    key={places} 
                                    onPress={() => {
                                        navigation.navigate('Cidade', { cidade: places }); 
                                    }}
                                >
                                    <Text style={styles.buttonText}>{places}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default TesteConcluido;

export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        alignItems: "center",
    },
    main: {
        height: '75%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: "5%",
        color: "#2C3E50",
    },
    touchableOpacity: {
        backgroundColor: "white",
        padding: 20,
        alignItems: "center",
        borderRadius: 20,
        marginVertical: 10,
        width: "90%",
        borderWidth: 2,
        borderColor: "black",
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});
