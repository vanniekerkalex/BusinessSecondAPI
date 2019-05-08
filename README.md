# BusinessSecondAPI
Calculates the business seconds on a work day between two given times.

Files:
* `app.js` : This file runs the server and waits for requests to the end point.
* `test.py` : Testing file that send requests to the server and checks the output.
* `deploy.sh` : Deployment file that will install dependencies and execute app.js.

## Installation

`Please make sure that you have the package manager NPM as well Node.js installed on your machine.`

1. Clone the "BusinessSecondAPI" repository to your system. This will create a folder called "BusinessSecondAPI" containing all the necessary files.

```
git clone https://github.com/vanniekerkalex/BusinessSecondAPI.git
```

2. Set permissions and execute the deployment file in the repository directory as below. This will install the necessary dependencies required and execute `app.js`.

```
chmod 777 deploy.sh
```
```
./deploy.sh
```

3. Open your browser and continue to the end point here:

```
http://localhost:3000/calc/
```

4. Enter the times according to ISO 8601 format at the end of the end point as follows and hit return:


```
http://localhost:3000/calc/start_time&end_time
```
```
http://localhost:3000/calc/00:05:10&00:05:27
```

The result will be displayed in your browser. The result is the difference between the `end_time` and the `start_time` which in this case is:


```
17
```
