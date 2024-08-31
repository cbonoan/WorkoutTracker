import { Exercise as ExerciseModel } from "@/models/Exercise";
import { TExercise } from "@/types/TExercise";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
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
        setCurrentSets([
            ...exercise.getSets(),
        ]);
    }

    const handleRemoveSet = (setNumber: number) => {
        exercise.removeSet(setNumber);
        setCurrentSets([
            ...exercise.getSets(),
        ]);
    }

    const handleEditWeight = (setNumber: number, weight: number) => {
        exercise.setWeight(setNumber, weight);
    }

    const handleEditReps = (setNumber: number, reps: number) => {
        exercise.setReps(setNumber, reps);
    }

    return (
        <View style={exerciseStyles.view}>
            <TextInput type="subtitle">{name}</TextInput>
            {sets.length > 0 && (
                <View style={exerciseStyles.setsHeader}>
                    <Text style={exerciseStyles.column} type="defaultSemiBold">Set</Text>
                    <Text style={exerciseStyles.column} type="defaultSemiBold">Weight</Text>
                    <Text style={exerciseStyles.column} type="defaultSemiBold">Reps</Text>
                    <Text style={exerciseStyles.column} type="defaultSemiBold">Remove</Text>
                </View>
            )}
            <FlatList 
                data={currentSets}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item: set, index}) => (
                    <Set
                        key={set.id}
                        setNumber={index+1}
                        weight={set.weight}
                        reps={set.reps}
                        handleRemoveSet={handleRemoveSet}
                        handleEditWeight={handleEditWeight}
                        handleEditReps={handleEditReps}
                        isRemoveDisabled={sets.length == 1}
                    />
                )}
            />

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
        padding: 10,
        marginVertical: 10,
    },
    column: {
        width: '25%',
        textAlign: 'center'
    },
    setsHeader: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default Exercise;