fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN"
)// Write a fetch request to the Giphy API
// Then log the response in the console
// set up the promise
.then(function(response)  {
    return(response.json())
})
.then(function(data) {
    console.log(data);
})