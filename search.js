// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // API key
    gapi.client.setApiKey('AIzaSyDr5CnnKug3WswUj28Vr5kS_uxdkZ7eNg0');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        regionCode: 'US',
        part: 'snippet',
        publishedAfter: '2018-07-01T00:00:00Z',
        publishedBefore: '2018-07-31T00:00:00Z',
        type: 'video',
        maxResults: 10,
        //q: 'Music+Rock+Metal',
        order: 'viewCount',
        videoCategoryId: 10
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}
