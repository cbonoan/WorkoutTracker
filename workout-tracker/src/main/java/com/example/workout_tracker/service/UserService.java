package com.example.workout_tracker.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.workout_tracker.dto.UserDTO;
import com.example.workout_tracker.model.User;
import com.example.workout_tracker.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserDTO createUser(String name, String email, String password) throws Exception {
        User user = userRepository.findUserByEmail(email);
        if (user != null) {
            throw new Exception("User already exists");
        }

        user = new User(name, email, password);

        User savedUser = userRepository.save(user);
        return new UserDTO(savedUser.getId(), savedUser.getName(), savedUser.getEmail(),
        savedUser.getPassword(), savedUser.getWorkouts());
    }

    public UserDTO getUserByEmailAndPassword(String email, String password) throws Exception {
        User user = userRepository.findUserByEmail(email);

        if (user == null) {
            throw new Exception("Email not found");
        }

        user =  userRepository.findByEmailAndPassword(email, password);

        if (user == null) {
            throw new Exception("Incorrect password");
        } 

        return new UserDTO(user.getId(), user.getName(), user.getEmail(),
        user.getPassword(), user.getWorkouts());
    }
     
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
        .map(user -> new UserDTO(user.getId(), user.getName(), user.getEmail(), 
            user.getPassword(), user.getWorkouts()))
        .collect(Collectors.toList());
    }

}
