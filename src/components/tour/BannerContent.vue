<template>
  <div class="banner-component">
    <img
      class="d-block img-fluid w-100"
      :src="require(`../../assets/png/${svg_banner}`)"
      alt="image slot"
    />

    <div class="fields-wrap">
      <b-container>
        <b-row>
          <b-col>
            <div class="location-text">
              <img src="@/assets/images/icons/pin.svg" />
              <span>Al- Khazneh, Petra</span>
            </div>
            <div class="banner-large-text">Petra by Day & Night</div>
            <div class="button-group">
              <button class="btn btn-outline">History & Heritage</button>
              <button class="btn btn-outline">Local Tours</button>
            </div>
            <div class="money-text">$240,00</div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerContent",
  props: {
    svg_banner: String
  }
};
</script>
<style lang="scss">
.banner-component {
  position: relative;
  max-height: 660px;
  overflow: hidden;

  .fields-wrap {
    position: absolute;
    top: 70%;
    left: 0;
    width: 100%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #ffffff;
    .location-text {
      display: flex;
      img {
        width: 18px;
      }
      span {
        padding-left: 15px;
        font-size: 20px;
      }
    }
    .banner-large-text {
      font-weight: bold;
      font-size: 58px;
      line-height: 1.3;
    }
    .button-group {
      display: flex;
      margin: 15px 0;
      .btn-outline {
        border: 2px solid #fff;
        color: #fff;
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .money-text {
      color: #ffc120;
      font-weight: 700;
      font-size: 23px;
    }
  }
}
</style>
