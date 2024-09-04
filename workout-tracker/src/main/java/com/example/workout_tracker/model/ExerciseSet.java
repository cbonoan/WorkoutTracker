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
    @Column(name = "exercise_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false, name = "workout_exercise_id")
    private WorkoutExercise workoutExercise;

    @Column(nullable = false, name = "set_number")
    private Integer setNumber;

    private Integer weight;

    private Integer reps;

    public ExerciseSet() {}

    public ExerciseSet(WorkoutExercise workoutExercise, 
    Integer setNumber, Integer weight, Integer reps) {
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
