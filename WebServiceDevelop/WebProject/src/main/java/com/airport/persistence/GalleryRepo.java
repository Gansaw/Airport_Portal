package com.airport.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.airport.domain.Gallery;

public interface GalleryRepo extends JpaRepository<Gallery, Long> {

}
