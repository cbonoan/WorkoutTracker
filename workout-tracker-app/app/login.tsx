import Pressable from "@/components/Pressable";
import { Text } from "@/components/Text";
import TextInput from "@/components/TextInput";
import { useSession } from "@/ctx";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const Login = () => {
    const { signIn, isLoading, errorMsg } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (email: string) => {
        setEmail(email);
    }

    const handleChangePassword = (password: string) => {
        setPassword(password);
    }

    return (
        <View style={styles.view}>
            <View style={styles.textInputView}>
                <TextInput  
                    onChangeText={text => handleChangeEmail(text)} 
                    styles={styles.textInput} 
                    type="subtitle" 
                    placeholder="Email"
                />
                <TextInput 
                    onChangeText={text => handleChangePassword(text)} 
                    styles={styles.textInput} 
                    secureTextEntry 
                    type="subtitle" 
                    placeholder="Password"
                />
            </View>
            <Pressable 
                disabled={isLoading}
                onPress={() => {
                    signIn(email, password);
                }}
            >
                <Text type="subtitle">Login</Text>
            </Pressable>
            {!!errorMsg && (
                <View style={{ marginTop: 20 }}>
                    <Text 
                        type="defaultSemiBold" 
                        style={{ color: 'red' }}
                    >
                        {errorMsg}
                    </Text>
                </View>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#3B3936',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputView:  {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    textInput: {
        color: 'black',
        textDecorationLine: 'none',
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
    }
})

export default Login;