package br.com.duti.petlife.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.com.duti.petlife.models.AppointmentType;
import br.com.duti.petlife.repository.interfaces.IAppointmentTypeRepository;

@Repository
public class AppointmentTypeRespository extends GenericRepository<AppointmentType> implements IAppointmentTypeRepository {
	
	private final String GET_TYPES_QUERY = "SELECT p FROM AppointmentType p";
	
	@Override
	public List<AppointmentType> getAll() {
		return getEntityManager().createQuery(GET_TYPES_QUERY, AppointmentType.class)
				.getResultList();
	}

}
