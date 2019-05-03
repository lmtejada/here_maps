<template>
  <div class="home">
    <input type="text" v-model="query">
    <button type="button" v-on:click="search()">Search</button>
    <SampleMap
      ref="map"
      appId="l7wrPOvd7W9Ezp1h2eeT"
      appCode="MTHgpHj5GUzypNFP0ONGEg"
      lat="37.7397"
      lng="-121.4252"
      width="100%"
      height="835px"
    />
  </div>
</template>

<script>
import SampleMap from "@/components/SampleMap.vue";

export default {
  name: "home",
  components: {
    SampleMap
  },
  data() {
    return {
      query: "Starbucks"
    };
  },
  methods: {
    search() {
      this.$refs.map.places(this.query);
    }
  }
};
</script>
