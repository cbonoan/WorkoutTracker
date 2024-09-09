package com.example.workout_tracker.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
    @JoinTable(
        name = "workout_exercise",
        joinColumns = @JoinColumn(name = "workout_id"),
        inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )
    private List<Exercise> exercises = new ArrayList<>();

    @OneToMany(mappedBy = "workout", cascade = CascadeType.ALL)
    private List<ExerciseSet> sets = new ArrayList<>();

    @Temporal(TemporalType.DATE)
    @Column(nullable = false, name = "completed_at")
    private Date completedAt;

    public Workout() {}

    public Workout(User user, String name) {
        this.user = user;
        this.name = name;
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

    public List<Exercise> getExercises() {
        return this.exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

    public List<ExerciseSet> getExerciseSets() {
        return this.sets;
    }

    public void setExerciseSets(List<ExerciseSet> exerciseSets) {
        this.sets = exerciseSets;
    }
}
