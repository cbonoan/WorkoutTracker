package com.example.workout_tracker.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.workout_tracker.dto.LoginInformationDTO;
import com.example.workout_tracker.dto.UserDTO;
import com.example.workout_tracker.model.User;
import com.example.workout_tracker.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
    Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/sign-up")
    public ResponseEntity<UserDTO> createUser(@RequestBody User user) {
        UserDTO createdUser;
        try {
            createdUser = userService.createUser(user.getName(), user.getEmail(), user.getPassword());
            return ResponseEntity.ok(createdUser);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
        
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody LoginInformationDTO loginInformation) {
        UserDTO user;

        try {
            user = userService.getUserByEmailAndPassword(loginInformation.getEmail(), loginInformation.getPassword());
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(e.getMessage());
        }

    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

}
