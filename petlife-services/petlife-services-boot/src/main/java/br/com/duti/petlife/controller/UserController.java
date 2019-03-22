package br.com.duti.petlife.controller;

import static br.com.duti.utils.Utils.getEncryptedString;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import br.com.duti.petlife.models.ResponseEntity;
import br.com.duti.petlife.models.User;
import br.com.duti.petlife.repository.interfaces.IUserRepository;
import br.com.duti.utils.ReturnCode;
import br.com.duti.utils.Utils;

@RequestMapping("/user")
@RestController
public class UserController {
	
	@Autowired
	private IUserRepository userRepository;
	
	/*
	@RequestMapping(value="/login", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<User> getUser(@RequestParam("username") final String username, @RequestParam("password") final String password) {
		final ResponseEntity<User> response = new ResponseEntity<User>(userRepository.getUser(username, getEncryptedString(password)), RequestContextHolder.currentRequestAttributes().getSessionId());
		if(response.getEntity() != null) {
			response.setCode(ReturnCode.SUCCESS.getValue());
		} else {
			response.setCode(ReturnCode.NOT_FOUND.getValue());
		}
        return response;
    }*/
	
	@CrossOrigin(origins = {Utils.ANGULAR_HOST, Utils.PHONEGAP_HOST, Utils.PHONEGAP_HOST2, Utils.PHONEGAP_HOST3, Utils.SMARTPHONE})
	@PostMapping(value="/authenticate", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<User> doLogin(@RequestBody final User user) {
		ResponseEntity<User> response;
		try {
			response = new ResponseEntity<User>(userRepository.getUser(user.getUsername(), getEncryptedString(user.getPassword())), RequestContextHolder.currentRequestAttributes().getSessionId());
			if(response.getEntity() != null) {
				response.setCode(ReturnCode.SUCCESS.getValue());
			} else {
				response.setCode(ReturnCode.NOT_FOUND.getValue());
			}
		}
		catch(Exception e){
			response = new ResponseEntity<User>(user, RequestContextHolder.currentRequestAttributes().getSessionId());
			response.setCode(ReturnCode.SERVER_ERROR.getValue());
			e.printStackTrace();
		}
        return response;
	}
	
	@Transactional
	@CrossOrigin(origins = {Utils.ANGULAR_HOST, Utils.PHONEGAP_HOST, Utils.PHONEGAP_HOST2, Utils.PHONEGAP_HOST3, Utils.SMARTPHONE})
	@PostMapping(value="/register", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<User> register(@RequestBody final User user) {
		ResponseEntity<User> response;
		try {
			user.setPassword(getEncryptedString(user.getPassword()));
			user.setCreationDate(new Date());
			user.setAdmin(false);
			//validate unique username
			response = new ResponseEntity<User>(userRepository.save(user), RequestContextHolder.currentRequestAttributes().getSessionId());
			if(response.getEntity() != null) {
				response.setCode(ReturnCode.SUCCESS.getValue());
			} else {
				response.setCode(ReturnCode.NOT_FOUND.getValue());
			}
		}
		catch(Exception e){
			response = new ResponseEntity<User>(user, RequestContextHolder.currentRequestAttributes().getSessionId());
			response.setCode(ReturnCode.SERVER_ERROR.getValue());
			e.printStackTrace();
		}
		
        return response;
    }
	
}
