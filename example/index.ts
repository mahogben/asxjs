"use strict";

const { ASX } = require("../src");

const test = async () => {

    const asx = new ASX();
    
    const shareInfo = await asx.getSecurityInfo("CBA");
    console.log(shareInfo);

    const companyInfo = await asx.getCompanyData("CBA");
    console.log(companyInfo);

};

test();