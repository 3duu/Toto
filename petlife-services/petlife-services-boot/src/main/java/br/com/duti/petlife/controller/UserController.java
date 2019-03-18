package br.com.duti.petlife.controller;

import static br.com.duti.utils.Utils.getEncryptedString;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import br.com.duti.petlife.models.ResponseEntity;
import br.com.duti.petlife.models.User;
import br.com.duti.petlife.repository.interfaces.IUserRepository;
import br.com.duti.utils.MessageCode;

@RequestMapping("/user")
@RestController
public class UserController {
	
	@Autowired
	private IUserRepository userRepository;
	
	@RequestMapping(value="/login", method=RequestMethod.GET)
    public @ResponseBody ResponseEntity<User> getUser(@RequestParam("username") final String username, @RequestParam("password") final String password) {
		/*User user = new User();
		user.setUsername("admin");
		user.setPassword(getEncryptedString(password));*/
		final ResponseEntity<User> response = new ResponseEntity<User>(userRepository.getUser(username, getEncryptedString(password)), RequestContextHolder.currentRequestAttributes().getSessionId());
		if(response.getEntity() != null) {
			response.setCode(MessageCode.SUCCESS.getValue());
		} else {
			response.setCode(MessageCode.NOT_FOUND.getValue());
		}
        return response;
    }
	
	@PostMapping(value="/login")
    public @ResponseBody ResponseEntity<User> doLogin(@RequestBody final User user) {
		final ResponseEntity<User> response = new ResponseEntity<User>(userRepository.getUser(user.getUsername(), getEncryptedString(user.getPassword())), RequestContextHolder.currentRequestAttributes().getSessionId());
		if(response.getEntity() == null) {
			response.setCode(MessageCode.SUCCESS.getValue());
		} else {
			response.setCode(MessageCode.NOT_FOUND.getValue());
		}
        return response;
    }
	
	/*
	@PostMapping
	public ResponseEntity<Cenario> requestCenario(@RequestBody Cenario cenario)
			throws Exception {
		environmentDataSource.setResourceInventoryenvironment(ResourceInventoryEnvironment.DEV1);
		Cenario cen = cenarioService.execution(cenario);
		return new ResponseEntity<>(cen, HttpStatus.CREATED);
	}*/
}
