<template>
  <div class="relative home-view overflow-hidden">
    <div id="banner">
      <b-carousel :interval="4000" indicators background="#ababab">
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <bannerContent svg_banner="banner3.jpeg" />
      </b-carousel>
    </div>

    <div class="flex-section">
      <section class="section content">
        <mainTourContent />
      </section>
      <section class="booking">
        <bookingTour />
      </section>
    </div>

    <section class="section mt-5">
      <featured></featured>
    </section>

    <section class="section">
      <featured-in></featured-in>
    </section>
  </div>
</template>

<script>
import BannerContent from "../components/tour/BannerContent.vue";
import MainTourContent from "../components/tour/MainTourContent.vue";
import BookingTour from "../components/tour/BookingTour.vue";
import Featured from "../components/tour/Featured";
import FeaturedIn from "../components/home/FeaturedIn";

export default {
  name: "Tour",
  components: {
    bannerContent: BannerContent,
    mainTourContent: MainTourContent,
    bookingTour: BookingTour,
    featured: Featured,
    "featured-in": FeaturedIn
  }
};
</script>
<style lang="scss">
.flex-section {
  display: flex;
  .section {
    &.content {
      flex: 3;
      padding-left: 32px;
    }
  }
  .booking {
    flex: 1;
  }
}
</style>
