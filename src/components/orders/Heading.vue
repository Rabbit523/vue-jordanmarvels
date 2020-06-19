<template>
  <div
    v-bind:class="[
      this.type == 'order' ? 'title-container order' : 'title-container profile'
    ]"
  >
    <div class="title">
      <h1 class="title-1 text-left mb-0">
        {{ heading }}
      </h1>
    </div>
    <div class="platinum" v-if="this.type == 'profile'">
      <span>Platinum</span>
      <img src="@/assets/svg/crown.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    heading: String,
    type: String
  }
};
</script>
<style lang="scss">
.title-container {
  &.order {
    margin-left: 98px;
  }
  &.profile {
    margin: 0 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .platinum {
      span {
        margin-right: 15px;
      }
      img {
        width: 20px;
      }
    }
  }
}
</style>
