package br.com.duti.petlife.controller;

import static br.com.duti.utils.Utils.getEncryptedString;

import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import br.com.duti.petlife.models.ResponseEntity;
import br.com.duti.petlife.models.SocialNetworkType;
import br.com.duti.petlife.models.User;
import br.com.duti.petlife.repository.interfaces.IUserRepository;
import br.com.duti.utils.ReturnCode;
import br.com.duti.utils.Utils;

@RequestMapping("/user")
@RestController
public class UserController {
	
	@Autowired
	private IUserRepository userRepository;
	
	//@CrossOrigin(origins = {Utils.HTTP, Utils.SMARTPHONE})
	@PostMapping(value="/authenticate", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<User> doLogin(@RequestBody final User user) {
		
		ResponseEntity<User> response = null;
		//Lidar com login de redes sociais
		
		if(SocialNetworkType.NONE.equals(user.getLoginType())) {
			user.setLoginType(null);
			user.setPassword(getEncryptedString(user.getPassword()));
		}
		
		if(user.getLoginType() != null) {
			response = register(user);
		}

		try {
			if(response == null) {
				response = new ResponseEntity<User>(userRepository.getUser(user), RequestContextHolder.currentRequestAttributes().getSessionId());
				if(response.getEntity() != null) {
					response.setCode(ReturnCode.SUCCESS.getValue());
				} else {
					response.setCode(ReturnCode.NOT_FOUND.getValue());
				}
			}
			
		}
		catch(Exception e){
			response = new ResponseEntity<User>(user, RequestContextHolder.currentRequestAttributes().getSessionId());
			response.setCode(ReturnCode.SERVER_ERROR.getValue());
		}
        return response;
	}
	
	@PostMapping(value="/register", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<User> register(@RequestBody final User user) {
		ResponseEntity<User> response;
		try {
			user.setPassword(getEncryptedString(user.getPassword()));
			
			if(user.getLoginType() == null) {
				//validate unique username
				if(userRepository.getByUsername(user.getUsername()) != null) {
					response = new ResponseEntity<User>(userRepository.insert(user), RequestContextHolder.currentRequestAttributes().getSessionId());
					response.setCode(ReturnCode.RESOURCE_EXISTS.getValue());
					return response;
				}
			}
			else {
				if(userRepository.getSocialMediaUser(user) != null) {
					return null;
				}
			}
			
			user.setCreationDate(new Date());
			user.setAdmin(false);
			
			response = new ResponseEntity<User>(userRepository.insert(user), RequestContextHolder.currentRequestAttributes().getSessionId());
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
	
	@PostConstruct
	private void resolveAdminUser(){
		final User admin = new User();
		admin.setUsername("admin");
		admin.setName("Administrador");
		admin.setPassword("1");
		admin.setAdmin(true);
		
		final List<String> dados = Utils.readConfigFile(Utils.ADMIN_CONFIG_FILE);
		if(dados != null){
			if(!dados.isEmpty()){
				final String username = dados.get(0);
				if(!username.isEmpty()){
					admin.setUsername(username);
				}
				if(dados.size() > 1){
					final String password = dados.get(1);
					if(!password.isEmpty()){
						admin.setPassword(password);
					}
				}
			}
		}
		
		admin.setPassword(getEncryptedString(admin.getPassword()));
		
		if(userRepository.getUser(admin) == null){
			userRepository.insert(admin);
		}
	}
	

}
