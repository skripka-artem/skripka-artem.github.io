export default {
  data()  {
    return {
      elems:[],
      seach: {}
    }
  },
  methods: {

    addSeach() {
      fetch('https://pixabay.com/api/?key=5574618-9f2251e0f5fdbede0f9cb5e69&q='+this.seach.title)
        .then(response => response.json())
        .then(json => {
            json.hits.forEach((item) => {
              this.elems.push(item)
            })
            console.log( this.elems)

          }

        )
    },
    deleteSeach() {
      this.seach.title = ''
      this.elems = []
      console.log( this.seach.title)
      console.log(this.elems)
    },


  }
}
