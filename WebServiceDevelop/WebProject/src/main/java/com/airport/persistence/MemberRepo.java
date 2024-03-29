package com.airport.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.airport.domain.Member;

@Repository
public interface MemberRepo extends JpaRepository<Member, String> {
	
	Member findByUsername(String username);

    @Query("SELECT COUNT(m) > 0 FROM Member m WHERE m.username = ?1")
    boolean existsByUsername(String username);
    
}
