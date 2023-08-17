package com.airport.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.airport.domain.Top10;

public interface Top10Repo extends JpaRepository<Top10, Integer> {

}
