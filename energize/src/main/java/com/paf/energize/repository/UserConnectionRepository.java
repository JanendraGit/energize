package com.paf.energize.repository;

import com.paf.energize.model.UserConnection;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserConnectionRepository extends MongoRepository<UserConnection, String> {
    UserConnection findByUserId(String userId);
}