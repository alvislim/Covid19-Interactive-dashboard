$(() => {

    //to initialized the ID as a chosen API for search and filter function

    const totalStatistic = $.ajax({
        url: `https://api.covid19api.com/summary`,
        success: function (information) {

            var finalResult = JSON.stringify(information);
            let lengthOfData = Object.values(information)[1];

            //to sort countries confirmed cases by highest to lowest and initialized it as topFiveData
            var topFiveData = lengthOfData.sort(function (a, b) {
                return b.TotalConfirmed - a.TotalConfirmed
            })

            /// Graph variable declaration 1. countries, 2. confirmed, death
            const countriesGraph = [];
            const confirmedGraph = [];
            const deathGraph = [];
            const recoveredGraph = [];

            //to loop through the object and append all of the relevant information
            for (let i = 0; i < lengthOfData.length; i++) {

                let $countryTopFive = $('<td>').text(`${topFiveData[i].Country.toLocaleString()}`).addClass('childOfTopFive');

                let $confirmedTopFive = $('<td>').text(`${topFiveData[i].TotalConfirmed.toLocaleString()}`).addClass('childOfTopFive');

                let $deathsTopFive = $('<td>').text(`${topFiveData[i].TotalDeaths.toLocaleString()}`).addClass('childOfTopFive');

                let $recoverTopFive = $('<td>').text(`${topFiveData[i].TotalRecovered.toLocaleString()}`).addClass('childOfTopFive');

                let $tr = $('<tr>');
                $tr.append($countryTopFive, $confirmedTopFive, $deathsTopFive, $recoverTopFive)
                $('#par2').append($tr);
            }
            for (let i = 0; i <= 20; i++) {
                countriesGraph.push(topFiveData[i].Country);
                confirmedGraph.push(topFiveData[i].TotalConfirmed);
                deathGraph.push(topFiveData[i].TotalDeaths);
                recoveredGraph.push(topFiveData[i].TotalRecovered);
            }

            const ctx = $('#myChart');
            const chart = new Chart(myChart, {
                type: 'bar',
                data: {
                    labels: countriesGraph,
                    datasets: [
                        {
                            label: 'Confirmed',
                            data: confirmedGraph,
                            backgroundColor: '#f1c40f',
                        },
                        {
                            label: 'Death',
                            data: deathGraph,
                            backgroundColor: '#2ecc71',
                        },
                        {
                            label: 'Recovered',
                            data: recoveredGraph,
                            backgroundColor: '#e74c3c',
                        },
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Top 20 Country'
                    }
                }
            })
        }
    });

    // API call to fetch the news 
    const news = $.ajax({
        url: `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=169f8d6c33484af1bc5ed5c55f892187`,
        success: function (news) {
            let objectLength = Object.values(news)[2];
            // console.log(objectLength[1]);
            console.log(objectLength);
            // loop through the whole of news object and append the relevant information
            for (let i = 0; i <= objectLength.length; i++) {

                let $image = $('<img>').attr('src', objectLength[i].urlToImage).css('width', '545px').addClass('newsImage');
                let $title = $('<a>').attr('href', objectLength[i].url).text(objectLength[i].title).addClass('newsTitle');
                let $description = $('<p>').text(objectLength[i].description);
                $('#news').append($title, $image, $description);
            }
        }
    });

});
