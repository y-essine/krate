package com.microservice.tasks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservice.tasks.models.Board;
import com.microservice.tasks.models.BoardList;
import com.microservice.tasks.repositories.BoardListRepo;
import com.microservice.tasks.repositories.BoardRepo;

@Service
public class BoardListService {
  @Autowired
  private BoardListRepo boardListRepo;
  @Autowired
  private BoardRepo boardRepo;

  public BoardList add(BoardList boardList) {
    Board board = boardRepo.findById(boardList.getBoardId()).orElseThrow(() -> new RuntimeException("Board not found"));
    Long wsId = board.getWorkspaceId();
    if (wsId == null) {
      throw new RuntimeException("Board not found in workspace");
    }
    boardList.setWorkspaceId(wsId);
    boardList.setBoard(board);
    return boardListRepo.save(boardList);
  }

  public Iterable<BoardList> findAll() {
    return boardListRepo.findAll();
  }

  public BoardList deleteById(Long id) {
    BoardList boardList = boardListRepo.findById(id).orElseThrow(() -> new RuntimeException("BoardList not found"));
    boardListRepo.deleteById(id);
    return boardList;
  }

}
