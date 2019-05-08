package br.com.duti.petlife.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Table(name="pet")
@Entity
public class Pet implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="name", length=22, nullable=false)
	private String name;
	
	@Column(name="creation_date", nullable=false)
	private Date creationDate;
	
	@Column(name="img", length=250, nullable=true)
	private String img;
	
	@JoinColumn(name="pet_type_id")
	@ManyToOne(fetch=FetchType.EAGER)
	private PetType petType;
	
	@Column(name="other_pet", length=22, nullable=true)
	private String otherPet;
	
	@Column(name="description", length=100, nullable=true)
	private String description;
	
	@Column(name="birth_date", nullable=true)
	private Date birthDate;
	
	@JoinColumn(name="user_id")
	@ManyToOne(fetch=FetchType.LAZY)
	private User user;
	
	@Transient
	private Integer age;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setPetType(PetType petType) {
		this.petType = petType;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

}
