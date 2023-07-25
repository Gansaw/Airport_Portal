package com.airport.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BoardController {
	
	@GetMapping("/home")
	public String home() {
		return "home";
	}
	
	@GetMapping("siteInfo")
	public String siteInfo() {
		return "siteInfo";
	}
	
	@GetMapping("mapApi")
	public String mapApi() {
		return "mapApi";
	}
	
	@GetMapping("/airportInfo")
	public String airportInfo() {
		return "airportInfo";
	}
	
	@GetMapping("/gallery")
	public String gallery() {
		return "gallery";
	}

}
