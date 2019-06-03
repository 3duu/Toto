package br.com.duti.petlife.controller;


import java.util.Date;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import br.com.duti.petlife.models.ResponseEntity;
import br.com.duti.utils.ReturnCode;

@RequestMapping("/info")
@RestController
public class InfoController {
	
	@GetMapping(value="/ping", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<Date> ping() {

		final ResponseEntity<Date> response = new ResponseEntity<Date>(null, RequestContextHolder.currentRequestAttributes().getSessionId());
		response.setCode(ReturnCode.SUCCESS.getValue());
		try {
			return response;
		}
		catch(Exception e){
			response.setCode(ReturnCode.SERVER_ERROR.getValue());
			e.printStackTrace();
		}
        return response;
	}
}
