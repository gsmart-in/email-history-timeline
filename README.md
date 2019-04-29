# Email History and Timeline
This is a project to capture the history of inventions and developments that contributed to better email. The current version captures most of inventions that have contributed to email as a system.

This is the criteria to add an event or invention or software to the timeline.
* Introduced something for the first time
* became very popular 

# Building the project locally
* [Install GatsbyJS](https://www.gatsbyjs.org/tutorial/part-zero/)
* Clone this project
* in the project folder run:
```bash
npm run develop
```
* open localhost:8000

# Making of the project
The project is made on top of [GatsbyJS](https://www.gatsbyjs.org).
Why Gatsby? 

If you look closely, this project has three parts. The main events(inventions), associated date, people and the reference links. 

Once we have that information, add HTML/CSS styling and generate the page that displays to you.

GatsbyJS is perfect for such a scenario. data + html+ styling &rarr; generate the static HTML site.

The 'data' part of the history is in the src/data/email-history.hjson

[HJSON](https://hjson.org) is an enhanced version of JSON. Importantly, HJSON has multi-line string support. So picked HJSON as the data format.
