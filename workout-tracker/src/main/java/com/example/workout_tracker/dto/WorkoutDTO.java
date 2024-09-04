package com.example.workout_tracker.dto;

import java.util.ArrayList;

import com.example.workout_tracker.model.User;
import com.example.workout_tracker.model.WorkoutExercise;

public class WorkoutDTO {
    private Long id;
    private User user;
    private String name;
    private ArrayList<WorkoutExercise> workoutExercises;

    public WorkoutDTO() {}

    public WorkoutDTO(Long id, User user, String name, 
    ArrayList<WorkoutExercise> workoutExercises) {
        this.id = id;
        this.user = user;
        this.name = name;
        this.workoutExercises = workoutExercises;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<WorkoutExercise> getWorkoutExercises() {
        return this.workoutExercises;
    }

    public void setWorkoutExercises(ArrayList<WorkoutExercise> workoutExercises) {
        this.workoutExercises = workoutExercises;
    }
}
