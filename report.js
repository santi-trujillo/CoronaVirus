//import axios from 'https://unpkg.com/axios/dist/axios.min.js'
const axios = window.axios //Es la imporatacion de la libreria que tengo en html

var tdTitles = ['ACTIVE', 'CASES', 'CASESPERONEMILLION', 'CONFIRMED', 'CONTINENT', 'COUNTRY',
                'COUNTRYCODE', 'CRITICAL', 'DEATHS', 'DEATHSPERONEMILLION', 'RECOVERED','TEST',
                'TESTSPERONEMILLION', 'TODAYCASES', 'TODAYDEATHS', 'UPDATED', 'FLAG'] //Una variable a la que se le asino un valor que es igual a un array el cual son los titulos de cada columna de datos
var content = document.querySelector('.trIndex')
var tableData = document.getElementById('data') //Una variable con un valor asignado el cual es obtener el valor de un elemento, en este caso un data

function addDataToCell (info) {
    var tdInfo = document.createElement('td')
    tdInfo.innerText = info
    return tdInfo
} //Una funcion con su nombre y parametro correspondiente en la cual creamos una variable en la que se le asigna la creacion de un elemento o tag de html llamdo td en este caso
    // llamamos la variable creada enteriormente y la sobreescribimos con el valor del parametro que le pasamos a la funcion y pedimos a la funcion que nos retorne la variable tdInfo

function getData() { //Una variable con su nombre y un parametro vacio

    axios.get('https://corona-stats.online/?format=json').then(function(response) { // Llamamos la variable global axios a la cual le pedimos que traiga la informacion de url y la deje disponible y que cree una funcion con el response de esa info

        var countryList = response.data.data //Una variable con un valor atribuido el cual es el data del data que se encuenntra en el response de la funcion creada

        /*for (var index = 0; index < tdTitles.length; index++ ) {
            var title = tdTitles[index]
            var tdData = document.createElement('td')
            tdData.innerText = title
            content.appendChild(tdData)
        }*/ //Un for (bucle o loop) en el cual inicializamos en 0, le damos la condicion si es mayor a le valor de length que se encuentra en la variable tdTitle y por ultimo le decimos que le sume mas uno a su valor

        for (var title of tdTitles) {
            content.appendChild(addDataToCell(title))
        }

        //for (var index = 0; index < countryList.length; index++) {
            // countryList[index]
        for (var country of countryList) { //Un for con una variable que depende de una variable externa

            var trData = document.createElement('tr')

            var tdActive = addDataToCell(country.active) //Una variable en la que se agrega la informacion de un elemento que llamo con la funcion que se le asigna la cual esta adentro de la variable country y se llama active
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
                tdUpdated, tdCountryInfo] //Una variable en la que se asigna un valor array el cual contiene todas las variables que se crearon anteriormente

            tdCountryInfo.setAttribute('src', country.countryInfo.flag)

            trData.append(...allData)

            tableData.appendChild(trData) //Llamo una variable padre en la que con la funcion appendchild llamo la variable hijo y esto agrega el nodo en la parte final de la lista de elementos
        }
    })
}
