package com.microservice.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.microservice.tasks.models.BoardList;

public interface BoardListRepo extends JpaRepository<BoardList, Long> {
}
