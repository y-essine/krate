package com.microservice.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.tasks.models.Workspace;

public interface WsRepo extends JpaRepository<Workspace, Long> {
    
}
