export default {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick()">按钮</button>
      <p>{{name}}</p>
      <span>in js</span>
    </div>`,
  data() {
    return{
      message: "hello Vuejs",
      name: "suo",
    }
  },
  methods: {
    btnClick(){
      console.log("按钮被点击");
    }
  },
}