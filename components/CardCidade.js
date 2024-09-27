import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';

export default function DetailCity({ details }) {
    if (!details) {
        return <Text style={styles.errorText}>Detalhes da cidade não encontrados.</Text>;
    }

    return (
        <ScrollView>
            <View style={styles.contentBox}>
                <Image source={details.image} style={styles.image} />
                <Text style={styles.description}>{details.description}</Text>
                <Text style={styles.subtitle}>Principais Pontos Turísticos:</Text>
                {details.attractions.map((attraction, index) => (
                    <Text key={index} style={styles.attraction}>* {attraction}</Text>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentBox: {
        padding: 20,
        backgroundColor: "#ECF0F1",
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: 'black',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        color: 'black',
    },
    attraction: {
        fontSize: 16,
        marginLeft: 10,
        color: 'black',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});
