package br.com.duti.petlife.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import br.com.duti.petlife.models.Pet;
import br.com.duti.petlife.repository.interfaces.IPetRepository;

@Transactional
@Repository
public class PetRepository extends GenericRepository<Pet> implements IPetRepository {

	private final String GET_PETS_QUERY = "SELECT p FROM Pet p WHERE p.id = :id";
	
	@Override
	public List<Pet> getByUser(final Long userId) {
		return getEntityManager().createQuery(GET_PETS_QUERY, Pet.class).setMaxResults(1)
				.setParameter(ID, userId)
				.getResultList();
	}

}
