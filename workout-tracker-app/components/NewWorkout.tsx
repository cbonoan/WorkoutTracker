import { useNewWorkout } from "@/hooks/useNewWorkout";
import { TExerciseDataset } from "@/types/TExercise";
import { FlatList, Modal, StyleSheet, View } from "react-native";
import AddExercise from "./AddExercise";
import Button from "./Button";
import Exercise from "./Exercise";
import Seperator from "./Seperator";
import { Text } from "./Text";
import TextInput from "./TextInput";

interface INewWorkout {
    isModalVisible: boolean;
    handleCloseModal: () => void;
    exerciseDataset: TExerciseDataset[];
}

const NewWorkout = ({
    isModalVisible,
    handleCloseModal,
    exerciseDataset,
}: INewWorkout) => {
    const {
        exercises,
        isAddExerciseModalOpen,
        workoutName,
        handleChangeWorkoutName,
        handleOpenAddExerciseModal,
        handleAddExercise,
        handleRemoveExercise,
        handleCancelWorkout,
    } = useNewWorkout(handleCloseModal);

    return (
        <Modal
            animationType="slide"
            visible={isModalVisible}
            transparent={true}
        >
            <View style={styles.modalView}>
                <View style={styles.workoutHeader}>
                    <TextInput 
                        type="title" 
                        onChangeText={(name) => handleChangeWorkoutName(name)}
                    >
                        {workoutName}
                    </TextInput>
                    <Button title="Finish"/>
                </View>
                {exercises.length == 0 && <Text type="subtitle">Let's get to work!</Text>}
                <FlatList 
                    data={exercises}
                    keyExtractor={(item) => `${item.getId()}`}
                    renderItem={({item: exercise}) => (
                        <Exercise
                            key={exercise.getId()}
                            id={exercise.getId()}
                            exercise={exercise}
                            name={exercise.getName()}
                            sets={exercise.getSets()}
                            handleRemoveExercise={handleRemoveExercise}
                        />
                   )}
                />

                <View style={styles.buttonGroup}>
                    <Button title="Add exercise" onPress={handleOpenAddExerciseModal}/>
                    <Seperator />
                    <Button color={'#BD2A2E'} title="Cancel workout" onPress={handleCancelWorkout}/>
                </View>
            </View>

            <AddExercise 
                exerciseDataset={exerciseDataset}
                isOpen={isAddExerciseModalOpen}
            />
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
    workoutHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonGroup: {
        marginVertical: 20,
    }
  })

export default NewWorkout;