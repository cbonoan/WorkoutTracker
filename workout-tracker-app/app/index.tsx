import Button from "@/components/Button";
import NewWorkout from "@/components/NewWorkout";
import Seperator from "@/components/Seperator";
import { Text } from "@/components/Text";
import WorkoutHistory from "@/components/WorkoutHistory";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  }

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
