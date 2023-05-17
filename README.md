# asxjs

![npm](https://img.shields.io/npm/v/asxjs)

NodeJS library to pull ASX stock information via the undocumented API used on [www.ASX.com.au](https://www.asx.com.au). Based on the python example [pyasx](https://github.com/jericmac/pyasx) ported to a custom class Typescript library.

_NOTE: This library uses some undocumented APIs from the ASX.com.au website and as such is subject to ASX not disabling those APIs, data is delayed by 20mins._

https://www.npmjs.com/package/asxjs

## Installation

Install via npm:

``` npm install asxjs```

## Usage

Import the ASX library:

```const { ASX } = require('asxjs');```

Create an instance and make requests:

```
const asx = new ASX();
asx.getSecurityInfo("CBA").then((response) => {
    //do something with the data
});
```

## API

 - Company specific data
    - [get_company_info()](#get_company_info)
 - Securities data
    - [get_security_info()](#get_security_info)

### get_company_info()

Pull information on the company with the given ticker symbol. This will only work for a company, it will not return information on, ETFs, warrants, indices etc.

```
asx.getCompanyInfo("CBA").then((response) => {
    //do something with the data
});
```

### get_security_info()

Pull pricing information on the security with the given ticker symbol. This can be for any type of listed security, such as company stock, bonds, ETFs etc.

```
asx.getSecurityInfo("CBA").then((response) => {
    //do something with the data
});
```

## Changelog

### 1.0.4
 - version bump

### 1.0.0
 - Initial version
