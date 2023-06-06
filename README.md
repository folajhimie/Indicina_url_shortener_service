# indicina_shortener_url
This is a URL shortening service where you enter a URL Long URL and it returns a short URL.

A Breakdown of How the URL SHORTENER SERVICE was created and how to run the project.

1) Created the project using npm init --yes, installed the express, mongoose, ejs, and shortid in my dependencies and nodemon in my devDependencies.

2) Created the connect.js file where my database credentials is, then created my server.js where i connected my database file and then started my server.. which ran successful with PORT number http://localhost:8090/. run the project using npm run start to start the server and the you would get this url http://localhost:8090/. click on it to view the front aspect to test the project.

3) Created my Model file where I structured the schema for the Database. Then created the controller where i would write all my logic for the code.

4) In the Controller file, My first Endpoint which is the shortUrls is to first get the value in the req.body from the input tab we have in our index.ejs file, where we would populate our longUrl but in the creating, we would automatically generate a shortid for the short Url Link and then it would be saved in the Mongo Altas.

5) Then the second Endpoint is to through the short Url Link that has been generated when you click on it, It would redirect you to the Long Url Link.

6) The Third EndPoint works by putting in the short url, then it Would filter through the database to check which short url link matches in the database an d when it finds it, it would return a JSON response.


How does it work 

Note: That when encoding the Long Url. I decided to take the approach of creating a table and when you generate the Link, Click on the short Link and directs you to the Long Url. 

You also have a Link underneath you, when you can go from the encoded page to the Decoded Page.

For the Decoded page. enter the short Link and it would return the Long Url