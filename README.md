# Pensopay Payments JS

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Package](https://img.shields.io/badge/Package-Nuget-red)](https://www.nuget.org/packages/Pensopay/)

Pensopay Payments is the unoffical npm package for the [Pensopay API](https://docs.pensopay.com/v2.0/reference/getting-started). It is a wrapper for the Pensopay API, and makes it easy to integrate Pensopay into your Node and Express project.

## Installation

You can either download our source directly from the GitHub repo, or install the npm package which can be found on [npmjs.com](https://www.nuget.org/packages/Pensopay/).

## Usage

Before you can use this package, you need to have a Pensopay account. You can create one [here](https://app.pensopay.com/).
You also need a payment agreement, which you can create right [here](https://dashboard.pensopay.com/register?partner=colmornconsulting)

### Services

The communication with Pensopay is done through the servies classes. They each represent a part of the Pensopay API.
Currently there is support for the following services:

- [] PaymentService
- [x] AccountService
- [x] SettlementService 
- [] SubscriptionServce (Including mandate support)


Each service has a set of methods, which corresponds to the endpoints in the Pensopay API. The methods are async, and returns a response as JSON data, which contains the response from the Pensopay API.
Each service is nested in the PensoPayClient which must be initialized with a valid API token, which can be obtained from the Pensopay dashboard.

### Extension
Extension
If you need access to other endpoints than what is available in the current version, please feel free to suggest them under [issues](https://github.com/V4LVE/Pensopayjs/issues).

You can also take matters into your own hand and implement the missing parts yourself.
To do this you can create your own service class and let it extend the PensoPayRestClient, which will ensure that the correct header values are added to the requests.

## Examples
 For examples on how to use the package, please see the [examples](https://github.com/V4LVE/Pensopayjs/tree/master/Pensopay.Examples) folder in the repo.

## Isues
if you find any issues, please report them in the [issues](https://github.com/V4LVE/Pensopayjs/issues) section of the repo.
It will then get sorted as soon as possible.




## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Disclaimer
This package is not affiliated with Pensopay in any way. It is an unoffical package, and is not supported by Pensopay.

## License

[MIT](https://choosealicense.com/licenses/mit/)
