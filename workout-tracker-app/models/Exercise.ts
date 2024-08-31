import { TSet } from "@/types/TSet";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export class Exercise {
    private id: string;
    private name: string;
    private sets: TSet[];

    public constructor(name: string) {
        this.id = uuidv4();
        this.name = name;
        this.sets = [
            {
                id: uuidv4(),
                setNumber: 1,
                weight: undefined,
                reps: undefined,
            }
        ]
    }

    public addSet() {
        this.sets.push({
            id: uuidv4(),
            setNumber: this.sets.length + 1,
            weight: undefined,
            reps: undefined,
        });
    }

    public removeSet(setNumber: number) {
        this.sets.splice(setNumber, 1);
    }

    public setWeight(setNumber: number, weight: number) {
        this.sets[setNumber].weight = weight;
    }

    public setReps(setNumber: number, reps: number) {
        this.sets[setNumber].reps = reps;
    }

    public getName() {
        return this.name;
    }

    public getSets() {
        return this.sets;
    }
}