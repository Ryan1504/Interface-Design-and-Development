const { createApp } = Vue;
const app = createApp({});

app.component("app_my_post", {
  data: function () {
    return {
      status: "",
      statPosts: [],
    };
  },
  template: `
    <div class = "container">
    <div class ="row">
    <h2>My Post</h2>
    </div>
      <p>Status: </p>
      <input type="text" v-model="status" />
      <button v-on:click="add">Add</button>
      <ul>
        <li v-for="(status, index) in statPosts" :key="index">
          {{ status }}
          <button v-on:click="remove(index)">Remove</button>
        </li>
      </ul>
    </div>
  `,

  methods: {
    add() {
      this.statPosts.unshift(this.status);
      this.status = ""; // clear the input
    },

    remove(index) {
      this.statPosts.splice(index, 1);
    },
  },
});

app.mount("#app");
