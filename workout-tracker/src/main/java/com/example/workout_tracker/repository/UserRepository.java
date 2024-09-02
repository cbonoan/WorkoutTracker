package com.example.workout_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.workout_tracker.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {}
