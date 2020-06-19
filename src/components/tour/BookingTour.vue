<template>
  <section class="text-left">
    <div class="booking-content">
      <heading heading="Available Dates" type="booking"></heading>
      <div class="calendar">
        <b-calendar
          v-model="date"
          @context="onContext"
          :hide-header="true"
          width="300px"
          today-variant="cur-day"
          locale="en-US"
        ></b-calendar>
      </div>
      <heading heading="Number of Tickets" type="booking"></heading>
      <div class="tickets">
        <div class="number-box">
          <img src="@/assets/svg/minus.svg" />
          <p>{{ ticket }}</p>
          <img src="@/assets/svg/add.svg" />
        </div>
        <label>Sub Total: $240,00</label>
      </div>
      <heading heading="Coupon Code" type="booking"></heading>
      <div class="coupons">
        <input type="text" />
        <img src="@/assets/svg/correct.svg" />
      </div>
      <heading heading="Total:" type="booking-total" cost="$240,00"></heading>
      <div class="btn-box">
        <button class="btn">Book now</button>
      </div>
    </div>
    <div class="payment-type">
      <img src="@/assets/png/visa.jpg" />
      <img src="@/assets/png/master-card.jpg" />
      <img src="@/assets/png/payfort.jpg" />
    </div>
  </section>
</template>

<script>
import heading from "./Heading";

export default {
  name: "BookingTour",
  components: { heading },
  data() {
    return {
      date: "",
      ticket: 1,
      context: null
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    }
  }
};
</script>

<style lang="scss">
.booking-content {
  background: #f1ece5;
  padding: 50px 0;
  .calendar {
    display: flex;
    justify-content: center;
    margin: 25px 60px 25px 10px;
    .form-control {
      background: transparent;
      border: none;
      &:focus {
        box-shadow: none;
      }
      .btn-outline-cur-day {
        background: #ffc120;
        color: #fff;
      }
    }
    footer {
      display: none;
    }
  }
  .tickets {
    margin: 25px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .number-box {
      display: flex;
      align-items: center;
      p {
        font-size: 23px;
        color: #c7b299;
        padding: 0 15px;
        margin: 0;
      }
      img {
        width: 22px;
      }
    }
    label {
      margin: 0;
    }
  }
  .coupons {
    margin: 25px 60px;
    position: relative;
    input {
      border: none;
      width: 100%;
      height: 45px;
      padding: 10px 15px;
      border-radius: 5px;
    }
    img {
      width: 22px;
      position: absolute;
      right: 50px;
      top: 40px;
    }
  }
  .btn-box {
    margin: 25px 60px;
    .btn {
      width: 100%;
      background: #ffc120;
      text-transform: uppercase;
      font-weight: 600;
      position: relative;
      height: 45px;
      &:after {
        content: "";
        background-image: url(/img/btn_right_arrow.fa98a571.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 9px;
        height: 14px;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
    }
  }
}
.payment-type {
  background: #fff;
  display: flex;
  justify-content: center;
  img {
    width: 80px;
  }
}
</style>
