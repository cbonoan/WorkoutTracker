package com.example.workout_tracker.dto;

import java.util.List;

import com.example.workout_tracker.model.Workout;

public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String password;
    private List<Workout> workouts;

    public UserDTO() {}

    public UserDTO(Long id, String name, String email, 
    String password, List<Workout> workouts) {
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

    public List<Workout> getWorkouts() {
        return this.workouts;
    }

    public void setWorkouts(List<Workout> workouts) {
        this.workouts = workouts;
    }
}
