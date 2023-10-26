package com.microservice.tasks.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.microservice.tasks.models.enums.TaskStatus;

import lombok.Data;

@Entity
@Data
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String text;
    
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Transient
    public Long workspaceId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    private Workspace workspace;

    @JsonIgnoreProperties({"workspaces","ownedWorkspaces","enabled","roles"})
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @ManyToMany(fetch = FetchType.LAZY)
    private List<User> assignees = new ArrayList<User>();

}
