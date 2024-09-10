package com.microservice.tasks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.tasks.models.Board;
import com.microservice.tasks.repositories.BoardRepo;

@Service
public class BoardService {
  @Autowired
  private BoardRepo boardRepo;

  public Board add(Board board) {
    return boardRepo.save(board);
  }

  public Iterable<Board> findAll() {
    return boardRepo.findAll();
  }

  public Board findOne(Long id) {
    return boardRepo.findById(id).orElse(null);
  }
}
