package com.stackroute.recommendation.repository;

import org.springframework.data.neo4j.repository.Neo4jRepository;

import com.stackroute.recommendation.relations.Liked;

public interface LikedRepository  extends Neo4jRepository<Liked, Long>{

}
