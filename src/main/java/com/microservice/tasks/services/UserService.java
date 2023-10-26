package com.microservice.tasks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.tasks.models.User;
import com.microservice.tasks.repositories.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public Iterable<User> getAll() {
        return userRepo.findAll();
    }

    public User getByUsername(String username) {
        return userRepo.findByUsername(username);
    }
}
