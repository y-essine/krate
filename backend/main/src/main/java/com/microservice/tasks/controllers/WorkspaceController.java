package com.microservice.tasks.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.tasks.models.Workspace;
import com.microservice.tasks.services.WsService;

import lombok.Data;

@RestController
@RequestMapping("/ws")
public class WorkspaceController {
    @Autowired
    private WsService wsService;

    @GetMapping("/all")
    @ResponseStatus
    public ResponseEntity<Iterable<Workspace>> all() {
        return ResponseEntity.ok(wsService.getAll());
    }

    @GetMapping("/id/{id}")
    @ResponseStatus
    public ResponseEntity<Workspace> getById(@PathVariable Long id) {
        return ResponseEntity.ok(wsService.getById(id));
    }

    @PostMapping()
    @ResponseStatus
    public ResponseEntity<Workspace> add(@Valid @RequestBody Workspace ws) {
        return ResponseEntity.ok(wsService.add(ws));
    }

    @PutMapping("/{id}/members/{user}")
    @ResponseStatus
    public ResponseEntity<Workspace> addMember(@PathVariable Long id, @PathVariable Long user) {
        return ResponseEntity.ok(wsService.addMember(id, user));
    }

    @DeleteMapping("/{id}/members/{user}")
    @ResponseStatus
    public ResponseEntity<Workspace> removeMember(@PathVariable Long id, @PathVariable Long user) {
        return ResponseEntity.ok(wsService.removeMember(id, user));
    }

}
