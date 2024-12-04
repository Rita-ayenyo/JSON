const jsonUrl =
'https://raw.githubusercontent.com/Rita-ayenyo/JSON/refs/heads/main/JSON%20RITA/admission.json'
fetch(jsonUrl)
.then(response => response.json())
.then(data => { visualizeData(data);
})
.catch(error => console.error('Error fetching data:', error));
