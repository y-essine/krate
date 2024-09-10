package com.microservice.tasks.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "boardlists")
@Data
public class BoardList {
  @Id
  @GeneratedValue
  private Long id;
  @Column(nullable = false)
  @Size(min = 3, max = 40, message = "Name must be between 3 and 40 characters")
  private String name;
  private Long position;

  @Column(nullable = false)
  private long workspaceId;

  @Column(nullable = false)
  private Long boardId;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "boardId", insertable = false, updatable = false)
  private Board board;

  @OneToMany(mappedBy = "boardList", cascade = CascadeType.REMOVE, orphanRemoval = true)
  public List<Task> tasks = new ArrayList<Task>();

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
