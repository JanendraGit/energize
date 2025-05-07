package com.paf.energize.repository;


import com.paf.energize.model.UserProfile;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserProfileRepository extends MongoRepository<UserProfile, String> {
    List<UserProfile> findByUserId(String userId);
}
