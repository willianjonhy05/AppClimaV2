import { useState, useEffect } from 'react'; 
import { Platform, Text, View, StyleSheet, Alert, Image } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function ClimaNow() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const apiKey = '5b162971d5e26e14dd66ea2de2f42a9c';
    const [weather, setWeather] = useState(null);
    const [emoji, setEmoji] = useState('');

    function pegarLinkImagem(link) {
        return `https://openweathermap.org/img/wn/${link}@2x.png`;
    }

    const ClimaLocal = async (latitude, longitude, apiKey) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pt_br`
            );
            const data = await response.json();

            if (data.cod !== 200) {
                Alert.alert('Erro', 'Clima não encontrado.');
            } else {
                setWeather(data);
                setEmoji(data.weather[0].icon);
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível buscar os dados do clima.');
        }
    };

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Device.isDevice) {
                setErrorMsg(
                    'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
                );
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLongitude(location.coords.longitude);
            setLatitude(location.coords.latitude);
            ClimaLocal(location.coords.latitude, location.coords.longitude, apiKey);
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = `Localização: ${JSON.stringify(location)}`;
    }

    return (
        <View style={styles.container}>
            {weather && (
                <View style={styles.weatherContainer}>
                    <Text style={styles.cidade}>{weather.name}</Text>
                    <View style={styles.temperatureContainer}>
                        <Image source={{ uri: pegarLinkImagem(emoji) }} style={{ width: 180, height: 180 }} />
                        <Text style={styles.temperature}>
                            {Math.round(weather.main.temp)}°C
                        </Text>
                        <Text style={styles.weatherDescription}>
                            Clima Atual: {weather.weather[0].description}{"\n"}
                        </Text>
                        <Text style={styles.weatherDescription}>
                            Min: {Math.round(weather.main.temp_min)} °C / Máx: {Math.round(weather.main.temp_max)} °C
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    weatherContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    weatherDescription: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    temperatureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    temperature: {
        fontSize: 96,
        color: '#ffffff',
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    cidade: {
        fontSize: 60,
        color: '#ffffff',
        fontWeight: 'bold'
    },

});