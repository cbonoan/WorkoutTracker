import { Exercise as ExerciseModel } from "@/models/Exercise";
import { useState } from "react";
import { FlatList, Modal, StyleSheet, View } from "react-native";
import Button from "./Button";
import Exercise from "./Exercise";
import Seperator from "./Seperator";
import { Text } from "./Text";
import TextInput from "./TextInput";

interface INewWorkout {
    isModalVisible: boolean;
    handleCloseModal: () => void;
}

const NewWorkout = ({
    isModalVisible,
    handleCloseModal,
}: INewWorkout) => {
    const [exercises, setExercises] = useState<ExerciseModel[]>([]);
    const [workoutName, setWorkoutName] = useState('New Workout');

    const handleAddExercise = () => {
        setExercises(prev => [
            ...prev, 
            new ExerciseModel(`Exercise ${prev.length + 1}`)
        ]);
    }

    const handleCancelWorkout = () => {
        setWorkoutName('New Workout');
        setExercises([]);
        handleCloseModal()
    }

    return (
        <Modal
            animationType="slide"
            visible={isModalVisible}
            transparent={true}
        >
            <View style={styles.modalView}>
                <TextInput 
                    type="title" 
                    onChangeText={(name) => setWorkoutName(name)}
                >
                    {workoutName}
                </TextInput>
                {exercises.length == 0 && <Text type="subtitle">Let's get to work!</Text>}
                <FlatList 
                    data={exercises}
                    keyExtractor={(item) => `${item.getId()}`}
                    renderItem={({item: exercise}) => (
                        <Exercise
                            key={exercise.getId()}
                            exercise={exercise}
                            name={exercise.getName()}
                            sets={exercise.getSets()}
                        />
                   )}
                />

                <View style={styles.buttonGroup}>
                    <Button title="Add exercise" onPress={handleAddExercise}/>
                    <Seperator />
                    <Button color={'#BD2A2E'} title="Cancel workout" onPress={handleCancelWorkout}/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
      flex: 1,
      padding: 20,
      paddingTop: 50,
      backgroundColor: '#3B3936',
    },
    buttonGroup: {
        marginVertical: 20,
    }
  })

export default NewWorkout;