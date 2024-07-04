package com.hms.service;

import org.springframework.stereotype.Service;

import com.hms.model.User;
import com.hms.payload.SignupRequest;

public interface UserService {

    public User create(SignupRequest signupRequest);

}
