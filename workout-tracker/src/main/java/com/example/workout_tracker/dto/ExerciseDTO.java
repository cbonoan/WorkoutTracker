package com.example.workout_tracker.dto;

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
