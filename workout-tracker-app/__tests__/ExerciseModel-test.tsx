import { Exercise } from "@/models/Exercise";

const exerciseName = 'Test Exercise';
const defaultExerciseName = 'New Exercise';

jest.mock('uuid', () => ({
    v4: () => '1234'
}));

it('test - creates new exercise with name', () => {
    const newExercise = new Exercise(exerciseName);

    expect(newExercise.getName()).toEqual(exerciseName);
    expect(newExercise.getId()).not.toBeNull();
    expect(newExercise.getSets()).not.toBeNull();
});

it('test - creates new exercise without name', () => {
    const newExercise = new Exercise();

    expect(newExercise.getName()).toEqual(defaultExerciseName);
    expect(newExercise.getId()).not.toBeNull();
    expect(newExercise.getSets()).not.toBeNull();
});

it('test - set new name', () => {
    const newExercise = new Exercise();
    const exerciseName = 'Test Exercise';
    newExercise.setName(exerciseName);

    expect(newExercise.getName()).toEqual(exerciseName);
})

it('test - set weight', () => {
    const newExercise = new Exercise();
    newExercise.setWeight(0, 100);

    expect(newExercise.getSet(0).weight).toEqual(100);
})

it('test - set reps', () => {
    const newExercise = new Exercise();
    newExercise.setWeight(0, 10);

    expect(newExercise.getSet(0).weight).toEqual(10);
})

it('test - add set to exercise', () => {
    const newExercise = new Exercise()
    expect(newExercise.getSets().length).toEqual(1);

    newExercise.addSet();
    expect(newExercise.getSets().length).toEqual(2);
})

it('test - remove set from exercise', () => {
    const newExercise = new Exercise();
    newExercise.addSet();

    newExercise.setWeight(0, 100);
    newExercise.setReps(0, 12);
    newExercise.setWeight(1, 125);
    newExercise.setReps(1, 10);
    /** 
     * newExercise = {
     *  id: someId
     *  name: 'New Exercise'
     *  sets: [
     *      {
     *          id: someId,
     *          setNumber: 1,
     *          weight: 100,
     *          reps: 12,
     *      },
     *      {
     *          id: someId,
     *          setNumber: 2,
     *          weight: 125,
     *          reps: 10,
     *      },
     *  ]
     * }
     */

    newExercise.removeSet(1);
    const exerciseSet = newExercise.getSet(0);

    expect(exerciseSet.weight).toEqual(100);
    expect(exerciseSet.reps).toEqual(12);
});