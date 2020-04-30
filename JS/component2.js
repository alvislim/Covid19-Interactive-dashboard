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
                let $dateHeader = $('<div>').text('Date').addClass('resultHeader').attr('id', 'dateHeader').addClass("tableHeader");
                //Header for confirmed cases
                let $confirmHeader = $('<div>').text('Confirmed Cases').addClass('resultHeader').attr('id', 'confirmHeader').addClass("tableHeader");
                //Header for Deaths
                let $deathHeader = $('<div>').text('Deaths').addClass('resultHeader').attr('id', 'deathHeader').addClass("tableHeader");
                //Header for total recovered
                let $recoveredHeader = $('<div>').text('Recovered').addClass('resultHeader').attr('id', 'recoveredHeader').addClass("tableHeader");
                //Header for total active cases
                let $activeHeader = $('<div>').text('Active').addClass('resultHeader').attr('id', 'activeHeader').addClass("tableHeader");
                //Header for province
                let $provinceHeader = $('<div>').text('Province').addClass('resultHeader').addClass("tableHeader");

                let $secondDiv = $('<div>').attr('id', 'secondDiv');

                ($secondDiv).append($dateHeader, $confirmHeader, $deathHeader, $recoveredHeader, $activeHeader, $provinceHeader);
                $('#newDiv').append($secondDiv);

                // console.log(result);

                /// to append user country selection in a div, sort by latest date order
                for (let i = result.length - 1; i < result.length; i--) {
                    //date of input value
                    let $date = $('<div>').text(`${result[i].Date.replace('T00:00:00Z', '')}`).addClass(`result`);
                    //total confirmed cases of input value
                    let $confirmed = $('<div>').text(`${result[i].Confirmed.toLocaleString()}`).addClass(`result`);

                    //total death based on input value 
                    let $death = $('<div>').text(`${result[i].Deaths.toLocaleString()}`).addClass(`result`);

                    //total recovered cases based on input value
                    let $recovered = $('<div>').text(`${result[i].Recovered.toLocaleString()}`).addClass(`result`);

                    //total active cases based on input value
                    let $active = $('<div>').text(`${result[i].Active.toLocaleString()}`).addClass(`result`);

                    //province based on input value
                    let $provinces = $('<div>').text(`${result[i].Province}`).addClass(`result`);
                    //Append all of the data to designated header
                    $provinceHeader.append($provinces);
                    $dateHeader.append($date);
                    $confirmHeader.append($confirmed);
                    $deathHeader.append($death);
                    $recoveredHeader.append($recovered);
                    $activeHeader.append($active);

                    console.log(result[i]);

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
                    let $image = $('<img>').attr('src', objectLength[i].urlToImage).addClass('newsImage');
                    let $title = $('<a>').attr('href', objectLength[i].url).text(objectLength[i].title).addClass('newsTitle');
                    $('#news').append($title, $image);
                }
            }
        });

    


    const emptyNewDiv = $('#empty').click(function () {
        $('#newDiv').empty();
    })

});