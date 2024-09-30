package com.microservice.tasks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.tasks.models.User;
import com.microservice.tasks.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/username/{username}")
    @ResponseStatus
    public ResponseEntity<User> get(@PathVariable String username) {
        User user = userService.getByUsername(username);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/all")
    @ResponseStatus
    public ResponseEntity<Iterable<User>> all() {
        return ResponseEntity.ok(userService.getAll());
    }
}
