import Button from "@/components/Button";
import NewWorkout from "@/components/NewWorkout";
import Seperator from "@/components/Seperator";
import { Text } from "@/components/Text";
import WorkoutHistory from "@/components/WorkoutHistory";
import { useSession } from "@/ctx";
import { TExerciseDataset } from "@/types/TExercise";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

const exerciseDb: TExerciseDataset[] = [
    {
        "name": "Barbell Bench Press",
        "id": "1"
    },
    {
        "name": "Barbell Bent-Over Row",
        "id": "2"
    },
    {
        "name": "Barbell Curl",
        "id": "3"
    },
    {
        "name": "Barbell Deadlift",
        "id": "4"
    },
    {
        "name": "Barbell Overhead Press",
        "id": "5"
    },
    {
        "name": "Barbell Squat",
        "id": "6"
    },
    {
        "name": "Cable Tricep Pushdown",
        "id": "7"
    },
    {
        "name": "Chest Dip",
        "id": "8"
    },
    {
        "name": "Chin-Up",
        "id": "9"
    },
    {
        "name": "Dumbbell Bench Press",
        "id": "10"
    },
    {
        "name": "Dumbbell Curl",
        "id": "11"
    },
    {
        "name": "Dumbbell Fly",
        "id": "12"
    },
    {
        "name": "Dumbbell Lateral Raise",
        "id": "13"
    },
    {
        "name": "Dumbbell Shoulder Press",
        "id": "14"
    },
    {
        "name": "Incline Barbell Bench Press",
        "id": "15"
    },
    {
        "name": "Leg Press",
        "id": "16"
    },
    {
        "name": "Pull-Up",
        "id": "17"
    },
    {
        "name": "Seated Cable Row",
        "id": "18"
    },
    {
        "name": "Standing Calf Raise",
        "id": "19"
    },
    {
        "name": "Tricep Dip",
        "id": "20"
    }
]

const Index = () => {
    const { user } = useSession();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [exerciseDataset, setExerciseDataset] = useState<TExerciseDataset[]>([]);
    
    const handleCloseModal = () => {
        setIsModalVisible(false);
    }

    useEffect(() => {
        // axios.get('/get-exercise-dataset')
        //   .then((data) => setExerciseDataset(data));
        setExerciseDataset(exerciseDb);
    }, []);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled={false} style={styles.view}>
        <Text type="title">Ready to work, {user?.name.split(' ')[0]}?</Text>
        <Seperator />
        <Button 
            title="Start a new workout"
            onPress={() => setIsModalVisible(true)}
        />
        <NewWorkout 
            isModalVisible={isModalVisible}
            handleCloseModal={handleCloseModal}
            exerciseDataset={exerciseDataset}
        />

        <WorkoutHistory />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 50,
    paddingTop: 75,
    backgroundColor: '#3B3936',
  }
})

export default Index;