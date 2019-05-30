package br.com.duti.petlife.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.com.duti.petlife.models.PetType;
import br.com.duti.petlife.repository.interfaces.IPetTypeRepository;

@Repository
public class PetTypeRepository extends GenericRepository<PetType> implements IPetTypeRepository {
	
	private final String GET_TYPES_QUERY = "SELECT DISTINCT p FROM PetType p LEFT JOIN FETCH p.breeds b ORDER BY p.id, b.description";
	
	@Override
	public List<PetType> getAll() {
		return getEntityManager().createQuery(GET_TYPES_QUERY, PetType.class)
				.getResultList();
	}
}
