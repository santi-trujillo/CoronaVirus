//import axios from 'https://unpkg.com/axios/dist/axios.min.js'
const axios = window.axios

var tdTitles = ['active', 'cases', 'casesPerOneMillion', 'confirmed', 'continent', 'country',
                'countryCode', 'critical', 'deaths', 'deathsPerOneMillion', 'recovered','tests',
                'testsPerOneMillion', 'todayCases', 'todayDeaths', 'updated', 'flag']
var content = document.querySelector('.trIndex')
var tableData = document.getElementById('data')

function addDataToCell (info) {
    var tdInfo = document.createElement('td')
    tdInfo.innerText = info
    return tdInfo
}

function getData() {

    axios.get('https://corona-stats.online/?format=json').then(function(response) {

        var countryList = response.data.data

        for (var index = 0; index < tdTitles.length; index++ ) {
            var title = tdTitles[index]
            var tdData = document.createElement('td')
            tdData.innerText = title
            content.appendChild(tdData)
        }

        //for (var index = 0; index < countryList.length; index++) {
            // countryList[index]
        for (var country of countryList) {

            var trData = document.createElement('tr')

            var tdActive = addDataToCell(country.active)
            var tdCases = addDataToCell(country.cases)
            var tdMillion = addDataToCell(country.casesPerOneMillion)
            var tdConfirmed = addDataToCell(country.confirmed)
            var tdContinent = addDataToCell(country.continent)
            var tdCountry = addDataToCell(country.country)
            var tdCode = addDataToCell(country.countryCode)
            var tdCritical = addDataToCell(country.critical)
            var tdDeaths = addDataToCell(country.deaths)
            var tdDeaMil = addDataToCell(country.deathsPerOneMillion)
            var tdRecovered = addDataToCell(country.recovered)
            var tdTests = addDataToCell(country.tests)
            var tdTestMil = addDataToCell(country.testsPerOneMillion)
            var tdTodayCases = addDataToCell(country.todayCases)
            var tdTodayDeaths = addDataToCell(country.todayDeaths)
            var tdUpdated = addDataToCell(new Date(country.updated).toDateString())
            var tdCountryInfo = document.createElement('img')

            var allData = [tdActive, tdCases, tdMillion, tdConfirmed, tdContinent, tdCountry, tdCode, tdCritical,
                tdDeaths, tdDeaMil, tdRecovered, tdTests, tdTestMil, tdTodayCases, tdTodayDeaths,
                tdUpdated, tdCountryInfo]

            tdCountryInfo.setAttribute('src', country.countryInfo.flag)

            trData.append(...allData)

            tableData.appendChild(trData)
        }
    })
}
