package com.paf.energize.controller;
import com.paf.energize.model.Like;
import com.paf.energize.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/likes")
public class LikeController {

    private final LikeRepository likeRepository;

    @Autowired
    public LikeController(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }

    @GetMapping("/{postId}")
    public ResponseEntity<List<Like>> getLikesByPostId(@PathVariable String postId) {
        List<Like> likes = likeRepository.findByPostId(postId);
        return new ResponseEntity<>(likes, HttpStatus.OK);
    }
}