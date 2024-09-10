package com.microservice.tasks.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservice.tasks.models.BoardList;
import com.microservice.tasks.services.BoardListService;

@RestController
@RequestMapping("/boardlists")
public class BoardListController {
  @Autowired
  private BoardListService boardListService;

  @PostMapping
  public ResponseEntity<?> add(@Valid @RequestBody BoardList boardList) {
    return ResponseEntity.ok(boardListService.add(boardList));
  }

  @GetMapping("/all")
  public ResponseEntity<?> findAll() {
    return ResponseEntity.ok(boardListService.findAll());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    return ResponseEntity.ok(boardListService.deleteById(id));
  }
}
