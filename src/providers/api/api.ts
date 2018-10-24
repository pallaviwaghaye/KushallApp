import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
	apiUrl = 'https://api.kushall.com';
	//public access_token:any;
	
  constructor(public http: HttpClient) {

  	//this.access_token = localStorage.getItem('access_token');
  	//console.log(this.access_token);
    console.log('Hello ApiProvider Provider');
  }
	getUsers() {
	  return new Promise(resolve => {


			let headers = new HttpHeaders();
			//Header is immutable object hence needed to reassigned before use
			//refer https://angular.io/api/common/http/HttpHeaders
			//Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ0OGI4NWY5YjNjZThhOWVmN2IxODRkMWFlYjBmNDY5YWU2OTJlYThkNjA2YmI3M2E0OGVkOWVkZjYxMmE4NmVmOGIyOTEwNTA2NzkwNzAyIn0.eyJhdWQiOiIyIiwianRpIjoiNDQ4Yjg1ZjliM2NlOGE5ZWY3YjE4NGQxYWViMGY0NjlhZTY5MmVhOGQ2MDZiYjczYTQ4ZWQ5ZWRmNjEyYTg2ZWY4YjI5MTA1MDY3OTA3MDIiLCJpYXQiOjE1Mzg3MzY3NzEsIm5iZiI6MTUzODczNjc3MSwiZXhwIjoxNTcwMjcyNzcxLCJzdWIiOiIzIiwic2NvcGVzIjpbImFjY2Vzcy1hbGV4YSIsImFjY2Vzcy1nb29nbGUiXX0.bZPdCQZ-DZbfr-Y2IAf1e-wER-zgjOKGPmPKBh8vh03qEieTvgIHVCtSKJ25ylHCaVjPGezlub0ggyrLFs1Zo1Js_bKJeYCfCEKnT02RIQe28n7_a8ywejWj3P4Ce6gURsS9Pdd1W9sThWzONJ53aga2pH4oFOZ9Ak4JuijYD5x5Jagr16PYcRgbEShq353qj-jx4Zez2o4EBf6HuDJhsO7ug7SkbNqw4Xhi4LZbd-G9N75mrc6JFr6KcKmZNTnFL-rpzyIJOXov1eHh6VDyfZMS6P--MjnqsCKjpEHuC7ZsB6BpHvgCbhokeOkSDAwe_ga_u3nZn9hTlLsz-MKGvURAsQYfFz52_YQHzIcE75SmCW2dpXRPW3WWWQFiucOAOePndXUcPg172b2SvqYj5Dac4TbWt__ZgBCBpO7THeAP0KUykwkyzIcOzjK11S90FL7AzJR9NPmvqqAgm_sfn1Rdsu3oO1tQE8pG4PrOSbClgz_F0ZsFLDQLBPd6uzOiZaPHfOemxAIXZ3eV1x3DgWtP6a_8-l9DJoRyMDCE6r8ChBGExkUK4Ofp5pxQgeIKggcWijoQL4Mz-H2oZfHlPwyxhooWuBphBB2UxJwPED3ZtjcIorneseZ4z4MrxEhMU6OD0hVkHja1wBHRNVV1loAYhw-ZcPuC7P1_jeS_6XE

			headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token') );

			headers = headers.append("Accept", 'application/json');
			headers = headers.append('Content-Type', 'application/json');

			this.http.get(this.apiUrl+'/api/v1/get-user',{headers: headers}).subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
			});

	  });
	}

	loginUser(data) {
		//here data is object need to provided while calling this from home.ts
		//for ex. this.doLogin({username: 'pal@gmail.com', password: 'pal123'});

	  return new Promise((resolve,reject) => {
			let headers = new HttpHeaders();
			headers = headers.append('Access-Control-Allow-Origin' , '*');
            headers = headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
			//headers =headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers = headers.append("Accept", 'application/json');
			headers = headers.append('Content-Type', 'application/json');

			this.http.post(this.apiUrl+'/signin',JSON.stringify(data),{headers: headers}).subscribe(rdata => {
				resolve(rdata);
			}, err => {
				console.log(err);
				reject(err);
			});

	  });
	}

	registration(registerData)
	{
		return new Promise((resolve,reject) => {
			let headers = new HttpHeaders();
			//headers =headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers = headers.append("Accept", 'application/json');
			headers = headers.append('Content-Type', 'application/json');

			this.http.post(this.apiUrl+'/signup',JSON.stringify(registerData),{headers: headers}).subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
				reject(err);
			});

	  });
	}



	getDevices()
	{
		return new Promise(resolve => {

			let headers = new HttpHeaders();
			//Header is immutable object hence needed to reassigned before use
			//refer https://angular.io/api/common/http/HttpHeaders
			//Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ0OGI4NWY5YjNjZThhOWVmN2IxODRkMWFlYjBmNDY5YWU2OTJlYThkNjA2YmI3M2E0OGVkOWVkZjYxMmE4NmVmOGIyOTEwNTA2NzkwNzAyIn0.eyJhdWQiOiIyIiwianRpIjoiNDQ4Yjg1ZjliM2NlOGE5ZWY3YjE4NGQxYWViMGY0NjlhZTY5MmVhOGQ2MDZiYjczYTQ4ZWQ5ZWRmNjEyYTg2ZWY4YjI5MTA1MDY3OTA3MDIiLCJpYXQiOjE1Mzg3MzY3NzEsIm5iZiI6MTUzODczNjc3MSwiZXhwIjoxNTcwMjcyNzcxLCJzdWIiOiIzIiwic2NvcGVzIjpbImFjY2Vzcy1hbGV4YSIsImFjY2Vzcy1nb29nbGUiXX0.bZPdCQZ-DZbfr-Y2IAf1e-wER-zgjOKGPmPKBh8vh03qEieTvgIHVCtSKJ25ylHCaVjPGezlub0ggyrLFs1Zo1Js_bKJeYCfCEKnT02RIQe28n7_a8ywejWj3P4Ce6gURsS9Pdd1W9sThWzONJ53aga2pH4oFOZ9Ak4JuijYD5x5Jagr16PYcRgbEShq353qj-jx4Zez2o4EBf6HuDJhsO7ug7SkbNqw4Xhi4LZbd-G9N75mrc6JFr6KcKmZNTnFL-rpzyIJOXov1eHh6VDyfZMS6P--MjnqsCKjpEHuC7ZsB6BpHvgCbhokeOkSDAwe_ga_u3nZn9hTlLsz-MKGvURAsQYfFz52_YQHzIcE75SmCW2dpXRPW3WWWQFiucOAOePndXUcPg172b2SvqYj5Dac4TbWt__ZgBCBpO7THeAP0KUykwkyzIcOzjK11S90FL7AzJR9NPmvqqAgm_sfn1Rdsu3oO1tQE8pG4PrOSbClgz_F0ZsFLDQLBPd6uzOiZaPHfOemxAIXZ3eV1x3DgWtP6a_8-l9DJoRyMDCE6r8ChBGExkUK4Ofp5pxQgeIKggcWijoQL4Mz-H2oZfHlPwyxhooWuBphBB2UxJwPED3ZtjcIorneseZ4z4MrxEhMU6OD0hVkHja1wBHRNVV1loAYhw-ZcPuC7P1_jeS_6XE

			headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token') );

			headers = headers.append("Accept", 'application/json');
			headers = headers.append('Content-Type', 'application/json');

			this.http.get(this.apiUrl+'/api/v1/devices',{headers: headers}).subscribe(data => {
				resolve(data);
				console.log(data);
			}, err => {
				console.log(err);
			});

	  });
	}

	forgot(data)
	{
		return new Promise((resolve,reject) => {
			let headers = new HttpHeaders();
			//headers =headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers = headers.append("Accept", 'application/json');
			headers = headers.append('Content-Type', 'application/json');

			this.http.post(this.apiUrl+'/forget',JSON.stringify(data),{headers: headers}).subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
				reject(err);
			});

	  });
	}

	reset(data)
	{
		return new Promise((resolve,reject) => {
			let headers = new HttpHeaders();
			//headers =headers.append('Content-Type', 'application/x-www-form-urlencoded');
			headers = headers.append("Accept", 'application/json');
			headers = headers.append('Content-Type', 'application/json');

			this.http.post(this.apiUrl+'/reset',JSON.stringify(data),{headers: headers}).subscribe(data => {
				resolve(data);
			}, err => {
				console.log(err);
				reject(err);
			});

	  });
	}

	feedback()
	{
		
	}

}
