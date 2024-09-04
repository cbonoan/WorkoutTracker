package com.example.workout_tracker.model;

import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "workout_exercise")
public class WorkoutExercise {
    @Id
    @Column(name = "workout_exercise_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(nullable = false, name = "exercise_id")
    private Exercise exercise;

    @ManyToMany
    @JoinTable(name = "workout_exercises",
        joinColumns = @JoinColumn(name = "workout_exercise_id"),
        inverseJoinColumns = @JoinColumn(name = "workout_id")
    )
    private ArrayList<Workout> workouts;

    public WorkoutExercise() {}

    public WorkoutExercise(Exercise exercise, ArrayList<Workout> workouts) {
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
