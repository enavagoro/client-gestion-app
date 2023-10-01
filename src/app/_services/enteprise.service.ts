import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class EnterpriseService {
    url: string = 'http://localhost:8080'

    constructor(private http: HttpClient) {

    }

    listEnterprise(){
        return this.http.get<any>(`${this.url}/enterprise/list`, {
            headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
        })
    }
}