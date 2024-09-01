import { TExercise } from "@/types/TExercise";
import 'react-native-get-random-values';
import { v4 } from 'uuid';

export class Workout {
    private id: string;
    private name: string;
    private exercises: TExercise[];
    private completedAt: Date;

    constructor(name: string, exercises: TExercise[]) {
        this.id = v4();
        this.name = name;
        this.exercises = exercises;
        this.completedAt = new Date();
    }
}