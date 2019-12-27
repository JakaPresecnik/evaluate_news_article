function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const request = new Request('http://localhost:8081/test', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({formText: inputText}),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
    });
    fetch(request)
  }
//1.asynchronous function to get the data from openweathermap with parameters entered by user
const retriveData = async(baseURL, zip, country, apiKey) => {
  const res = await fetch (baseURL+zip+country+apiKey)
  try {
    const data = await res.json();
    return data;
  }catch (error) {
    console.log('error', error);
  }
}
export { retriveData, checkForName }
