package com.example.workout_tracker.dto;

import com.example.workout_tracker.model.Exercise;

public class ExerciseSetDTO {
    private Long id;
    private Exercise exercise;
    private Integer setNumber;
    private Integer weight;
    private Integer reps;

    public ExerciseSetDTO() {}

    public ExerciseSetDTO(Long id, Exercise exercise, 
    Integer setNumber, Integer weight, Integer reps) {
        this.id = id;
        this.exercise = exercise;
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

    public Exercise getExercise() {
        return this.exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
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
