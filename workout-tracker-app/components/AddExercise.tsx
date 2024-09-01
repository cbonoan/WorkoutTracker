import { modalStyles } from "@/styles/modal";
import { TExerciseDataset } from "@/types/TExercise";
import { Modal, View } from "react-native";
import { Text } from "./Text";

interface IAddExercise {
    exerciseDataset: TExerciseDataset[];
    isOpen: boolean;
}

const AddExercise = ({
    exerciseDataset,
    isOpen
}: IAddExercise) => {
    console.log(exerciseDataset);
    return (
        <Modal
            visible={isOpen}
        >
            <View style={modalStyles.view}>
                <Text>Hello world</Text>
            </View>
        </Modal>
    );
}

export default AddExercise;