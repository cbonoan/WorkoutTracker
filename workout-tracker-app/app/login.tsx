import { Text } from "@/components/Text";
import { useSession } from "@/ctx";
import { StyleSheet, View } from "react-native";

const Login = () => {
    const { signIn } = useSession();

    return (
        <View style={styles.view}>
            <Text
                onPress={() => {
                    console.log("Signing in");
                    signIn();
                }}
            >
                Sign In
            </Text>
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
    }
})

export default Login;