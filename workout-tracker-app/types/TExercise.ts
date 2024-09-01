import { TSet } from "./TSet";

export type TExercise = {
    id: string,
    name: string,
    sets: TSet[],
}

export type TExerciseDataset = Omit<TExercise, 'sets'>;