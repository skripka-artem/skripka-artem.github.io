document.addEventListener('DOMContentLoaded', () => {
    let parent = document.getElementById('container');
    let sourse = document.getElementById('template').textContent;
    let API_KEY = '5723966-7e68f329c0132750f857a39d3';
    let length;
    let footer = document.getElementById('footer');
    let intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio <= 0) return;
        let new_quantity = length + 20;
        getPictures(new_quantity);
    });

    function getPictures(new_quantity) {
        let searchValue = document.getElementsByClassName('input')[0]
            .value;
        let quantity = isNaN(new_quantity) ? 20 : new_quantity;
        console.log('searchValue = ', searchValue);
        let URL =
            'https://pixabay.com/api/?key=' +
            API_KEY +
            '&q=' +
            encodeURIComponent(searchValue) +
            '&per_page=' +
            quantity;

        fetch(URL)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('ERROR fetching data!');
            })
            .then((data) => {
                console.log(data);
                length = data.hits.length;
                let templateAPI = _.template(sourse);
                parent.innerHTML = templateAPI(data);
            })
            .catch(function (error) {
                console.log('Error --- ', error);
            });
        intersectionObserver.observe(footer);
    }

    document.getElementsByClassName('input')[0].addEventListener('input', getPictures);
});
