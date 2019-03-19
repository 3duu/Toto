package br.com.duti.petlife.controller;

import static br.com.duti.utils.Utils.getEncryptedString;

import java.util.Date;

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
import br.com.duti.utils.MessageCode;
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
			response.setCode(MessageCode.SUCCESS.getValue());
		} else {
			response.setCode(MessageCode.NOT_FOUND.getValue());
		}
        return response;
    }*/
	
	@CrossOrigin(origins = {Utils.ANGULAR_HOST, Utils.PHONEGAP_HOST, Utils.PHONEGAP_HOST2, Utils.PHONEGAP_HOST3})
	@PostMapping(value="/authenticate", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<User> doLogin(@RequestBody final User user) {
		final ResponseEntity<User> response = new ResponseEntity<User>(userRepository.getUser(user.getUsername(), getEncryptedString(user.getPassword())), RequestContextHolder.currentRequestAttributes().getSessionId());
		if(response.getEntity() != null) {
			response.setCode(MessageCode.SUCCESS.getValue());
			response.setDate(new Date());
		} else {
			response.setCode(MessageCode.NOT_FOUND.getValue());
		}
        return response;
    }
	
}
