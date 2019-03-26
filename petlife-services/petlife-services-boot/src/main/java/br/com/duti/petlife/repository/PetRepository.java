package br.com.duti.petlife.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import br.com.duti.petlife.models.Pet;
import br.com.duti.petlife.repository.interfaces.IPetRepository;

@Repository
@Transactional
public class PetRepository extends GenericRepository<Pet> implements IPetRepository {

	@Override
	public List<Pet> getByUser(Long userId) {
		// TODO Auto-generated method stub
		return null;
	}

}
