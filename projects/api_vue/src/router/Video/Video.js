import Sitebar from '../../component/Sitebar/Sitebar.vue'

export default {
  data()  {
    return {
      elems:[]


    }
  },
  components: {
    Sitebar
 },
  created() {
    fetch('https://pixabay.com/api/videos?key=5574618-9f2251e0f5fdbede0f9cb5e69')
      .then(response => response.json())
      .then(json => {


          json.hits.forEach((item) => {
            this.elems.push(item)
          })
          console.log( this.elems)

        }

      )
  }
  ,
}
