package com.microservice.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.tasks.models.Board;

public interface BoardRepo extends JpaRepository<Board, Long>{
    
}
