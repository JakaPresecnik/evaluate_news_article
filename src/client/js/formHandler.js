//variables
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=69f7a79ea60d1f056d03a841887913dc'
const zip = '1000'
const country = ',si&units=metric'

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)


    Client.retriveData(baseURL, zip, country, apiKey)
    .then((data) => {
      document.getElementById('results').innerHTML = `<p> ${data.weather[0].main} </p><p> ${data.main.temp}</p>`
      console.log(data)
    })


    console.log("::: Form Submitted :::")

    //.then(res => res.json())
    //.then(res => console.log(res));
    // .then(function(res) {
    //     document.getElementById('results').innerHTML =`<p> ${res.message} </p>`
    // })
}



export { handleSubmit }
