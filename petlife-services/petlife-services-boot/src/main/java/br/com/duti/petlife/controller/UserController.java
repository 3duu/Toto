package br.com.duti.petlife.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.duti.petlife.models.User;

@RequestMapping("/user")
@RestController
public class UserController {
	
	@RequestMapping("/login")
    public @ResponseBody User getUser(/*@RequestParam(value="name", defaultValue="World") String name*/) {
		final User user = new User();
		user.setId(1);
		user.setLogin("admin");
		user.setPassword("1");
        return user;
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
