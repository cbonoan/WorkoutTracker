import { Exercise } from "@/models/Exercise";
import { useState } from "react";

export const useNewWorkout = () => {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [workoutName, setWorkoutName] = useState('New Workout');

    const handleChangeWorkoutName = (name: string) => {
        setWorkoutName(name);
    }

    const handleAddExercise = (name: string, id: string) => {
        setExercises(prev => [
            ...prev,
            new Exercise(name, id)
        ]);
    }

    const handleRemoveExercise = (exerciseId: string) => {
        const currentExercies = exercises;

        let index = 0;
        for (let i = 0; i < currentExercies.length; i++) {
            const exercise = currentExercies[i];
            if (exercise.getId() === exerciseId) {
                index = i;
                break;
            }
        }

        currentExercies.splice(index, 1);
        setExercises([ ...currentExercies ]);
    }

    const handleCancelWorkout = () => {
        setWorkoutName('New Workout');
        setExercises([]);
    }

    return {
        exercises,
        workoutName,
        handleChangeWorkoutName,
        handleAddExercise,
        handleRemoveExercise,
        handleCancelWorkout,
    }
}