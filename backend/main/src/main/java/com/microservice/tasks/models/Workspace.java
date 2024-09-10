package com.microservice.tasks.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
@Table(name = "workspaces")
public class Workspace {
  @Id
  @GeneratedValue
  private Long id;

  @Column(nullable = false)
  @Length(min = 3, max = 40, message = "Workspace name must be between 3 and 40 characters")
  private String name;

  private String description;

  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  @Column(nullable = false)
  private Long ownerId;

  @JsonIgnoreProperties({ "workspaces", "ownedWorkspaces", "enabled", "roles", "createdAt", "updatedAt" })
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "ownerId", nullable = false, insertable = false, updatable = false)
  private User owner;

  @JsonIgnoreProperties({ "workspaces", "ownedWorkspaces", "enabled", "roles", "createdAt", "updatedAt" })
  @ManyToMany(fetch = FetchType.EAGER)
  private List<User> members = new ArrayList<User>();

  @JsonIgnoreProperties({ "lists", "workspace" })
  @OneToMany(mappedBy = "workspace")
  private List<Board> boards = new ArrayList<Board>();

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
