import { StyleSheet, View } from "react-native";
import { Text } from "./Text";

const workouts = [];

const WorkoutHistory = () => {
    return (
        <View style={styles.view}>
            <Text type="subtitle">Workout History</Text>
            {workouts.length > 0 ? (
                <></>
            ) : (
                <Text>No workouts found. Start one today!</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        marginTop: 50,
    }
})

export default WorkoutHistory;