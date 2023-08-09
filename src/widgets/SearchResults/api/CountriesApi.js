async function countriesRequest () {
    const response = await fetch("./data.json");
    const data = await response.json();
    console.log (data);
}

export default countriesRequest;