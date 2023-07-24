# sample_exercise
Backend practice

* Database that reads exchange rates between Fiat (USD, EUR, SGD) and Crypto currencies (ETH, BTC, DOGE) 
* Runs at preset intervals to save rates into a database 
* 2 public endpoints for users 
	* /exchange-rates 
		* takes in a query param base(fiat or crypto)
		* outputs the last exchange rate between fiat-crypto currencies
	* /historical-rates which takes in four params
		* takes in params for base_currency and target_currency
		* takes in currency for time ranges start and end (end is optional) 
		* output the historical rates recorded in the DB between the 2 currencies, within the time range