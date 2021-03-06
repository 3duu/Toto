package br.com.duti.petlife.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import br.com.duti.petlife.models.Appointment;
import br.com.duti.petlife.repository.interfaces.IAppointmentRespository;

@Transactional
@Repository
public class AppointmentRespository extends GenericRepository<Appointment> implements IAppointmentRespository {
	
	private final String GET_APPOINTMENTS_QUERY = "SELECT p FROM Appointment p LEFT JOIN FETCH p.pet WHERE p.pet.user.id = :id ORDER BY p.date ASC";
	private final String GET_APPOINTMENTS_LAST_QUERY = "SELECT p FROM Appointment p WHERE p.user.id = :id";

	@Override
	public List<Appointment> getByUser(final Integer userId) {
		return getEntityManager().createQuery(GET_APPOINTMENTS_QUERY, Appointment.class)
				.setParameter(ID, userId)
				.getResultList();
	}
	
	@Override
	public List<Appointment> getLastByUser(final Integer userId, int max) {
		if(max <= 0) {
			max = 1;
		}
		return getEntityManager().createQuery(GET_APPOINTMENTS_LAST_QUERY, Appointment.class)
				.setParameter(ID, userId)
				.setMaxResults(max)
				.getResultList();
	}
	
}
