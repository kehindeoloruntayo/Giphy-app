export default class GifController {
    static searchGifs(name, successCallback, errorCallback) {
        let request = new XMLHttpRequest();
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        request.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                successCallback(response);
            } else {
                errorCallback('No search results found. Make sure your spellings are correct or try a more general keyword.');
            }
        };

        request.open("GET", url, true);
        request.send();
    }

    static getTrendingGifs(successCallback, errorCallback) {
        let request = new XMLHttpRequest();
        const urlTrend = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;
        request.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                successCallback(response);
            }
        };

        request.open("GET", urlTrend, true);
        request.send();
    }

    static getRandomGif(successCallback, errorCallback) {
        let request = new XMLHttpRequest();
        const urlRandom = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`;
        request.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                successCallback(response);
            }
        };

        request.open("GET", urlRandom, true);
        request.send();
    }

    static uploadGif(successCallback, errorCallback) {
        const formData = new FormData();
        const fileInput = document.querySelector('#upload');

        if (fileInput.files.length > 0) {
            formData.append('file', fileInput.files[0]);
            let request = new XMLHttpRequest();
            const urlUpload = `https://upload.giphy.com/v1/gifs?api_key=${process.env.API_KEY}&username=Kehindeoloruntayo&file=true`;
            request.onload = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        const response = JSON.parse(this.responseText);
                        successCallback(response);
                    } else {
                        errorCallback('Failed to upload the GIF. Please check your request.');
                    }
                }
            };

            request.open("POST", urlUpload, true);
            request.send(formData);
        } else {
            errorCallback('Please select a file to upload.');
        }
    }
}  