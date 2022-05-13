import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VocabularyWord } from './vocabularyWord';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private apiServerUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getWords(): Observable<VocabularyWord[]>{
    console.log("making response to the back-end");
    
    return this.http.get<VocabularyWord[]>
    (`${this.apiServerUrl}/vocabulary`);
}

public addWord(word: VocabularyWord): Observable<VocabularyWord>{
  console.log("I`m trying to save vords to DB using post request with word : " , word);
  
    return this.http.post<VocabularyWord>
    (`${this.apiServerUrl}/vocabulary`, word);
}

public updateWord(word: VocabularyWord): Observable<VocabularyWord>{
    return this.http.put<VocabularyWord>
    (`${this.apiServerUrl}/vocabulary`, word);
}

public deleteWord(wordId: number): Observable<void>{
    return this.http.delete<void>
    (`${this.apiServerUrl}/vocabulary/delete/${wordId}`);
}
}
