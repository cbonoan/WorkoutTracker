import { TSet } from "@/types/TSet";
import 'react-native-get-random-values';
import { v4 } from 'uuid';


export class Exercise {
    private id: string;
    private name: string;
    private sets: TSet[];

    constructor();
    constructor(name: string, id: string);
    constructor(name?: string, id?: string) {
        this.id = id ?? v4();
        this.name = name ?? 'New Exercise';
        this.sets = [
            {
                id: v4(),
                setNumber: 1,
                weight: undefined,
                reps: undefined,
            }
        ]
    }

    public addSet() {
        this.sets.push({
            id: v4(),
            setNumber: this.sets.length + 1,
            weight: undefined,
            reps: undefined,
        });
    }

    public removeSet(setNumber: number) {
        if (this.sets.length === 1) {
            return [];
        }

        return this.sets.splice(setNumber, 1);
    }

    public setName(name: string) {
        this.name = name;
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

    public getSet(setNumber: number) {
        return this.sets[setNumber];
    }

    public getId() {
        return this.id;
    }
}