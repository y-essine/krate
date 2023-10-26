package com.microservice.tasks.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Entity
@Data
@Table(name = "workspaces")
public class Workspace {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;
    
    private String description;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Transient
    private Long ownerId;
    
    @JsonIgnoreProperties({"workspaces","ownedWorkspaces", "enabled", "roles"})
    @ManyToOne(fetch = FetchType.EAGER)
    private User owner;

    @JsonIgnoreProperties({"workspaces","ownedWorkspaces", "enabled", "roles"})
    @ManyToMany(fetch = FetchType.EAGER)
    private List<User> members = new ArrayList<User>();

    @OneToMany(mappedBy = "workspace")
    private List<Task> tasks = new ArrayList<Task>();
}
