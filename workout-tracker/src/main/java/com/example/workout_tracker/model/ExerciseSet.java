package com.example.workout_tracker.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "exercise_set")
public class ExerciseSet {
    @Id
    @Column(name = "exercise_set_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false, name = "exercise_id")
    private Exercise exercise;

    @ManyToOne
    @JoinColumn(nullable = false, name = "workout_id")
    private Workout workout;

    @Column(nullable = false, name = "set_number")
    private Integer setNumber;

    private Integer weight;

    private Integer reps;

    public ExerciseSet() {}

    public ExerciseSet(Exercise exercise, Workout workout,
    Integer setNumber, Integer weight, Integer reps) {
        this.exercise = exercise;
        this.workout = workout;
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

    public void setWorkoutExerciseId(Exercise exercise) {
        this.exercise = exercise;
    }

    public Workout geWorkout() {
        return this.workout;
    }

    public void setWorkout(Workout workout) {
        this.workout = workout;
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
