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

import com.microservice.tasks.models.Task;
import com.microservice.tasks.services.TaskService;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping("/all")
    @ResponseStatus
    public ResponseEntity<Iterable<Task>> all() {
        return ResponseEntity.ok(taskService.getAll());
    }

    @PostMapping()
    @ResponseStatus
    public ResponseEntity<Task> add(@RequestBody Task task) {
        return ResponseEntity.ok(taskService.add(task));
    }
    
    @PutMapping("/{taskId}/assign")
    @ResponseStatus
    public ResponseEntity<Task> addAssignee(@PathVariable Long taskId, @RequestParam("user") Long userId) {
        return ResponseEntity.ok(taskService.addAssignee(taskId, userId));
    }
    
    @PutMapping("/{taskId}/unassign")
    @ResponseStatus
    public ResponseEntity<Task> removeAssignee(@PathVariable Long taskId, @RequestParam("user") Long userId) {
        return ResponseEntity.ok(taskService.removeAssignee(taskId, userId));
    }
}
