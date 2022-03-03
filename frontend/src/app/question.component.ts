import { Component } from '@angular/core'
import { ApiService } from './api.service';
import { Question } from './question';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
})

export class QuestionComponent {

    question : Question = {
        text: ''
    };

    constructor(private api: ApiService) {

    }

    post(question: Question) {
       this.api.postQuestion(question);
    }
}