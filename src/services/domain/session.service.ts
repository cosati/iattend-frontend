import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class SessionService {

    constructor(public http : HttpClient) {
    }

    findNext() {
        return this.http.get(`${API_CONFIG.baseUrl}/sessions/next/`);
    } 

}