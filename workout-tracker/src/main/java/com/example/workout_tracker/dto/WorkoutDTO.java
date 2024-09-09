package com.example.workout_tracker.dto;

import java.util.ArrayList;

import com.example.workout_tracker.model.Exercise;
import com.example.workout_tracker.model.User;

public class WorkoutDTO {
    private Long id;
    private User user;
    private String name;
    private ArrayList<Exercise> exercises;

    public WorkoutDTO() {}

    public WorkoutDTO(Long id, User user, String name, 
    ArrayList<Exercise> exercises) {
        this.id = id;
        this.user = user;
        this.name = name;
        this.exercises = exercises;
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

    public ArrayList<Exercise> getExercises() {
        return this.exercises;
    }

    public void setExercises(ArrayList<Exercise> exercises) {
        this.exercises = exercises;
    }
}
