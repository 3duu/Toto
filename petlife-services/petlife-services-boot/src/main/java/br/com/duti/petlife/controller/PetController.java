package br.com.duti.petlife.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import br.com.duti.petlife.models.Pet;
import br.com.duti.petlife.models.ResponseEntity;
import br.com.duti.petlife.repository.interfaces.IPetRepository;
import br.com.duti.utils.ReturnCode;

@RequestMapping("/pet")
@RestController
public class PetController {
	
	@Autowired
	private IPetRepository petRepository;
	
	@PostMapping(value="/retrieve", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<List<Pet>> getPets(@RequestBody final Long userId) {
		
		ResponseEntity<List<Pet>> response = null;
		//Lidar com login de redes sociais

		try {
			if(response == null) {
				response = new ResponseEntity<List<Pet>>(petRepository.getByUser(userId), RequestContextHolder.currentRequestAttributes().getSessionId());
				if(response.getEntity() != null) {
					response.setCode(ReturnCode.SUCCESS.getValue());
				} else {
					response.setCode(ReturnCode.NOT_FOUND.getValue());
				}
			}
			
		}
		catch(Exception e){
			response = new ResponseEntity<List<Pet>>(new ArrayList<Pet>(), RequestContextHolder.currentRequestAttributes().getSessionId());
			response.setCode(ReturnCode.SERVER_ERROR.getValue());
			e.printStackTrace();
		}
        return response;
	}
	
	@PostMapping(value="/register", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<Pet> register(@RequestBody final Pet pet) {
		ResponseEntity<Pet> response;
		try {
			final Date today = new Date();
			pet.setCreationDate(today);
			pet.setBirthDate(today);
			
			response = new ResponseEntity<Pet>(petRepository.insert(pet), RequestContextHolder.currentRequestAttributes().getSessionId());
			if(response.getEntity() != null) {
				response.setCode(ReturnCode.SUCCESS.getValue());
			} else {
				response.setCode(ReturnCode.SERVER_ERROR.getValue());
			}
		}
		catch(Exception e){
			response = new ResponseEntity<Pet>(pet, RequestContextHolder.currentRequestAttributes().getSessionId());
			response.setCode(ReturnCode.SERVER_ERROR.getValue());
			e.printStackTrace();
		}
		
        return response;
    }

}
