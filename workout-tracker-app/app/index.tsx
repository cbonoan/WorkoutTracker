import Button from "@/components/Button";
import NewWorkout from "@/components/NewWorkout";
import Seperator from "@/components/Seperator";
import { Text } from "@/components/Text";
import WorkoutHistory from "@/components/WorkoutHistory";
import { TExerciseDataset } from "@/types/TExercise";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

const exerciseDb: TExerciseDataset[] = [
  {
    name: 'Barbell Bench',
    id: '1',
  },
  {
    name: 'Barbell Back Squat',
    id: '2',
  },
  {
    name: 'Lat Pulldown',
    id: '3',
  },
  {
    name: 'Dumbbell Curls',
    id: '4',
  },
  {
    name: 'Dumbbell Overhead Shoulder Press',
    id: '5',
  },
]

export default function Index() {
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
    <View style={styles.view}>
      <Text type="title">Workout Tracker</Text>
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
    </View>
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
