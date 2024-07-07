package com.hms.payload;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private Integer id;
    private String name;
    private String email;
    private Role role;
    private Collection<? extends GrantedAuthority> authorities;

}
