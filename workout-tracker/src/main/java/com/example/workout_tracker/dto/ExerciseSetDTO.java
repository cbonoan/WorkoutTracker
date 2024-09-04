package com.example.workout_tracker.dto;

import com.example.workout_tracker.model.WorkoutExercise;

public class ExerciseSetDTO {
    private Long id;
    private WorkoutExercise workoutExercise;
    private Integer setNumber;
    private Integer weight;
    private Integer reps;

    public ExerciseSetDTO() {}

    public ExerciseSetDTO(Long id, WorkoutExercise workoutExercise, 
    Integer setNumber, Integer weight, Integer reps) {
        this.id = id;
        this.workoutExercise = workoutExercise;
        this.setNumber = setNumber;
        this.weight = weight;
        this.reps = reps;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    } 

    public WorkoutExercise getWorkoutExerciseId() {
        return this.workoutExercise;
    }

    public void setWorkoutExerciseId(WorkoutExercise workoutExercise) {
        this.workoutExercise = workoutExercise;
    }

    public Integer getSetNumber() {
        return this.setNumber;
    }

    public void setSetNumber(Integer setNumber) {
        this.setNumber = setNumber;
    }

    public Integer getWeight() {
        return this.weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getReps() {
        return this.reps;
    }

    public void setReps(Integer reps) {
        this.reps = reps;
    }
}
