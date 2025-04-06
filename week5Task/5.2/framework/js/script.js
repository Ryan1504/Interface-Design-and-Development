const { createApp } = Vue;
const app = createApp({});

app.component("my-menu", {
  props: ["menu"],
  template: `
    <ul>
      <li v-for="item in menu">
        {{item}}
      </li>
    </ul>
  `,
});

app.mount("#app");
