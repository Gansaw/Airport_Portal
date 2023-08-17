package com.airport.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.airport.domain.Gallery;
import com.airport.service.GalleryService;

@RestController
public class GalleryController {
	
	@Autowired
	public GalleryService galleryService;	

	@RequestMapping("/gallerys")
	public Iterable<Gallery> getGallerys(){
		return galleryService.gallery();
	}
		
	@GetMapping("/getGallery")	
	public Gallery getGallery(@RequestParam Long id) {		
		return galleryService.getGallery(Gallery.builder().id(id).build());
	}	
	
	@PostMapping("/insertGallery")
	public String insertGallery(@RequestBody Gallery gallery) {
	    galleryService.insertGallery(gallery);
	    return "Success";
	}
	
	@PutMapping("/updateGallery/{id}")
	public String updateGallery(@PathVariable Long id, @RequestBody Gallery gallery) {
		gallery.setId(id);
		galleryService.updateGallery(gallery);
		return "Success";		
	}
	
	@DeleteMapping("/deleteGallery/{id}")
	public String deleteGallery(@PathVariable Long id) {
		Gallery deleteGallery = Gallery.builder().id(id).build();
		galleryService.deleteGallery(deleteGallery);
		return "Success";
		
	}
	
}