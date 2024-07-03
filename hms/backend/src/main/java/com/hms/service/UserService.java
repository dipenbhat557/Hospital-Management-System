package com.hms.service;

import com.hms.model.User;
import com.hms.payload.SignupRequest;

public interface UserService {

    public User create(SignupRequest signupRequest);

}
