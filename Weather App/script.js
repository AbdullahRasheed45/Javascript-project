const url = 'https://weather1060.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '375f016503mshce21510dc36f38fp15857ajsna7e8013ebff0',
		'X-RapidAPI-Host': 'weather1060.p.rapidapi.com'
	}
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
fetchData();
