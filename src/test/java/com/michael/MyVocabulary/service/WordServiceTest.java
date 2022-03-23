package com.michael.MyVocabulary.service;

import com.michael.MyVocabulary.entity.VocabularyWord;
import com.michael.MyVocabulary.repository.WordRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Sort;

import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class WordServiceTest {

    @Autowired
    private WordService wordService;

    @MockBean
    private WordRepository wordRepository;

    VocabularyWord word1;
    VocabularyWord word2;
    VocabularyWord word3;

    @BeforeEach
    void setUp() {
        /*
         word1 = VocabularyWord.builder()
                .word("testWord1")
                .translation("testTranslation1")
                .comments("testComments1")
                .addingDate(new Date(10))
                .status(VocabularyWord.SIMPLE_WORD)
                .build();
         word2 = VocabularyWord.builder()
                .word("testWord2")
                .translation("testTranslation2")
                .comments("testComments2")
                .addingDate(new Date(100))
                .status(VocabularyWord.SIMPLE_WORD)
                .build();
         word3 = VocabularyWord.builder()
                .word("testWord3")
                .translation("testTranslation3")
                .comments("testComments3")
                .addingDate(new Date(1000))
                .status(VocabularyWord.SIMPLE_WORD)
                .build();*/

    }

    @Test
    @DisplayName("Testing our service sorting functionality")
    void findAllMethod_sortingTest() {
        List<VocabularyWord> outputWordList = List.of(word1, word2, word3);

        Mockito.when(wordRepository.findAll(Sort.by(Sort.Direction.ASC, "AddingDate")))
                .thenReturn(outputWordList);
        
        assertTrue(outputWordList.equals(wordService.findAllWordsWithSorting
                (VocabularyWord.ASCENDING_SORTING, "AddingDate")));
    }
}