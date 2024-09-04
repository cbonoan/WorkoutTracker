package com.example.workout_tracker.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.workout_tracker.dto.UserDTO;
import com.example.workout_tracker.model.User;
import com.example.workout_tracker.model.Workout;
import com.example.workout_tracker.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserDTO createUser(String name, String email, String password) {
        ArrayList<Workout> workouts = new ArrayList<>();
        User user = new User(name, email, password, workouts);

        User savedUser = userRepository.save(user);
        return new UserDTO(savedUser.getId(), savedUser.getName(), savedUser.getEmail(),
        savedUser.getPassword(), savedUser.getWorkouts());
    }

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
        .map(user -> new UserDTO(user.getId(), user.getName(), user.getEmail(), 
            user.getPassword(), user.getWorkouts()))
        .collect(Collectors.toList());
    }

    // public List<UserDTO> getAllUsers() {
    //     return userRepository.findAll().stream()
    //         .map(user -> new UserDTO(user.getId(), user.getName(), user.getEmail()))
    //         .collect(Collectors.toList());
    // }
}
