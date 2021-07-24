<template>
  <div id="app">
    <div class="page">
      <span>What needs to be done?</span>
      <br />
      <span>{{ checkedNames }}</span>
      <br />
      <label
        ><input
          type="checkbox"
          id="one"
          value="Learn React!"
          v-model="checkedNames"
        />Learn React!</label
      ><br />
      <label
        ><input
          type="checkbox"
          id="two"
          value="Make HomeWork!"
          v-model="checkedNames"
        />Make HomeWork!</label
      ><br />
      <label
        ><input
          type="checkbox"
          id="three"
          value="Relaxation!"
          v-model="checkedNames"
        />Relaxation!</label
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedNames: [],
    };
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  margin: auto;
  background-color: #444;

  .page {
    display: flex;
    flex-direction: column;
    width: 31%;
    height: 40%;
    margin: 0.5% auto;
    padding: 1rem;
    background: #ccc;
    border: 0.125rem solid #000;

    span {
      font-size: 2.25vw;
      margin: 0% auto;
    }

    label {
      font-size: 2.5vw;
      vertical-align: middle;
      margin: 1% 0.5%;
    }
    
    input {
      transform: scale(1.75);
      vertical-align: middle;
      margin: 1%;
    }
  }
}
</style>
