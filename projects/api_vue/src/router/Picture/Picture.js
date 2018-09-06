import Modal from '../../component/Modal/Modal.vue'
import Sitebar from '../../component/Sitebar/Sitebar.vue'
import _ from 'lodash';
export default {
  
  data()  {
    return {
      elems:[],
      name: 'DialogCustom',
      showDialog: false ,

    }
  },
  components: {
     Modal, Sitebar
  },
  created() {
    fetch('https://pixabay.com/api/?key=5574618-9f2251e0f5fdbede0f9cb5e69')
      .then(response => response.json())
      .then(json => {
          json.hits.forEach((item) => {
            this.elems.push(item)
          })
          console.log( this.elems)


        }

      )
  },
  methods: {
    clicked(){
      console.log (this.largeImageURL)
    }
  }
}

