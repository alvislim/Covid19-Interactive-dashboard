$(() => {

    //to initialized the ID as a chosen API for search and filter function
    $('#countries').chosen();

    // Events when user click on submit 
    const searchSubmit = $('#submit').click(function () {
        //to clear the child of the div when user perform another search
        $('#newDiv').empty();
        //user input
        let country = $('#countries').val();
        //Get function on the total country stats based on user input
        $.ajax({
            url: `https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-01-01T13:13:30Z`,
            success: function (result) {
                // console.log(result)
                var myResult = JSON.stringify(result);

                //Headers for the information that we are gonna retrieve
                let $countryHeader = $('<span>').text(`Country: ${country}`).attr('id', 'countryHeader');
                $('#newDiv').append($countryHeader);
                //Header for date 
                let $dateHeader = $('<th>').text('Date').addClass('resultHeader').attr('id', 'dateHeader').addClass("tableHeader");
                //Header for confirmed cases
                let $confirmHeader = $('<th>').text('Confirmed Cases').addClass('resultHeader').attr('id', 'confirmHeader').addClass("tableHeader");
                //Header for Deaths
                let $deathHeader = $('<th>').text('Deaths').addClass('resultHeader').attr('id', 'deathHeader').addClass("tableHeader");
                //Header for total recovered
                let $recoveredHeader = $('<th>').text('Recovered').addClass('resultHeader').attr('id', 'recoveredHeader').addClass("tableHeader");
                //Header for total active cases
                let $activeHeader = $('<th>').text('Active').addClass('resultHeader').attr('id', 'activeHeader').addClass("tableHeader");
                //Header for province
                let $provinceHeader = $('<th>').text('Province').addClass('resultHeader').addClass("tableHeader");

                let $secondDiv = $('<table>').attr('id', 'secondDiv');

                ($secondDiv).append($dateHeader, $confirmHeader, $deathHeader, $recoveredHeader, $activeHeader, $provinceHeader);
                $('#newDiv').append($secondDiv);

                // console.log(result);

                /// to append user country selection in a div, sort by latest date order
                for (let i = result.length - 1; i < result.length; i--) {
                    //date of input value
                    let $date = $('<td>').text(`${result[i].Date.replace('T00:00:00Z', '')}`).addClass(`result`).attr('id', 'date');
                    //total confirmed cases of input value
                    let $confirmed = $('<td>').text(`${result[i].Confirmed.toLocaleString()}`).addClass(`result`).attr('id', 'confirmed');

                    //total death based on input value 
                    let $death = $('<td>').text(`${result[i].Deaths.toLocaleString()}`).addClass(`result`).attr('id', 'death');

                    //total recovered cases based on input value
                    let $recovered = $('<td>').text(`${result[i].Recovered.toLocaleString()}`).addClass(`result`).attr('id', 'recovered');

                    //total active cases based on input value
                    let $active = $('<td>').text(`${result[i].Active.toLocaleString()}`).addClass(`result`).attr('id', 'active');

                    //province based on input value
                    let $provinces = $('<td>').text(`${result[i].Province}`).addClass(`result`);
                    //Append all of the data to designated header
                    $provinceHeader.append($provinces);
                    $dateHeader.append($date);
                    $confirmHeader.append($confirmed);
                    $deathHeader.append($death);
                    $recoveredHeader.append($recovered);
                    $activeHeader.append($active);

                    ///To append as NA for province, as not all country has province. e.g. singapore
                    if (result[i].Province === '') {
                        $provinces.text('N/A');
                    }

                }
            },
            error: function () {
                alert(`We apologized, ${country} is not included in our DataBase`);
                location.reload();
            }

        });

        const totalStatistic = $.ajax({
            url: `https://api.covid19api.com/summary`,
            success: function (information) {
                var finalResult = JSON.stringify(information);
                let lengthOfData = Object.values(information)[1];

                //to sort countries confirmed cases by highest to lowest and initialized it as topFiveData
                var topFiveData = lengthOfData.sort(function (a, b) {
                    return b.TotalConfirmed - a.TotalConfirmed
                })

                let $thirdRow = $('<div>').attr('id', 'thirdRow');
                $('#par2').append($thirdRow);
                //Header for the country
                let $topFiveCountry = $('<div>').text('Country -> Sorted By Highest Confirmed Case').addClass('topFive');
                //Header for the confirmed cases
                let $topFiveConfirmed = $('<div>').text('Confirmed').addClass('topFive');
                //Header for the deaths
                let $topFiveDeath = $('<div>').text('Deaths').addClass('topFive');
                //Header for the recovered
                let $topFiveRecover = $('<div>').text('Recovered').addClass('topFive');

                /// Graph variable declaration 1. countries, 2. confirmed, death
                const countriesGraph = [];
                const confirmedGraph = [];
                const deathGraph = [];
                const recoveredGraph = [];

                //to loop through the object and append all of the relevant information
                for (let i = 0; i < lengthOfData.length; i++) {

                    let $countryTopFive = $('<div>').text(`${topFiveData[i].Country.toLocaleString()}`).addClass('childOfTopFive');
                    $topFiveCountry.append($countryTopFive);

                    let $confirmedTopFive = $('<div>').text(`${topFiveData[i].TotalConfirmed.toLocaleString()}`).addClass('childOfTopFive');
                    $topFiveConfirmed.append($confirmedTopFive);

                    let $deathsTopFive = $('<div>').text(`${topFiveData[i].TotalDeaths.toLocaleString()}`).addClass('childOfTopFive');
                    $topFiveDeath.append($deathsTopFive);

                    let $recoverTopFive = $('<div>').text(`${topFiveData[i].TotalRecovered.toLocaleString()}`).addClass('childOfTopFive');
                    $topFiveRecover.append($recoverTopFive);

                    $thirdRow.append($topFiveCountry, $topFiveConfirmed, $topFiveDeath, $topFiveRecover);
                }
                for (let i = 0; i <= 20; i++) {
                    countriesGraph.push(topFiveData[i].Country);
                    confirmedGraph.push(topFiveData[i].TotalConfirmed);
                    deathGraph.push(topFiveData[i].TotalDeaths);
                    recoveredGraph.push(topFiveData[i].TotalRecovered);
                }
                var myChart = document.getElementById('myChart').getContext('2d');

                var chart = new Chart(myChart, {
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

        /// API call to fetch the news 
        const news = $.ajax({
            url: `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0297c9e7cfd0454192b97fc6e35188d3`,
            success: function (news) {
                let objectLength = Object.values(news)[2];
                // console.log(objectLength[1]);
                console.log(objectLength);
                // loop through the whole of news object and append the relevant information
                for (let i = 0; i <= objectLength.length; i++) {
                    // objectLength[i].title
                    // objectLength[i].urlToImage
                    // objectLength[i].url
                    let $image = $('<img>').attr('src', objectLength[i].urlToImage).css('width', '400px').addClass('newsImage');
                    let $title = $('<a>').attr('href', objectLength[i].url).text(objectLength[i].title).addClass('newsTitle');
                    $('#news').append($image, $title);
                }
            }
        });

    });

});


