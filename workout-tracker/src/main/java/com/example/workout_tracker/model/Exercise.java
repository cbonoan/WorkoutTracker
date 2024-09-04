package com.example.workout_tracker.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    public Exercise() {}

    public Exercise (String name, String bodyPart) {
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
