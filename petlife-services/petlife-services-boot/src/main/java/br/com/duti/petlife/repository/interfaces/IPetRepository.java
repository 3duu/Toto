package br.com.duti.petlife.repository.interfaces;

import java.util.List;

import br.com.duti.petlife.models.Pet;
import br.com.duti.petlife.models.User;

public interface IPetRepository {

	List<Pet> getByUser(Long userId);

	Pet insert(Pet pet);

}
