package com.example.workout_tracker.dto;

import com.example.workout_tracker.model.Exercise;

public class ExerciseDTO {
    private Long id;
    private String name;
    private String bodyPart;

    public ExerciseDTO() {}

    public ExerciseDTO(Long id, String name, String bodyPart) {
        this.id = id;
        this.name = name;
        this.bodyPart = bodyPart;
    }

    public ExerciseDTO(Exercise exercise) {
        this.id = exercise.getId();
        this.name = exercise.getName();
        this.bodyPart = exercise.getBodypart();
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
}
