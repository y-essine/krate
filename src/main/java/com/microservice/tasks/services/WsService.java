package com.microservice.tasks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.tasks.models.User;
import com.microservice.tasks.models.Workspace;
import com.microservice.tasks.repositories.UserRepo;
import com.microservice.tasks.repositories.WsRepo;

@Service
public class WsService {
    @Autowired
    private WsRepo wsRepo;
    @Autowired
    private UserRepo userRepo;

    public Iterable<Workspace> getAll() {
        return wsRepo.findAll();
    }

    public Workspace add(Workspace ws) {
        User owner = userRepo.findById(ws.getOwnerId()).orElseThrow(() -> new RuntimeException("User not found"));
        ws.setOwner(owner);
        return wsRepo.save(ws);
    }

    public Workspace addMember(Long wsId, Long userId) {
        Workspace ws = wsRepo.findById(wsId).orElseThrow(() -> new RuntimeException("Workspace not found"));
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        if (ws.getMembers().contains(user)) {
            throw new RuntimeException("User already in workspace");
        }
        ws.getMembers().add(user);
        return wsRepo.save(ws);
    }
}
