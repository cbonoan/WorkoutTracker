import 'react-native-get-random-values';
import { Workout } from "./Workout";

export class User {
    private id: number;
    private email: string;
    private name: string;
    private workouts: Workout[];

    constructor(id: number, email: string, name: string, workouts: Workout[]) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.workouts = workouts;
    }
}

export type TUser = {
    id: number,
    email: string,
    name: string,
    workouts: Workout[],
}