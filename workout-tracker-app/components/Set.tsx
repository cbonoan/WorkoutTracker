import { TSet } from "@/types/TSet";
import { StyleSheet, View } from "react-native";
import { Text } from "./Text";
import TextInput from "./TextInput";

const Set = ({
    setNumber,
    weight,
    reps,
}: TSet) => {
    return (
        <View style={setStyles.set}>
            <Text>{setNumber}</Text>
            <TextInput styles={setStyles.textInput} placeholder="0" keyboardType="number-pad"/>
            <TextInput styles={setStyles.textInput} placeholder="0" keyboardType="number-pad"/>
        </View>
    );
}

const setStyles = StyleSheet.create({
    set: {
        marginBottom: 15,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        width: 40,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#B2BEBF',
        textDecorationLine: 'none',
    }
})

export default Set;