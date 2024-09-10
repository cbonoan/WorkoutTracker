package com.example.workout_tracker.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "exercise")
public class Exercise {
    @Id
    @Column(name = "exercise_id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "exercise_name")
    private String name;

    @Column(nullable = false, name = "body_part")
    private String bodyPart;

    @ManyToMany(mappedBy = "exercises")
    private List<Workout> workouts = new ArrayList<>();

    @OneToMany(mappedBy = "exercise")
    private List<ExerciseSet> sets = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Exercise() {}

    public Exercise (User user, String name, 
    String bodyPart) {
        this.user = user;
        this.name = name;
        this.bodyPart = bodyPart;
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

    public String getBodypart() {
        return this.bodyPart;
    }

    public void setBodypart(String bodyPart) {
        this.bodyPart = bodyPart;
    }

    public List<Workout> getWorkouts()  {
        return this.workouts;
    }

    public void setWorkouts(List<Workout> workouts) {
        this.workouts = workouts;
    }

    public List<ExerciseSet> getExerciseSets() {
        return this.sets;
    }

    public void setExerciseSets(List<ExerciseSet> exerciseSets) {
        this.sets = exerciseSets;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
