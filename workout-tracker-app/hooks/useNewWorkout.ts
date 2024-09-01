import { Exercise } from "@/models/Exercise";
import { useState } from "react";

export const useNewWorkout = (
    handleCloseModal: () => void,
) => {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] = useState(false);
    const [workoutName, setWorkoutName] = useState('New Workout');

    const handleChangeWorkoutName = (name: string) => {
        setWorkoutName(name);
    }

    const handleOpenAddExerciseModal = () => {
        setIsAddExerciseModalOpen(true);
    }

    const handleAddExercise = () => {
        setExercises(prev => [
            ...prev,
            new Exercise()
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
        handleCloseModal();
    }

    return {
        exercises,
        isAddExerciseModalOpen,
        workoutName,
        handleChangeWorkoutName,
        handleOpenAddExerciseModal,
        handleAddExercise,
        handleRemoveExercise,
        handleCancelWorkout,
    }
}