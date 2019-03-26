package br.com.duti.petlife.repository.interfaces;

import java.util.List;

import br.com.duti.petlife.models.Pet;

public interface IPetRepository {

	List<Pet> getByUser(Long userId);

}
