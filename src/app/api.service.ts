import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    postQuestion(question: any) {
        this.http.post('http://localhost:64814/api/Questions', question).subscribe(
            res => {
                console.log(res)
            }
        );
    }
}

