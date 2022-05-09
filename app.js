const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      num: 5,
      name: "",
      conName: "",
      fullName: "",
    };
  },
  watch: {
    // watch
    //name (newValue, oldValue){...}
    conName(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + "Ryabtsev";
      }
    },
  },
  computed: {
    //   fullName() {
    //     console.log("running again");
    //     if (this.name === "") {
    //       return "";
    //     }
    //     return this.conName + "  " + "ryabtsev";
    //   },
  },
  methods: {
    outputFullName() {
      console.log("running again");
      if (this.name === "") {
        return "";
      }
      return this.conName + "  " + "ryabtsev";
    },
    confirmedName() {
      console.log(this.conName);

      this.conName = this.name;
    },
    addNumber(num) {
      this.counter = this.counter + num;
    },
    removeNumbers(num) {
      this.counter = this.counter - num;
    },
    getName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("submitted");
    },
    resetInput() {
      this.conName = "";

      this.name = "";
    },
  },
});

app.mount("#events");
