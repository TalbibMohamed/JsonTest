package learning.ep01.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import learning.ep01.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
