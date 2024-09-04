package com.example.workout_tracker.dto;

import java.util.ArrayList;

import com.example.workout_tracker.model.Workout;

public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String password;
    private ArrayList<Workout> workouts;

    public UserDTO() {}

    public UserDTO(Long id, String name, String email, 
    String password, ArrayList<Workout> workouts) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.workouts = workouts;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<Workout> getWorkouts() {
        return this.workouts;
    }

    public void setWorkouts(ArrayList<Workout> workouts) {
        this.workouts = workouts;
    }
}
