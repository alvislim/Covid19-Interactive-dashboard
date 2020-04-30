$(() => {
    /// to fetch the global covid statistic and append it in a div
    const globalStats = $.ajax({
        url: 'https://api.covid19api.com/summary',
        success: function (results) {

            summaryResult = Object.values(results);


            const dailyConfirmedCase = [];
            const newFatality = [];
            const dailyRecovered = [];

            //variables to store the current date time stamp is fetching
            let currentDate = Object.values(results)[2].replace(/(T|Z)/gi, ' ');

            //append the date time stamp
            let dateTimeStamp = $('<h4>').text(`Information accurate as of ${currentDate}`).addClass('datetimestamp');
            $('#headerTitle').append(dateTimeStamp);

            //total confirmed cases til date
            let $first = $('<div>').text(`${summaryResult[0].TotalConfirmed.toLocaleString()}`).attr('id', 'today');
            $('#first').append($first);

            //todays new confirmed cases
            let $second = $('<div>').text(`${summaryResult[0].NewConfirmed.toLocaleString()}`).attr('id', 'total');
            $('#second').append($second);
            dailyConfirmedCase.push(summaryResult[0].NewConfirmed);

            //todays new deaths
            let $third = $('<div>').text(`${summaryResult[0].NewDeaths.toLocaleString()}`).attr('id', 'newFate');
            $('#third').append($third);
            newFatality.push(summaryResult[0].NewDeaths);

            //total recovered til date
            let $fourth = $('<div>').text(`${summaryResult[0].TotalRecovered.toLocaleString()}`).attr('id', 'newRec');
            $('#fourth').append($fourth);

            //daily newly recovered
            let $fifth = $('<div>').text(`${summaryResult[0].NewRecovered.toLocaleString()}`).attr('id', 'totRec');
            $('#fifth').append($fifth);
            dailyRecovered.push(summaryResult[0].NewRecovered);

            //total deaths til date
            let $sixth = $('<div>').text(`${summaryResult[0].TotalDeaths.toLocaleString()}`).attr('id', 'totDeath');
            $('#sixth').append($sixth);

            const ctx = $('#globalChart');
            const chart = new Chart(globalChart, {
                type: 'pie',
                data: {
                    datasets: [
                        {
                            data: [dailyConfirmedCase, newFatality, dailyRecovered],
                            backgroundColor: ['#f1c40f', '#2ecc71', '#e74c3c'],
                        },
                    ],
                    labels: ['New Confirmed Cases', 'New Fatalities', 'New Recovered'],
                },
                options: {
                    title: {
                        display: true,
                        text: 'Global COVID stats'
                    },
                    elements: {
                        arc: {
                            borderWidth: 0
                        }
                    },
                }
            })

        }, error: function () {
            alert('Something went wrong');
            location.reload();
        }
    });
})