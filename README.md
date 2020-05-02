# Covid Interactive Website Scope

## Table of Content
- [Project Demo](#Project-Demo)
- [Project Scope and Approach](#Project-Scope-and-Approach)
- [Technology utilized](#Technology-utilized)
- [Difficulties](#Difficulties)
- [User Stories and Wireframes](#User-Stories-and-Wireframes)
- [Extra Implementation](#Extra-Implementation)

## Project Demo
https://alvislim.github.io/Covid19-Interactive-dashboard/ <br />

## Project Scope and Approach
The scope of the project is being able to fetch data dynamically from open source APIs, to present the important data in the most user friendly way.
The APIs that are utilized are
- https://covid19api.com
- https://newsapi.org/
- https://www.chartjs.org/

The website will comprise of 4 components. 
1. The first component consists of the title of the website, and timestamp of data being fetched
2. The second component consists of the Global total COVID statistics
3. The third component consists of a search and filter function, based on country available in the API. A DIV that shows the countries stats sorted by Highest Confirmed Covid Cases. A DIV that shows the top 10 news from BBC. And lastly, the search result.
4. The fourth component consists of a chart that will show the Top 20 Country Covid statistic, sorted based on the number of highest confirmed case.

## Technology utilized 
1. Jquery to manipulate DOM element and append the information retrieved from APIs
2. Chosen plugin for the search and filter function
3. Ajax call to fetch data from open source APIs
4. Javascript for the logic of looping, filtering through objects and arrays
5. Flexbox to make the website responsive
6. ChartJS for pie and line graph
7. HTML and CSS 
8. Datatable plugin for a table that has search, filter and sort function

## Difficulties
I encountered some issues while trying to push the changes into GitHub and that was solved but at a later stage. My main priority is to  complete the scope of the project, thus there is no version control or frequent commit, but instead a near completed source code.
When trying to implement new javascript plugins to enhance the website, having difficulties in understanding / implementing the APIs, takes up a lot of time to understand / consume.

For the search function in component 3.1, the API only returns 14 of Arpil to 28 of April Covid Statistic. Due to the limitation of the API, that is the best up to date information I am able to retrieve for the Users. 

API URL for reference: https://api.covid19api.com/live/country/south-africa/status/confirmed/date/2020-03-21T13:13:30Z

# User Stories and Wireframes
### WireFrame
![WireFrame Image](https://github.com/alvislim/Covid19-Interactive-dashboard/blob/master/Wireframe/Untitled.png)

 ### UserStory 1
 As a user, I would like to see the global statistic of Covid19 cases and the date time stamp that the information is being fetched.<br />
 <br />
 **APIs that is being utilized** 
 - https://api.covid19api.com/summary <br />

**Requirement** <br />
 <br />
 1. On component 1, to append the date time stamp (in a readable format) base on the time the information is being refreshed <br />
 2. On component 2, to append the Global total number of confirmed cases, total fatalities, total recovered, new confirmed cases, new fatalities and new recovered. <br />

 ### UserStory 2
 As a User, I would like to have a search and filter function that will populate the data based on user input <br />
 <br />
 **APIs that is being utilized** 
 - https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-01-01T13:13:30Z <br />
 - https://api.covid19api.com/summary <br />

**Requirement** <br />
 <br />
 1. On component 3.1, the search and filter function can accept either a input when user clicks on the option, or a text search <br /> **Due to the limitation of the API, information is only being fetched from 14 April - 28 April** <br />
 2. On component 3.2, to have a table that is able to sort, filter and search on the covid19 countries statistic  <br />
 
 ### UserStory 3
 As a user, I would like to have to see the top 10 news from BBC <br />
 <br />
 **APIs that is being utilized**
 - https://api.covid19api.com/summary <br />
 - https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0297c9e7cfd0454192b97fc6e35188d3 <br />

**Requirement** <br />
 <br />
1. On componenet 3.3, to append the top 10 news from BBC, which includes images of the news, the URL to the news and the URL image of the news. <br />

 
 ### UserStory 4
 As a user, I would like to have a graph with information of the covid cases base on country <br />
 <br />
 **APIs that is being utilized**
 - https://api.covid19api.com/summary <br />
 - https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js <br />

**Requirement** <br />
	  <br />
		1. On component 4, to append the top 20 countries covid statistic based on the highest number of confirmed cases, which includes country name, confirmed cases, death and recovered in a graph <br />
		2. To further improve the UI of the website <br />
		3. To format the numbers that are shown in front end with a comma separator <br />
	
## Extra Implementation
- Implemented a pie chart to show the global covid statistic underneath component 4.  <br />
- Added Remove search results button 
