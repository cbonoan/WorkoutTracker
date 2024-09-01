import { TExercise } from "./TExercise"

export type TWorkout = {
    id: string,
    name: string,
    exercises: TExercise[],
}