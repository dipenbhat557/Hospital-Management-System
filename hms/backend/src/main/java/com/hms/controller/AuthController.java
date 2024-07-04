package com.hms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.config.CustomUserService;
import com.hms.config.TokenProvider;
import com.hms.exception.ResourceNotFoundException;
import com.hms.model.User;
import com.hms.payload.AuthResponse;
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
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private CustomUserService customUserService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody UserSignupRequest userSignupRequest)
            throws ResourceNotFoundException {
        String email = userSignupRequest.getEmail();
        String password = userSignupRequest.getPassword();

        User existingUser = userRepository.findByEmail(email);
        if (existingUser != null) {
            throw new ResourceNotFoundException("Email is used with another account");
        }

        this.userService.create(userSignupRequest);

        Authentication authentication = authenticate(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);

        AuthResponse response = new AuthResponse(jwt, true);

        return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginHandler(@RequestBody LoginRequest request) {
        String email = request.getEmail();
        String password = request.getPassword();

        Authentication authentication = authenticate(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);

        AuthResponse response = new AuthResponse(jwt, true);

        return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
    }

    public Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserService.loadUserByUsername(username);

        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password or username");
        }

        User user = this.userRepository.findByEmail(username);

        return new UsernamePasswordAuthenticationToken(userDetails, null,
                Collections.singletonList(new SimpleGrantedAuthority(user.getRole().toString())));
    }
}
