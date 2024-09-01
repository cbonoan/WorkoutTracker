import { useModal } from "@/hooks/useModal";
import { useNewWorkout } from "@/hooks/useNewWorkout";
import { TExerciseDataset } from "@/types/TExercise";
import { Modal, StyleSheet, View } from "react-native";
import { KeyboardAwareFlatList } from "react-native-keyboard-aware-scroll-view";
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
        workoutName,
        handleChangeWorkoutName,
        handleAddExercise,
        handleRemoveExercise,
        handleCancelWorkout,
    } = useNewWorkout();

    const {
        isOpen: isAddExerciseModalOpen,
        handleOpenModal: handleOpenAddExerciseModal,
        handleCloseModal: handleCloseAddExerciseModal,
    } = useModal();

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
                    <Button 
                        title="Finish"
                        disabled={exercises.length == 0} 
                    />
                </View>
                {exercises.length == 0 && <Text type="subtitle">Let's get to work!</Text>}
                <KeyboardAwareFlatList 
                    data={exercises}
                    keyExtractor={(item, index) => `${item.getId() + index}`}
                    renderItem={({item: exercise, index}) => (
                        <Exercise
                            key={exercise.getId() + index}
                            id={exercise.getId()}
                            exercise={exercise}
                            name={exercise.getName()}
                            sets={exercise.getSets()}
                            handleRemoveExercise={handleRemoveExercise}
                        />
                )}
                />

                <Button title="Add exercise" onPress={handleOpenAddExerciseModal}/>
                <Seperator />
                <Button color={'#BD2A2E'} title="Cancel workout" onPress={() => {
                    handleCancelWorkout();
                    handleCloseModal();
                }}/>
            </View>

            <AddExercise 
                exerciseDataset={exerciseDataset}
                isOpen={isAddExerciseModalOpen}
                handleAddExercise={handleAddExercise}
                handleCloseModal={handleCloseAddExerciseModal}
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
  })

export default NewWorkout;