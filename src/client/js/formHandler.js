
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)



    // Client.retriveData(baseURL, zip, country, apiKey)
    // .then((data) => {
    //   document.getElementById('results').innerHTML = `<p> ${data.weather[0].main} </p><p> ${data.main.temp}</p>`
    //   console.log(data)
    // })


    console.log("::: Form Submitted :::")

    //.then(res => res.json())
    //.then(res => console.log(res));
    // .then(function(res) {
    //     document.getElementById('results').innerHTML =`<p> ${res.message} </p>`
    // })
}



export { handleSubmit }
