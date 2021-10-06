# in-the-works
A simple app that displays which projects a Github user is currently working on - based on most recent commits.

🔗 [Take a look!](http://malasalm.fi/)

Building this app has been really good practice for using React to fetch and display data from an API. It's quite basic - so far, its only function is to carry out a search for a single Github user to display some of their key profile info, all their public repos, and some key info about each repo.  

My overall goal for this project is to replicate a good and useful user experience while also improving the program structure and code quality.  

I will continue with this project over the next few weeks by:
- creating a node server to store an authentication token to access more of the API
- switching the layout, fully, to react-bootstrap for a smarter layout and an overall better user interface
- creating a filtering system for the repos that displays: 
  - a users' most loved coding language
  - repos by language choice
  - switches the repo card order based on most recently updated, most commits, most stars, most forks, etc

## How to run it
- clone the repo
- inside the app directory run:
```
yarn
```
- then:
```
yarn start
```




