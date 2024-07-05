package com.hms.service;

import com.hms.model.User;
import com.hms.payload.UserSignupRequest;

public interface UserService {

    public User create(UserSignupRequest userSignupRequest);

}
