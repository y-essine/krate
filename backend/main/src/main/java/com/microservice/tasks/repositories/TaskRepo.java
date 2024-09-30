package com.microservice.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.tasks.models.Task;

public interface TaskRepo extends JpaRepository<Task, Long>{
    
}
