<template>
  <div class="relative home-view overflow-hidden">
    <div id="banner">
      <b-carousel :interval="4000" indicators background="#ababab">
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <bannerContent svg_banner="banner4.jpg" />
      </b-carousel>
    </div>

    <div class="flex-section">
      <section class="section order">
        <orderList />
      </section>
      <section class="section profile">
        <profile />
      </section>
    </div>

    <section class="section">
      <featured-in></featured-in>
    </section>
  </div>
</template>

<script>
import BannerContent from "../components/orders/BannerContent.vue";
import OrderList from "../components/orders/OrderList.vue";
import Profile from "../components/orders/Profile.vue";
import FeaturedIn from "../components/home/FeaturedIn";

export default {
  name: "Orders",
  components: {
    bannerContent: BannerContent,
    orderList: OrderList,
    profile: Profile,
    "featured-in": FeaturedIn
  }
};
</script>
<style lang="scss">
.flex-section {
  display: flex;
  .section {
    &.order {
      flex: 2;
      padding-left: 32px;
    }
    &.profile {
      flex: 1;
      background: #f1ece5;
    }
  }
}
</style>
