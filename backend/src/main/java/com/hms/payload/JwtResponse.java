package com.hms.payload;

import lombok.Data;

@Data
public class JwtResponse {

    private String token;
    private UserResponse response;

}