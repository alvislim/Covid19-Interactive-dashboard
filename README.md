# Covid Interactive Website Scope

## Table of Content
- [Project Scope and Approach](#Project-Scope-and-Approach)
- [Technology utilized](#Technology-utilized)
- [Difficulties](#Difficulties)
- [User Stories and Wireframes](#User-Stories-and-Wireframes)

## Project Scope and Approach
The scope of the project is being able to fetch data dynamically from open source APIs, to present the important data in the most user friendly way.
The APIs that are utilized are
1. https://covid19api.com
2. https://newsapi.org/
3. https://www.chartjs.org/

The website will comprise of 4 components. 
1. The first component consists of the title of the website, and timestamp of data being fetched
2. The second component consists of the Global total COVID statistics
3. The Third component consists of a search and filter function, based on country available in the APIs. A DIV that shows the countries stats sorted by <Highest Confirmed Covid Cases>. A DIV that shows the top 10 news from BBC. And lastly, the search result.
4. The Fourth component consists of a chart that will show the Top 20 Country Covid statistic, sorted based on the number of highest confirmed case.

## Technology utilized 
1. Jquery to manipulate DOM element and append the information retrieved from APIs
2. Chosen plugin for the search and filter function
3. Ajax call to fetch data from open source APIs
4. Javascript for the logic of looping, filtering through objects and arrays
5. Flexbox to make the website responsive
6. ChartJS for pie and line graph
7. HTML and CSS 

## Difficulties
I encountered some issues while trying to push the changes into GitHub, that was solved but at a later stage. As my main priority is to  complete the scope of the project. Thus there is no version control, but instead a completed project.

# User Stories and Wireframes
 ### UserStory 1 
 As the developer of the website, I would like to code the skeleton of the website layout and to be able to console.log the desired data <br />
 <br />
 **APIs that is being utilized** <br />
 1. https://covid19api.com <br />

**Requirement** <br />
 1. the layout of HTML based on the wireFrame <br />
 2. ensure that the data being console.log is the desired data<br />

 ### UserStory 2
 As the developer of the website, I would like to append the dynamic data on both component 1 and 2.<br />
 <br />
 **APIs that is being utilized** 
 1. https://api.covid19api.com/summary <br />

**Requirement** <br />
 <br />
 1. On component 1, to append the date time stamp (in a readable format) base on the time the information is being refreshed <br />
 2. On component 2, to append the Global total number of confirmed cases, total fatalities, total recovered, new confirmed cases, new fatalities and new recovered. <br />

 ### UserStory 3
 As the developer of the website, I would like to create a search and filter function that will populate the data based on user input in component 3 <br />
 <br />
 **APIs that is being utilized** 
 1. https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-01-01T13:13:30Z <br />

**Requirement** <br />
 <br />
 1. On component 3.1, the search and filter function can accept a input when user clicks on the option, or via a text search <br />
 2. To append the data dynamically to an empty DIV => <div id="newDiv"> <br />
 
 ### UserStory 4
 As the developer of the website, I would like to append the countries covid stats and top 10 news in component 3 <br />
 <br />
 **APIs that is being utilized**
 1. https://api.covid19api.com/summary <br />
 2. https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0297c9e7cfd0454192b97fc6e35188d3 <br />

**Requirement** <br />
 <br />
 1. On component 3.2, to append the number of countries covid stats which includes country, confirmed, deaths and recovered. Sort by highest confirmed cases <br />
 2. On componenet 3.3, to append the top 10 news from BBC, which includes images of the news, the URL to the news and the URL image of the news. <br />

 
 ### UserStory 5
 As the developer of the website, I would like to create a graph with information of the covid cases base on country and to brush up on the UI<br />
 <br />
 **APIs that is being utilized**
 1. https://api.covid19api.com/summary <br />
 2. https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js <br />

	 **Requirement** <br />
	  <br />
		1. On component 4, to append the top 20 countries covid statistic based on the highest number of confirmed cases, which includes country name, confirmed cases, death and recovered in a graph <br />
		2. To further brush up the UI of the website <br />
		3. To format the numbers that are shown in front end with comma separator <br />
	
	**Extra** <br />
	1. To try to implement a pie chart to show the global statistic
