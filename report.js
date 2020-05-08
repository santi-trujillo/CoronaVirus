//import axios from 'https://unpkg.com/axios/dist/axios.min.js'
const axios = window.axios

function getData() {
    console.log('Axios', axios)

    axios.get('https://corona-stats.online/?format=json').then(function(response) {

    var countryList = response.data.data

    console.log(countryList)

    var trTitle = document.createElement('tr')

    var content = document.querySelector('.trIndex')

    tdTitles = ['active', 'cases', 'casesPerOneMillion', 'confirmed', 'continent', 'country',
                'countryCode', 'critical', 'deaths', 'deathsPerOneMillion', 'recovered','tests',
                'testsPerOneMillion', 'todayCases', 'todayDeaths', 'updated', 'flag']

    for (var index = 0; index < tdTitles.length; index++ ) {
        var title = tdTitles[index]
        var tdData = document.createElement('td')
        tdData.innerText = title
        content.appendChild(tdData)
    }


    //for (var index = 0; index < countryList.length; index++) {
        // countryList[index]
    for (var country of countryList) {
                //var country = countryList[index]
        console.log(country.countryInfo.flag)
        var active = country.active
        var cases = country.cases
        var casesPerOneMillion = country.casesPerOneMillion
        var confirmed = country.confirmed
        var continent = country.continent
        var countryName = country.country
        var countryCode = country.countryCode
        var critical = country.critical
        var deaths = country.deaths
        var deathsPerOneMillion = country.deathsPerOneMillion
        var recovered = country.recovered
        var tests = country.tests
        var testsPerOneMillion = country.testsPerOneMillion
        var todayCases = country.todayCases
        var todayDeaths = country.todayDeaths
        var updated = country.updated
        var countryInfo = country.countryInfo.flag

        var tableData = document.getElementById('data')

        var trData = document.createElement('tr')

        var tdActive = document.createElement('td')
        var tdCases = document.createElement('td')
        var tdMillion = document.createElement('td')
        var tdConfirmed = document.createElement('td')
        var tdContinent = document.createElement('td')
        var tdCountry = document.createElement('td')
        var tdCode = document.createElement('td')
        var tdCritical = document.createElement('td')
        var tdDeaths = document.createElement('td')
        var tdDeaMil = document.createElement('td')
        var tdRecovered = document.createElement('td')
        var tdTests = document.createElement('td')
        var tdTestMil = document.createElement('td')
        var tdTodayCases = document.createElement('td')
        var tdTodayDeaths = document.createElement('td')
        var tdUpdated = document.createElement('td')
        var tdCountryInfo = document.createElement('img')

        tdActive.innerText = /*'active: ' +*/ active
        tdCases.innerText = /*'cases: ' +*/ cases
        tdMillion.innerText = /*'casesPerOneMillion: ' +*/ casesPerOneMillion
        tdConfirmed.innerText = /*'confirmed: : ' +*/ confirmed
        tdContinent.innerText = /*'continent: : ' +*/ continent
        tdCountry.innerText = /*'country: : ' +*/ countryName
        tdCode.innerText = /*'countryCode: : ' +*/ countryCode
        tdCritical.innerText = /*'critical: : ' +*/ critical
        tdDeaths.innerText = /*'deaths: : ' +*/ deaths
        tdDeaMil.innerText = /*'deathsPerOneMillion: : ' +*/ deathsPerOneMillion
        tdRecovered.innerText = /*'recovered: : ' +*/ recovered
        tdTests.innerText = /*'tests: : '*/ + tests
        tdTestMil.innerText = /*'testsPerOneMillion: : ' +*/ testsPerOneMillion
        tdTodayCases.innerText = /*'todayCases: : ' +*/ todayCases
        tdTodayDeaths.innerText = /*'todayDeaths: : ' +*/ todayDeaths
        tdUpdated.innerText = /*'updated: : ' +*/ updated
        tdCountryInfo.setAttribute('src', countryInfo)

        tableData.appendChild(tdActive)
        tableData.appendChild(tdCases)
        tableData.appendChild(tdMillion)
        tableData.appendChild(tdConfirmed)
        tableData.appendChild(tdContinent)
        tableData.appendChild(tdCountry)
        tableData.appendChild(tdCode)
        tableData.appendChild(tdCritical)
        tableData.appendChild(tdDeaths)
        tableData.appendChild(tdDeaMil)
        tableData.appendChild(tdRecovered)
        tableData.appendChild(tdTests)
        tableData.appendChild(tdTestMil)
        tableData.appendChild(tdTodayCases)
        tableData.appendChild(tdTodayDeaths)
        tableData.appendChild(tdUpdated)
        tableData.appendChild(tdCountryInfo)

        tableData.appendChild(trData)
        }
    })
}
