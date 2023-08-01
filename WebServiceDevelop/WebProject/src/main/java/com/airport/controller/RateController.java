package com.airport.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airport.domain.Rate;
import com.airport.persistence.RateRepo;

@RestController
public class RateController {
	
	@Autowired
	private RateRepo rateRepo;
	
	
	@RequestMapping("/rates")
	public Iterable<Rate> getRates(){
		return rateRepo.findAll();
	}


}
