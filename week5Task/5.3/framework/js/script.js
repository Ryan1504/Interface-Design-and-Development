// Defining the list of units
var units = [
  {
    code: "ICT10001",
    desc: "Problem Solving with ICT",
    cp: 12.5,
    type: "Core",
  },
  { code: "COS10005", desc: "Web Development", cp: 12.5, type: "Core" },
  {
    code: "INF10003",
    desc: "Introduction to Business Information Systems",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "INF10002",
    desc: "Database Analysis and Design",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "COS10009",
    desc: "Introduction to Programming",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "INF30029",
    desc: "Information Technology Project Management",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "ICT30005",
    desc: "Professional Issues in Information Technology",
    cp: 12.5,
    type: "Core",
  },
  {
    code: "ICT30001",
    desc: "Information Technology Project",
    cp: 12.5,
    type: "Core",
  },
];

// Component for detailed unit view
const Unit = {
  data() {
    return { units };
  },
  computed: {
    filteredUnits() {
      const unitId = this.$route.params.id; //get the unit code from the url
      return this.units.find((u) => u.code === unitId);
    },
  },
  template: `
    <div v-if="filteredUnits">
      <h3>Unit Details</h3>
      <p><strong>Code:</strong> {{ filteredUnits.code }}</p>
      <p><strong>Description:</strong> {{ filteredUnits.desc }}</p>
      <p><strong>Credit Points:</strong> {{ filteredUnits.cp }}</p>
      <p><strong>Type:</strong> {{ filteredUnits.type }}</p>
    </div>
    <div v-else>
      <p>Unit not found.</p>
    </div>
  `,
};

// Creating the VueRouter
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/unit/:id",
      component: Unit,
    },
  ],
});

// Create the Vue app
const app = Vue.createApp({});

// Component to show lookup table
app.component("app-lookup2", {
  data() {
    return { units };
  },
  template: `
    <div>
      <h2>Unit List</h2>
      <table border="1" cellpadding="5">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Credit Points</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unit in units" :key="unit.code">
            <td>{{ unit.code }}</td>
            <td>{{ unit.desc }}</td>
            <td>{{ unit.cp }}</td>
            <td>{{ unit.type }}</td>
            <td><router-link :to="'/unit/' + unit.code">View</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
});

// Mount everything
app.use(router);
app.mount("#app");
