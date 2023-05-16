"use strict";

const config = require("config");
const fetch = require("node-fetch");

export class ASX {

    public async getSecurityInfo (ticker: string) {
        const params = {
            method: "GET" 
        };
        const url = config.BASE_URL + "/share/" + ticker;
        const response = await fetch(url, params);
        const data =  response.json();
        return data;
    }

    public async getCompanyData (ticker: string) {
        const params = {
            method: "GET"
        };
        const url = config.BASE_URL + "/company/" + ticker;
        const response = await fetch(url, params);
        const data =  response.json();
        return data;
    }
}

module.exports = { ASX };