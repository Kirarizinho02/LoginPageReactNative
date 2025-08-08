import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';

import google from '../assets/Google.png'
import casual_dog from '../assets/casual_dog.png'

export default function LoginPage() {
    return (
        <View style={styles.container}>
            <Image
                source={casual_dog}
                style={{ width: 300, height: 240 }}
            />

            <Text style={styles.h1}>
                Ótimo dia!
            </Text>
            <Text style={styles.h2}>
                Como deseja acessar?
            </Text>

            <TouchableOpacity style={styles.botaoGoogle}>
                <Image
                    source={google}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                />
                <Text style={{ color: 'white' }}>
                    Entrar com Google
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoOutrasOpcoes}>
                <Text>Outras opções</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: "#10eb4b",
        width: '80%',
    },
    botaoOutrasOpcoes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        padding: 15,
        borderRadius: 5,
        marginTop: 20,
        width: '80%'
    },
    h1: {
        marginTop: 30,
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'LucidaSans'
    },
    h2: {
        fontSize: 14,
        marginBottom: 20
    }
});