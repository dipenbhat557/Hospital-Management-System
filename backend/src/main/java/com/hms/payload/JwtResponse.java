package com.hms.payload;

import com.hms.model.User;

import lombok.Data;

@Data
public class JwtResponse {

    private String token;
    private User user;

}