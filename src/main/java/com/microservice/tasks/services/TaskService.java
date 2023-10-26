package com.microservice.tasks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.tasks.models.Board;
import com.microservice.tasks.models.Task;
import com.microservice.tasks.models.User;
import com.microservice.tasks.repositories.BoardRepo;
import com.microservice.tasks.repositories.TaskRepo;
import com.microservice.tasks.repositories.UserRepo;

@Service
public class TaskService {
    @Autowired
    private TaskRepo taskRepo;
    @Autowired
    private BoardRepo boardRepo;
    @Autowired
    private UserRepo userRepo;

    public Iterable<Task> getAll() {
        return taskRepo.findAll();
    }

    public Task add(Task task) {
        Board board = boardRepo.findById(task.getBoardId()).orElseThrow(() -> new RuntimeException("Board not found"));
        task.setBoard(board);
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
