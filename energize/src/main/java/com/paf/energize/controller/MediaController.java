package com.paf.energize.controller;

import com.paf.energize.model.Media;
import com.paf.energize.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/media")
public class MediaController {

    private final MediaRepository mediaRepository;

    public MediaController(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
    }

    @GetMapping("/{postId}")
    public ResponseEntity<List<Media>> getMediaByPostId(@PathVariable String postId) {
        List<Media> mediaList = mediaRepository.findByPostId(postId);
        return new ResponseEntity<>(mediaList, HttpStatus.OK);
    }
}
