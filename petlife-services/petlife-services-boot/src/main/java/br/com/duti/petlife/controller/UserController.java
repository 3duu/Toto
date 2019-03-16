package br.com.duti.petlife.controller;

import static br.com.duti.utils.Utils.getEncryptedString;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
    public @ResponseBody ResponseEntity<User> getUser(@RequestParam("username") String username, @RequestParam("password") String password) {
		
		final ResponseEntity<User> response = new ResponseEntity<User>(userRepository.getUser(username, getEncryptedString(password)));
		if(response.getEntity() == null) {
			response.setErrorCode(MessageCode.SUCCESS.getValue());
		} else {
			response.setErrorCode(MessageCode.NOT_FOUND.getValue());
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
