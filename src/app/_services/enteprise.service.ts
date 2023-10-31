import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EnterpriseService {
    host: string = environment.apiUrl || 'http://localhost:8080'
    
    constructor(private http: HttpClient) {

    }

    listEnterprise(){
        return this.http.get<any>(`${this.host}/enterprise/list`, {
            headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
        })
    }

    listByStatus(status: boolean){
        const body = {status: status}
        return this.http.post<any>(`${this.host}/enterprise/listByStatus`, body,{
            headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
        })
    }
    getOneByName(name: string) {
        const body = {
            name: name
        }
        return this.http.post<any>(`${this.host}/enterprise/getOneByName`, body ,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }

    listByPaymentStatus(paymentStatus: string) {
        const body = {
            paymentStatus: paymentStatus
        }
        return this.http.post<any>(`${this.host}/enterprise/listByPaymentStatus`, body ,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }

    listExpiredEnterprisesPayments(){
        return this.http.get<any>(`${this.host}/listExpiredEnterprisesPayments`, {
            headers: new HttpHeaders()
            .set('Content-Type', 'application/json')
        })
    }

    listByClosenessPaymentDate(closenessDays: number) {
        const body = {
            closenessDays: closenessDays
        }
        return this.http.post<any>(`${this.host}/enterprise/listByClosenessPaymentDate`, body ,{
            headers: new HttpHeaders().set
            ('Content-Type', 'application/json')
        });
    }

    getOneByName2(name: string) {
        return this.http.get<any>(`${this.host}/enterprise/getOneByName?name=${name}`, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
    }
}