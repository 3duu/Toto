package br.com.duti.petlife.repository.interfaces;

import java.util.List;

import br.com.duti.petlife.models.Appointment;

public interface IAppointmentRespository {

	Appointment insert(Appointment appointment);

	List<Appointment> getByUser(Long userId);

	List<Appointment> getLastByUser(Long userId, int max);
	
	void initialize(Object obj);

}
