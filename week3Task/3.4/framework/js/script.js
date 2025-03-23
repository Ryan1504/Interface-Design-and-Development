Vue.createApp({
  data() {
    return {
      name: "",
      password: "",
      repassword: "",
      osOptions: ["Android", "IOS", "Windows"],
      selectedOS: "Android",
      selectedModel: "",
      phoneModels: {
        Android: [
          "HTC 10",
          "Nokia 6",
          "Samsung Galaxy 7",
          "IDD VIOS Non Android",
        ],
        IOS: [
          "IPhone 6s",
          "IPhone 6s Plus",
          "IPhone 7",
          "IDD VIOS Non Android",
        ],
        Windows: [
          "HP Elite x3",
          "Microsoft Lumia 950",
          "Microsoft Lumia 950 XL",
          "IDD Windows Non Android",
        ],
      },
    };
  },

  computed: {
    passwordChecker() {
      if (
        this.password !== this.repassword &&
        this.password &&
        this.repassword
      ) {
        return "Passwords do not match";
      }
      return "";
    },
  },
}).mount("#app");
