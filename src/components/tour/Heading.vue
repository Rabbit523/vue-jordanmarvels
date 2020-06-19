<template>
  <div
    v-bind:class="[
      this.type == 'content'
        ? 'title-container content'
        : this.type == 'booking'
        ? 'title-container booking'
        : this.type == 'booking-total'
        ? 'title-container booking-total'
        : 'title-container featured'
    ]"
  >
    <div class="title">
      <h1 class="title-1 text-left mb-0" v-if="this.type == 'content'">
        {{ heading }}
      </h1>
      <h2 class="title-1 text-left mb-0" v-else-if="this.type == 'featured'">
        {{ heading }}
      </h2>
      <h2 class="title-2 text-left mb-0" v-else>
        {{ heading }}
      </h2>
    </div>
    <div class="cost" v-if="this.type == 'booking-total'">
      <h1 class="title-3 text-left mb-0">
        {{ cost }}
      </h1>
    </div>
    <div class="link" v-if="this.type == 'featured'">
      <a class="btnlink" :href="`${btnLink}`">{{ btnText }} </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    heading: String,
    type: String,
    btnText: String,
    btnLink: String,
    cost: String
  }
};
</script>
<style lang="scss">
.title-container {
  &.content {
    margin-left: 98px;
  }
  &.booking {
    margin-left: 60px;
  }
  &.booking-total {
    margin: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &.featured {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 150px 0 130px;
  }
}
</style>
