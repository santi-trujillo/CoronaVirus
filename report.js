//import axios from 'https://unpkg.com/axios/dist/axios.min.js'
const axios = window.axios

function getData() {
    console.log('Axios', axios)
    axios.get('https://corona-stats.online/?format=json').then(function(response) {
        var countryList = response.data.data
        console.log(countryList)
        //for (var index = 0; index < countryList.length; index++) {
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

        var ulAc = document.getElementById('data')

        var liActive = document.createElement('li')
        var liCases = document.createElement('li')
        var liMillion = document.createElement('li')
        var liConfirmed = document.createElement('li')
        var liContinent = document.createElement('li')
        var liCountry = document.createElement('li')
        var liCode = document.createElement('li')
        var liCritical = document.createElement('li')
        var liDeaths = document.createElement('li')
        var liDeaMil = document.createElement('li')
        var liRecovered = document.createElement('li')
        var liTests = document.createElement('li')
        var liTestMil = document.createElement('li')
        var liTodayCases = document.createElement('li')
        var liTodayDeaths = document.createElement('li')
        var liUpdated = document.createElement('li')
        var liCountryInfo = document.createElement('img')

        liActive.innerText = 'active: ' + active
        liCases.innerText = 'cases: ' + cases
        liMillion.innerText = 'casesPerOneMillion: ' + casesPerOneMillion
        liConfirmed.innerText = 'confirmed: : ' + confirmed
        liContinent.innerText = 'continent: : ' + continent
        liCountry.innerText = 'country: : ' + countryName
        liCode.innerText = 'countryCode: : ' + countryCode
        liCritical.innerText = 'critical: : ' + critical
        liDeaths.innerText = 'deaths: : ' + deaths
        liDeaMil.innerText = 'deathsPerOneMillion: : ' + deathsPerOneMillion
        liRecovered.innerText = 'recovered: : ' + recovered
        liTests.innerText = 'tests: : ' + tests
        liTestMil.innerText = 'testsPerOneMillion: : ' + testsPerOneMillion
        liTodayCases.innerText = 'todayCases: : ' + todayCases
        liTodayDeaths.innerText = 'todayDeaths: : ' + todayDeaths
        liUpdated.innerText = 'updated: : ' + updated
        liCountryInfo.setAttribute('src', countryInfo)

        ulAc.appendChild(liActive)
        ulAc.appendChild(liCases)
        ulAc.appendChild(liMillion)
        ulAc.appendChild(liConfirmed)
        ulAc.appendChild(liContinent)
        ulAc.appendChild(liCountry)
        ulAc.appendChild(liCode)
        ulAc.appendChild(liCritical)
        ulAc.appendChild(liDeaths)
        ulAc.appendChild(liDeaMil)
        ulAc.appendChild(liRecovered)
        ulAc.appendChild(liTests)
        ulAc.appendChild(liTestMil)
        ulAc.appendChild(liTodayCases)
        ulAc.appendChild(liTodayDeaths)
        ulAc.appendChild(liUpdated)
        ulAc.appendChild(liCountryInfo)
        }
    })
}
