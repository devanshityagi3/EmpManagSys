package com.example.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
   private static final long serialVersionUID=1L;
   
   public ResourceNotFoundException(String message){
    super(message);
   }
/*     whenever a record does not exist in the database then the rest api will throw this exception
  and we have annotaed it with responseStatus annotation so api will return a not found status to the client*/
}
