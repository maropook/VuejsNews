
const vm = new Vue({
  el: '#app',
  data() {
    return {
      results: [],
      info:null,
      django:null
    }
  },
  mounted() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=PXryzF2iNpyTiwECgLWBDmSEoUNGk7Xg")
    .then(response => {this.results = response.data.results})
    axios
    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    // .then(response => (this.info = response))全て
    .then(response => (this.info = response.data.bpi.USD.code))

    axios.get("http://localhost:8000/api_v2/?format=json")
    .then(response => {this.django = response})
  },
});
