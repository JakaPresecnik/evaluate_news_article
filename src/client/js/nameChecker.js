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
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(res => buildEvaluation(res))
    .catch((error) => {
      console.log(error)
    });
  }

function buildEvaluation(response) {
  document.getElementById('results').innerHTML = `<p><strong>Showing results for text:</strong> <q>${response.text}</q></p><p><strong>Polarity:</strong> ${response.polarity}</p><p><strong>Subjectivity:</strong> ${response.subjectivity}</p>`
}

export { checkForName }
