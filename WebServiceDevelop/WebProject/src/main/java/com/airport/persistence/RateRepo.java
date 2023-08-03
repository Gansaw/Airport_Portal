package com.airport.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.airport.domain.Rate;

public interface RateRepo extends JpaRepository<Rate, Long> {

}
