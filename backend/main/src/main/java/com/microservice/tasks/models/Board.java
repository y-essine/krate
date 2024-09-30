package com.microservice.tasks.models;

import java.util.List;
import java.time.LocalDateTime;
import java.util.ArrayList;

import javax.persistence.*;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
@NoArgsConstructor
@Table(name = "boards")
public class Board {
  @Id
  @GeneratedValue
  private Long id;
  @Column(nullable = false)
  @Length(min = 3, max = 40, message = "Board name must be between 3 and 40 characters")
  private String name;
  private String description;

  @Column(nullable = false)
  private Long workspaceId;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "workspaceId", nullable = false, insertable = false, updatable = false)
  public Workspace workspace;

  @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
  public List<BoardList> lists = new ArrayList<BoardList>();

  public Board(String name, String description, Long workspaceId) {
    this.name = name;
    this.description = description;
    this.workspaceId = workspaceId;
  }

  @CreatedDate
  private LocalDateTime createdAt;

  @LastModifiedDate
  private LocalDateTime updatedAt;

  @PrePersist
  public void prePersist() {
    createdAt = LocalDateTime.now();
    updatedAt = LocalDateTime.now();
  }

  @PreUpdate
  public void preUpdate() {
    updatedAt = LocalDateTime.now();
  }
}
