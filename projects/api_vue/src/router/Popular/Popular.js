export default {
  data: function ()  {
    return {
      elems:[]
    }
  },
  created() {
    fetch('https://pixabay.com/api/?key=5574618-9f2251e0f5fdbede0f9cb5e69&order=popular')
      .then(response => response.json())
      .then(json => {
          json.hits.forEach((item) => {
            this.elems.push(item)
          })
          console.log( this.elems)


        }

      )
  },
}
