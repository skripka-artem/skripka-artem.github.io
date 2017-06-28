(function() {
  'use strict';

  var container = document.getElementById('root'),
    source = document.getElementById('article').textContent,
    compiled = _.template(source),
    apiUrl = 'https://pixabay.com/api/?key=5748773-95b30dc3ce1789fbe99be3f8e&per_page=10';

  var promise = fetch(apiUrl).then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('ERROR while fetching!');
  }).then(function(data) {
    console.log(data);
    var articles = _.map(data.hits, function(item) {
      return {
        img: item.previewURL

      };
    });

    console.log(articles);

    render(compiled, articles, container);
  }).catch(function(error) {
    console.log(error);
  });

  function render(template, data, parent) {
    var htmlString = '';

    _.forEach(data, function(item) {
      htmlString += template(item);
    });

    parent.innerHTML += htmlString;
  }
})();


