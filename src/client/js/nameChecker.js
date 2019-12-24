function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
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
