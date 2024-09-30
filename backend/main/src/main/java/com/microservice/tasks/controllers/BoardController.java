package com.microservice.tasks.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.tasks.models.Board;
import com.microservice.tasks.services.BoardService;

@RestController
@RequestMapping("/boards")
public class BoardController {
  @Autowired
  private BoardService boardService;

  @PostMapping
  public ResponseEntity<?> add(@Valid @RequestBody Board board) {
    return ResponseEntity.ok(boardService.add(board));
  }

  @GetMapping("/all")
  public ResponseEntity<?> findAll() {
    return ResponseEntity.ok(boardService.findAll());
  }

  @GetMapping("/id/{id}")
  public ResponseEntity<?> findOne(@PathVariable Long id) {
    return ResponseEntity.ok(boardService.findOne(id));
  }
}
