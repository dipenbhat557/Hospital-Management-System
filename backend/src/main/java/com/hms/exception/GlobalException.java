package com.hms.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler(ResourceNotFoundException.class)
    public String resourceNotFoundExceptionHandler(ResourceNotFoundException ex) {
        return ex.getMessage();
    }

}