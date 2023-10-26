package com.microservice.tasks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @PostMapping()
    @ResponseStatus
    public ResponseEntity<Workspace> add(@RequestBody Workspace ws) {
        return ResponseEntity.ok(wsService.add(ws));
    }

    @PutMapping("/{wsId}/add-member")
    @ResponseStatus
    public ResponseEntity<Workspace> addMember(@PathVariable Long wsId, @RequestParam("user") Long userId) {
        return ResponseEntity.ok(wsService.addMember(wsId, userId));
    }
}
