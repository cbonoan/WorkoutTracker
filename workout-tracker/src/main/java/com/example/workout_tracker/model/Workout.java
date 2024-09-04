package com.example.workout_tracker.model;

import java.util.ArrayList;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "workout")
public class Workout {
    @Id
    @Column(name = "workout_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
 
    @ManyToOne
    @JoinColumn(nullable = false, name = "user_id")
    private User user;

    @Column(nullable = false, name = "workout_name")
    private String name;

    @ManyToMany
    @JoinTable(name = "workout_exercises",
        joinColumns = @JoinColumn(name = "workout_id"),
        inverseJoinColumns = @JoinColumn(name = "workout_exercise_id")
    )
    private ArrayList<WorkoutExercise> workoutExercises; 

    @Temporal(TemporalType.DATE)
    @Column(nullable = false, name = "completed_at")
    private Date completedAt;

    public Workout() {}

    public Workout(User user, String name, ArrayList<WorkoutExercise> workoutExercises) {
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
