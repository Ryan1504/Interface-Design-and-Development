Vue.createApp({
  data() {
    return {
      weight: "",
      height: "",
    };
  },

  computed: {
    bmi() {
      if (this.weight && this.height) {
        let heightInCm = this.height / 100;
        return this.weight / (heightInCm * heightInCm);
      }
      return null;
    },

    msg() {
      if (this.bmi) {
        if (this.bmi < 18.5) {
          return "underweight";
        }
        if (this.bmi > 18.5 && this.bmi < 25) {
          return "normalWeight";
        }
        if (this.bmi > 25 && this.bmi < 30) {
          return "overweight";
        }
        if (this.bmi >= 30) {
          return "obese";
        }
      }
      return null;
    },
  },
}).mount("#app");
