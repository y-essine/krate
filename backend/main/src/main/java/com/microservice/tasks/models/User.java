package com.microservice.tasks.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.*;

import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
@RequiredArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User implements UserDetails {
  @Id
  @GeneratedValue
  private Long id;

  @NonNull
  @Column(nullable = false, unique = true)
  @Length(min = 3, max = 40, message = "Username must be between 3 and 40 characters")
  private String username;

  @NonNull
  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  private String password;

  @JsonIgnoreProperties({ "owner", "members", "tasks", "boards", "createdAt", "updatedAt" })
  @OneToMany(mappedBy = "owner")
  public List<Workspace> ownedWorkspaces = new ArrayList<>();

  @JsonIgnoreProperties({ "owner", "members", "tasks", "boards", "createdAt", "updatedAt" })
  @ManyToMany(mappedBy = "members")
  public List<Workspace> workspaces = new ArrayList<>();

  @ManyToMany(fetch = FetchType.EAGER)
  public List<Role> roles = new ArrayList<>();

  @JsonIgnore
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    List<GrantedAuthority> authorities = new ArrayList<>();
    // for (Role role : roles) {
    // authorities.add(new SimpleGrantedAuthority(role.getName()));
    // }
    return authorities;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
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
