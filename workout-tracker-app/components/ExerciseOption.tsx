import { TExerciseDataset } from "@/types/TExercise";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Text } from "./Text";

interface IExerciseOption {
    option: TExerciseDataset;
    handleAddExercise: (name: string, id: string) => void;
    handleCloseModal: () => void;
}

const ExerciseOption = ({
    option,
    handleAddExercise,
    handleCloseModal,
}: IExerciseOption) => {

    return (
        <View style={exerciseOptionStyles.view}>
            <TouchableHighlight 
                underlayColor='#486966'
                style={exerciseOptionStyles.touchableHighlight}
                onPress={() => {
                    handleAddExercise(option.name, option.id);
                    handleCloseModal();
                }}
            >
                <Text type="subtitle">{option.name}</Text>
            </TouchableHighlight>
        </View>
    );
}

const exerciseOptionStyles = StyleSheet.create({
    view: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#B2BEBF',
    },
    touchableHighlight: {
        padding: 15,
    }
})

export default ExerciseOption;