<template>
  <section class="text-left">
    <heading heading="Order Lists" type="order"></heading>
    <div class="order-list">
      <div class="order">
        <div class="figure">
          <img src="@/assets/order.png" />
        </div>
        <div class="description">
          <span>paid</span>
          <h2>Petra by Day & Night</h2>
          <p>Order #:823829 / Date:24 January 2020</p>
        </div>
        <div class="btn-group">
          <h2>$240, <sup>00</sup></h2>
          <button class="btn">order again</button>
        </div>
      </div>
      <div class="order">
        <div class="figure">
          <img src="@/assets/order.png" />
        </div>
        <div class="description">
          <span>paid</span>
          <h2>Petra by Day & Night</h2>
          <p>Order #:823829 / Date:24 January 2020</p>
        </div>
        <div class="btn-group">
          <h2>$240, <sup>00</sup></h2>
          <button class="btn">order again</button>
        </div>
      </div>
      <div class="order">
        <div class="figure">
          <img src="@/assets/order.png" />
        </div>
        <div class="description">
          <span>paid</span>
          <h2>Petra by Day & Night</h2>
          <p>Order #:823829 / Date:24 January 2020</p>
        </div>
        <div class="btn-group">
          <h2>$240, <sup>00</sup></h2>
          <button class="btn">order again</button>
        </div>
      </div>
      <div class="order">
        <div class="figure">
          <img src="@/assets/order.png" />
        </div>
        <div class="description">
          <span>paid</span>
          <h2>Petra by Day & Night</h2>
          <p>Order #:823829 / Date:24 January 2020</p>
        </div>
        <div class="btn-group">
          <h2>$240, <sup>00</sup></h2>
          <button class="btn">order again</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import heading from "./Heading";

export default {
  name: "OrderList",
  components: { heading }
};
</script>

<style lang="scss">
.order-list {
  display: flex;
  flex-direction: column;
  margin: 25px 150px 25px 100px;
  .order {
    display: flex;
    background: #f1ece5;
    border-radius: 15px;
    margin-bottom: 15px;
    .figure {
      margin: 10px;
      img {
        width: auto;
        height: 100%;
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      flex: 2;
      color: #50473d;
      span {
        background: #ffc120;
        color: #000;
        text-transform: uppercase;
        border-radius: 5px;
        width: 50px;
        font-weight: bold;
        text-align: center;
        font-size: 15px;
        margin-top: 10px;
      }
      h2 {
        font-weight: bold;
      }
    }
    .btn-group {
      display: flex;
      flex-direction: column;
      flex: 1;
      background: #ffc120;
      padding: 15px;
      align-items: center;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      h2 {
        font-weight: bold;
      }
      .btn {
        background: #fff;
        width: 100%;
        text-transform: uppercase;
        border-radius: 5px;
        font-weight: bold;
      }
    }
  }
}
</style>
