import { modalStyles } from "@/styles/modal";
import { TExerciseDataset } from "@/types/TExercise";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FlatList, Modal, Pressable, StyleSheet, View } from "react-native";
import ExerciseOption from "./ExerciseOption";
interface IAddExercise {
    exerciseDataset: TExerciseDataset[];
    isOpen: boolean;
    handleCloseModal: () => void;
    handleAddExercise: (name: string, id: string) => void;
}

const AddExercise = ({
    exerciseDataset,
    isOpen,
    handleCloseModal,
    handleAddExercise,
}: IAddExercise) => {
    return (
        <Modal
            visible={isOpen}
            transparent={true}
            animationType="fade"
        >
            <View 
                style={[modalStyles.view, addExerciseModalStyles.view]}
            >
                <Pressable style={{ marginBottom: 20, paddingLeft: 20, }} onPress={handleCloseModal}>
                    <FontAwesome name="window-close" size={24} color="#B2BEBF" />
                </Pressable>
                
                <FlatList 
                    data={exerciseDataset}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => (
                        <ExerciseOption
                            key={item.id}
                            option={item}
                            handleAddExercise={handleAddExercise}
                            handleCloseModal={handleCloseModal}
                        />
                    )}
                />
            </View>
        </Modal>
    );
}

const addExerciseModalStyles = StyleSheet.create({
    view: {
        paddingTop: 30,
        paddingHorizontal: 0,
        margin: 30,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    }
})

export default AddExercise;