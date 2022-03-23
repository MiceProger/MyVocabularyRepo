package com.michael.MyVocabulary.repository;

import com.michael.MyVocabulary.entity.VocabularyWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WordRepository extends JpaRepository<VocabularyWord, Long> {
    void deleteVocabularyWordById(Long id);
}

