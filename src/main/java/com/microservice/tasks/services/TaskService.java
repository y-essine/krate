package com.microservice.tasks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.tasks.models.Task;
import com.microservice.tasks.models.User;
import com.microservice.tasks.models.Workspace;
import com.microservice.tasks.repositories.TaskRepo;
import com.microservice.tasks.repositories.UserRepo;
import com.microservice.tasks.repositories.WsRepo;

@Service
public class TaskService {
    @Autowired
    private TaskRepo taskRepo;
    @Autowired
    private WsRepo wsRepo;
    @Autowired
    private UserRepo userRepo;

    public Iterable<Task> getAll() {
        return taskRepo.findAll();
    }

    public Task add(Task task) {
        Workspace ws = wsRepo.findById(task.getWorkspaceId()).orElseThrow(() -> new RuntimeException("Workspace not found"));
        task.setWorkspace(ws);
        return taskRepo.save(task);
    }

    public Task addAssignee(Long taskId, Long userId) {
        Task task = taskRepo.findById(taskId).orElseThrow(() -> new RuntimeException("Task not found"));
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        if (task.getAssignees().contains(user)) {
            throw new RuntimeException("User already assigned to this task");
        }
        task.getAssignees().add(user);
        return taskRepo.save(task);
    }

    public Task removeAssignee(Long taskId, Long userId) {
        Task task = taskRepo.findById(taskId).orElseThrow(() -> new RuntimeException("Task not found"));
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        if (!task.getAssignees().contains(user)) {
            throw new RuntimeException("User not assigned to this task");
        }
        task.getAssignees().remove(user);
        return taskRepo.save(task);
    }

    public Task delete(Long id) {
        Task task = taskRepo.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        taskRepo.delete(task);
        return task;
    }
}
