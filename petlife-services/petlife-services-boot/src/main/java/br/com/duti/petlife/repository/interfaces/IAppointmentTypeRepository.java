package br.com.duti.petlife.repository.interfaces;

import java.util.List;

import br.com.duti.petlife.models.AppointmentType;

public interface IAppointmentTypeRepository {

	List<AppointmentType> getAll();

}
