package br.com.duti.petlife.repository.interfaces;

import java.util.List;

import br.com.duti.petlife.models.Appointment;

public interface IAppointmentRespository {

	Appointment insert(Appointment appointment);

	List<Appointment> getByUser(Integer userId);

	List<Appointment> getLastByUser(Integer userId, int max);
	
	void initialize(Object obj);

}
