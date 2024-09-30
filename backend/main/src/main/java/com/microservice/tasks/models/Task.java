package com.microservice.tasks.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.microservice.tasks.models.enums.TaskStatus;

import lombok.Data;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
@Table(name = "tasks")
public class Task {
  @Id
  @GeneratedValue
  private Long id;

  @Column(nullable = false)
  @Length(min = 3, max = 40, message = "Task name must be between 3 and 40 characters")
  private String name;

  private String description;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private TaskStatus status;

  @Column(nullable = false)
  private long boardId;

  @Column(nullable = false)
  private Long boardListId;

  @JsonIgnore
  @ManyToOne()
  @JoinColumn(name = "boardListId", insertable = false, updatable = false)
  private BoardList boardList;

  @JsonIgnoreProperties({ "workspaces", "ownedWorkspaces", "enabled", "roles", "createdAt", "updatedAt" })
  @JsonProperty(access = JsonProperty.Access.READ_ONLY)
  @ManyToMany(fetch = FetchType.LAZY)
  private List<User> assignees = new ArrayList<User>();

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
