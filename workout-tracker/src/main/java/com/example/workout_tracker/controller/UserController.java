package com.example.workout_tracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
    // @Autowired
    // private UserService userService;

    @GetMapping
    public @ResponseBody String greeting() {
		return "Hello, World";
	}

    // @PostMapping
    // public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
    //     UserDTO createdUser = userService.createUser(userDTO);
    //     return ResponseEntity.ok(createdUser);
    // }

    // @GetMapping
    // public ResponseEntity<List<UserDTO>> getAllUsers() {
    //     List<UserDTO> users = userService.getAllUsers();
    //     return ResponseEntity.ok(users);
    // }
}
