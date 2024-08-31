import { TSet } from "@/types/TSet";

export class Exercise {
    private name: string;
    private sets: TSet[];
    private currentSetNumber: number;

    public constructor(name: string) {
        this.name = name;
        this.currentSetNumber = 1;
        this.sets = [
            {
                setNumber: this.currentSetNumber,
                weight: undefined,
                reps: undefined,
            }
        ]
    }

    public addSet() {
        this.currentSetNumber++;
        this.sets.push({
            setNumber: this.currentSetNumber,
            weight: undefined,
            reps: undefined,
        });
    }

    public getName() {
        return this.name;
    }

    public getSets() {
        return this.sets;
    }
}