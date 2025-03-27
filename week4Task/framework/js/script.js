Vue.createApp({
  data() {
    return {
      guess: 0,
      secret: 0,
      msg: "",
    };
  },

  methods: {
    genRandomNum() {
      return Math.floor(Math.random() * 100) + 1;
    },

    checkGuess() {
      if (this.guess < this.secret) {
        this.msg = "Guess higher";
      } else if (this.guess > this.secret) {
        this.msg = "Guess lower";
      } else {
        this.msg = "You got it!!";
      }
    },

    startOver() {
      this.msg = "Start guessing";
      this.secret = this.genRandomNum();
    },

    giveUp() {
      this.msg = "The secret number is " + this.secret;
    },
  },

  created() {
    this.msg = "Start guessing";
    this.secret = this.genRandomNum();
  },
}).mount("#app");
