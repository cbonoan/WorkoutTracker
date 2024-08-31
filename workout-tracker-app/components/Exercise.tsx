import { Exercise as ExerciseModel } from "@/models/Exercise";
import { TExercise } from "@/types/TExercise";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";
import Seperator from "./Seperator";
import Set from "./Set";
import { Text } from "./Text";
import TextInput from "./TextInput";

type TExerciseProps = TExercise & {
    exercise: ExerciseModel
}

const Exercise = ({
    exercise,
    name,
    sets,
}: TExerciseProps) => {
    const [currentSets, setCurrentSets] = useState(sets);

    const handleAddSet = () => {
        exercise.addSet();
        setCurrentSets(prev => [
            ...exercise.getSets(),
        ]);
    }

    return (
        <View style={exerciseStyles.view}>
            <TextInput type="subtitle">{name}</TextInput>
            {sets.length > 0 && (
                <View style={exerciseStyles.setsHeader}>
                    <Text type="defaultSemiBold">Set</Text>
                    <Text type="defaultSemiBold">Weight</Text>
                    <Text type="defaultSemiBold">Reps</Text>
                </View>
            )}

            {sets.map((set, i) => (
                <Set
                    key={i}
                    setNumber={set.setNumber}
                    weight={set.weight}
                    reps={set.reps}
                />
            ))}
            {sets.length > 0 && (
                <>
                    <Seperator/>
                    <Button 
                        title="Add Set"
                        onPress={handleAddSet}
                        color="#889C9B" 
                    />
                </>
            )}
        </View>
    );
}

const exerciseStyles = StyleSheet.create({
    view: {
        marginVertical: 10,
    },
    setsHeader: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default Exercise;