import Picture from '../../router/Picture/Picture.vue'




export default {
  props: ['elem'],
  data: function ()  {
    return {
      elems:[],
      name: 'DialogCustom',
      showDialog: false
    }
  },
  components: {
    Picture
  },

}
