package com.michael.MyVocabulary.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VocabularyWord {

    //public static final String SIMPLE_WORD = "Simple word";
    //public static final String PHRASAL_VERB = "Phrasual verb";
    //public static final String IDIOM = "Idiom";
//
    public static final int DESCENDING_SORTING = 0;
    public static final int ASCENDING_SORTING = 1;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String word;
    private String translation;
    @Column(nullable = true)
    private String comments;
    private Date addingDate;
    @Transient
    private String formattedDate;
    private String status;
    private boolean special;

}
