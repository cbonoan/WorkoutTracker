import { TSet } from '@/types/TSet';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "./Text";
import TextInput from "./TextInput";

interface ISet extends Omit<TSet, 'id'> {
    handleRemoveSet: (setNumber: number) => void;
    handleEditWeight: (setNumber: number, weight: number) => void;
    handleEditReps: (setNumber: number, reps: number) => void;
    isRemoveDisabled: boolean;
}

const Set = ({
    setNumber,
    weight,
    reps,
    handleRemoveSet,
    handleEditWeight,
    handleEditReps,
    isRemoveDisabled,
}: ISet) => {
    return (
        <View style={setStyles.set}>
            <Text style={{ width: '25%', textAlign: 'center'}}>{setNumber}</Text>
            <TextInput
                onChangeText={(input) => handleEditWeight(setNumber-1, Number(input))}
                styles={[setStyles.textInput]} 
                placeholder="0" 
                keyboardType="number-pad"
            />
            <TextInput
                onChangeText={(input) => handleEditReps(setNumber-1, Number(input))}
                styles={[setStyles.textInput]} 
                placeholder="0" 
                keyboardType="number-pad"
            />
            <Pressable
                style={{ width: '25%', alignItems: 'center'}}
                disabled={isRemoveDisabled}
                onPress={() => handleRemoveSet(setNumber-1)}
            >
                <FontAwesome name="remove" size={24} 
                    color={isRemoveDisabled ? "#878787" : "#BD2A2E"}
                />
            </Pressable>
        </View>
    );
}

const setStyles = StyleSheet.create({
    set: {
        flex: 1,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        textAlign: 'center',
        width: '20%',
        borderRadius: 5,
        backgroundColor: '#B2BEBF',
        textDecorationLine: 'none',
    }
})

export default Set;