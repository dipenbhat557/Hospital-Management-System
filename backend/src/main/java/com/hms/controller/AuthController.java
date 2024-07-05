package com.hms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.config.JwtHelper;
import com.hms.exception.ResourceNotFoundException;
import com.hms.model.User;
import com.hms.payload.JwtResponse;
import com.hms.payload.LoginRequest;
import com.hms.payload.UserSignupRequest;
import com.hms.repo.UserRepo;
import com.hms.service.UserService;

import java.util.Collections;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtHelper jwtHelper;

    @PostMapping("/signup")
    public ResponseEntity<JwtResponse> createUserHandler(@RequestBody UserSignupRequest userSignupRequest)
            throws ResourceNotFoundException {
        String email = userSignupRequest.getEmail();
        String password = userSignupRequest.getPassword();

        User existingUser = userRepository.findByEmail(email);
        if (existingUser != null) {
            throw new ResourceNotFoundException("Email is used with another account");
        }

        this.userService.create(userSignupRequest);

        authenticateUser(email, password);

        UserDetails userDetails = this.userDetailsService.loadUserByUsername(userSignupRequest.getEmail());
        String token = this.jwtHelper.generateToken(userDetails);
        JwtResponse response = new JwtResponse();
        response.setToken(token);
        response.setUser((User) userDetails);

        return new ResponseEntity<JwtResponse>(response, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest request) {

        this.authenticateUser(request.getEmail(), request.getPassword());
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getEmail());
        String token = this.jwtHelper.generateToken(userDetails);
        JwtResponse response = new JwtResponse();
        response.setToken(token);
        response.setUser((User) userDetails);

        return new ResponseEntity<JwtResponse>(response, HttpStatus.OK);

    }

    public void authenticateUser(String username, String password) {
        try {
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (BadCredentialsException e) {
            throw new ResourceNotFoundException("Invalid username or password");
        }
    }
}
