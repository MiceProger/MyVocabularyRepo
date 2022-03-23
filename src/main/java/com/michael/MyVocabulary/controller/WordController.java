package com.michael.MyVocabulary.controller;

import com.michael.MyVocabulary.entity.VocabularyWord;
import com.michael.MyVocabulary.service.WordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/vocabulary")
public class WordController {

    @Autowired
    private WordService wordService;

    @PostMapping()
    @Transactional
    public VocabularyWord saveVocabularyWord(@RequestBody() VocabularyWord word){
        word.setAddingDate(new Date());
        return wordService.saveVocabularyWord(word);
    }

    @GetMapping()
    public List<VocabularyWord> findAllWords(){
        return wordService.findAllWords();
    }

    @PutMapping()
    @Transactional
    public void updateWord(@RequestBody() VocabularyWord vocabularyWord){
        wordService.updateWord(vocabularyWord);
    }

    @DeleteMapping("/delete/{id}")
    @Transactional
    public void deleteWord(@PathVariable("id") Long id){
        wordService.deleteWord(id);
    }

    @GetMapping("/sorting")

    public List<VocabularyWord> findAllWordsWithSorting(int sortingWay, String property){
        return wordService.findAllWordsWithSorting(sortingWay, property);
    }

}
