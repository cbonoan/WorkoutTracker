package com.example.workout_tracker.dto;

import java.util.ArrayList;

import com.example.workout_tracker.model.Exercise;
import com.example.workout_tracker.model.Workout;

public class WorkoutExerciseDTO {
    private Long id;
    private Exercise exercise;
    private ArrayList<Workout> workouts;

    public WorkoutExerciseDTO() {}

    public WorkoutExerciseDTO(Exercise exercise, ArrayList<Workout> workouts) {
        this.exercise = exercise;
        this.workouts = workouts;
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

    public ArrayList<Workout> getWorkouts() {
        return this.workouts;
    }

    public void setWorkouts(ArrayList<Workout> workouts) {
        this.workouts = workouts;
    }
}
