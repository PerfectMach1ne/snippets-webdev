<script>
export default {
  data() {
    return {
      awesome: true,
      awesomer: true,
      type: '',
      ok: true
    }
  }
}
</script>

<template>
  <div class="wut">
    <button @click="awesome = !awesome">spy cloak toggle</button>
    <h1 v-if="awesome">vłe dżejes is sooo kuuuul.....</h1>
    <button @click="awesomer = !awesomer">wazzaaap</button>
    <h1 v-if="awesomer">Vłe.js 3 time</h1>
    <h1 v-else>Vłe.js 2 jumpscare!!!!!</h1>

    <input v-model="type">
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>

    <button @click="ok = !ok">wee</button>
    <template v-if="ok">
      <h1>Tittle</h1>
      <p>paragraph 1</p>
      <p>poiragraph 2</p>
    </template>
  </div>
</template>

<style>
.wut {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
  
button {
  width: fit-content;
}

input {
  width: 120px;
}
</style>
<!-- what -->
