# flexmoney-backend

## Story
Sukhdam Yoga Classes are one of the premiere yoga institues of india, they have there schools setup in different different cities, where they teach yoga.
<br/>
They wanted us to create a platform for online onboarding of students, so that they dont have to visit the center always, and can also help in increasing there popularity and customer, their classes are of month on month basis, and the fees is also supposed to be paid in that manner, you can only pay fees once in a month, no matter which day you paid the fees, one will only be eligible for the remaining days of the month

## My Solution
I Created a simple Registeration form for students which will ask for most of the required information which can be easily provided online, and then will create a user dashboard, from where the student can pay the fees, right now the dashboard only has batch selection and fees paying facility but it can grow up to have much more
<br/>
The fees was supposed to be paid on a month on month basis and after the completion of month the usability of the dashboard has to be removed so for that, implimented a job scheduler which in the morning of japanese time which is typically around midnight of india will update all the active users dashboard to inactive, and will have payment option available to them
<br/>

## Technical Details
### Technology Used
Architecture - Model-View-Controller with layers of Services that are abstractions to manipulate the data. <br/>
API - JavaScript (NodeJS) , function based <br/>
Database - MongoDB <br/>
Database Querying - Mongoose <br/>
Database Hosting - Mongo Atlas <br/>
Auth - JSON web token <br/>
API Hosting - Vercel <br/>
Frontend - NextJS, JavaScript <br/>
Developer Tooling - Prettier <br/>

### Reasons for selection of MongoDB (NoSQL) server over any SQL server
1. Easy to setup, and faster to use
2. More Familarity with MongoDB and realted libraries
3. MongoDB atlas works as a great and reasonable database service as per our use, we might even be able to work in its free tier for our current specifications

## Models
#### User Model
![user-model](https://user-images.githubusercontent.com/56102033/207389533-018edc94-e95a-49ec-98ff-def56c1a09cf.png)

<br/><br/>
#### Bill Model
![bill-model](https://user-images.githubusercontent.com/56102033/207389876-1460e248-6322-45e5-9c7f-e659ecc9b687.png)

<br/> <br/>
#### Relation between the 2 Collections is of common unique email id
![relation](https://user-images.githubusercontent.com/56102033/207391457-79109dfb-4151-450c-b01c-9feef62f9867.png)

## API LLDs
  1. Registeration API <br/>
      ![reg-1](https://user-images.githubusercontent.com/56102033/207396379-c42b4830-5618-4e6d-a841-c06a8dcc177d.png)  
      ![reg-2](https://user-images.githubusercontent.com/56102033/207396670-c3a45e22-8375-4ef1-a660-b6d6928b850b.png)


  <br/><br/>
  
  2. Login API <br/>
      ![log](https://user-images.githubusercontent.com/56102033/207397620-5615cbb9-38a1-423e-ab72-8a3a490d27e0.png)

   <br/><br/>
  
  3. Payment API or Update API or Status Update API <br/>
      ![update-status](https://user-images.githubusercontent.com/56102033/207398401-5a543d63-f301-42ed-8597-787b44b5b955.png)

      
