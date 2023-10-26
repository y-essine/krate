package com.microservice.tasks.models;

import java.util.List;
import java.util.ArrayList;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "boards")
public class Board {
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false)
    private String name;
    private String description;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    public List<Task> tasks = new ArrayList<Task>();

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Transient
    private Long workspaceId;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    public Workspace workspace;

    public Board(String name, String description, Long workspaceId) {
        this.name = name;
        this.description = description;
        this.workspaceId = workspaceId;
    }
}
