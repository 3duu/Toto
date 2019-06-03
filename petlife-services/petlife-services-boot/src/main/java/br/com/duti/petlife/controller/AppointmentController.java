package br.com.duti.petlife.controller;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;

import br.com.duti.petlife.models.Appointment;
import br.com.duti.petlife.models.AppointmentType;
import br.com.duti.petlife.models.ResponseEntity;
import br.com.duti.petlife.repository.interfaces.IAppointmentRespository;
import br.com.duti.petlife.repository.interfaces.IAppointmentTypeRepository;
import br.com.duti.utils.ReturnCode;


@RequestMapping("/appointments")
@RestController
public class AppointmentController {
	
	@Autowired
	private IAppointmentRespository appointmentRespository;
	
	@Autowired
	private IAppointmentTypeRepository appointmentTypeRepository;
	
	@Transactional
	@PostMapping(value="/register", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<Appointment> register(@RequestBody final Appointment appointment) {
		ResponseEntity<Appointment> response = null;
		try {

			response = new ResponseEntity<Appointment>(appointmentRespository.insert(appointment), RequestContextHolder.currentRequestAttributes().getSessionId());
			if(response.getData() != null) {
				response.setCode(ReturnCode.SUCCESS.getValue());
			} else {
				response.setCode(ReturnCode.SERVER_ERROR.getValue());
			}
		}
		catch(Exception e){
			response = new ResponseEntity<Appointment>(null, RequestContextHolder.currentRequestAttributes().getSessionId());
			response.setCode(ReturnCode.SERVER_ERROR.getValue());
			e.printStackTrace();
		}
		
        return response;
    }
	
	@GetMapping(value="/retrieve", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<List<Appointment>> getAppointments(@RequestParam(value="userId") final Long userId) {
		
		ResponseEntity<List<Appointment>> response = null;
		
		try {
			final List<Appointment> list = appointmentRespository.getByUser(userId);
			response = new ResponseEntity<List<Appointment>>(list, RequestContextHolder.currentRequestAttributes().getSessionId());
			if(response.getData() != null) {
				response.setCode(ReturnCode.SUCCESS.getValue());
			} else {
				response.setCode(ReturnCode.NOT_FOUND.getValue());
			}
		
		}
		catch(Exception e){
			response = new ResponseEntity<List<Appointment>>(new ArrayList<Appointment>(), RequestContextHolder.currentRequestAttributes().getSessionId());
			response.setCode(ReturnCode.SERVER_ERROR.getValue());
			e.printStackTrace();
		}
        return response;
	}
	
	@GetMapping(value="/types", produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody ResponseEntity<List<AppointmentType>> getTypes() {
		
		ResponseEntity<List<AppointmentType>> response = null;
		
		try {
			final List<AppointmentType> list = appointmentTypeRepository.getAll();
			response = new ResponseEntity<List<AppointmentType>>(list, RequestContextHolder.currentRequestAttributes().getSessionId());
			if(response.getData() != null) {
				response.setCode(ReturnCode.SUCCESS.getValue());
			} else {
				response.setCode(ReturnCode.NOT_FOUND.getValue());
			}
		
		}
		catch(Exception e){
			response = new ResponseEntity<List<AppointmentType>>(new ArrayList<AppointmentType>(), RequestContextHolder.currentRequestAttributes().getSessionId());
			response.setCode(ReturnCode.SERVER_ERROR.getValue());
			e.printStackTrace();
		}
        return response;
	}
}
