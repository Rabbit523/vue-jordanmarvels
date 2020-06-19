<template>
  <section class="text-left">
    <heading heading="Profile" type="profile"></heading>
    <div class="form-group">
      <div class="input-group">
        <label for="name">Your Name:</label>
        <input type="text" name="name" />
      </div>
      <div class="input-group">
        <label for="birth">Birthday:</label>
        <input type="text" name="birth" />
      </div>
      <div class="input-group">
        <label for="location">Location:</label>
        <input type="text" name="location" />
      </div>
      <div class="input-group">
        <label for="mobile">Mobile Number:</label>
        <input type="text" name="mobile" />
      </div>
      <div class="input-group">
        <label for="new_password">New Password:</label>
        <input type="password" name="new_password" />
      </div>
      <div class="input-group">
        <label for="confirm_password">Confirm Password:</label>
        <input type="password" name="confirm_password" />
      </div>
      <div class="input-group">
        <label for="email">Email Address:</label>
        <input type="email" name="email" />
      </div>
      <div class="input-group">
        <label>Account Balance:</label>
        <div class="finance">
          <div class="funds">
            <p><b>$210</b>,<span>00</span></p>
            <a href="/">add funds</a>
          </div>
        </div>
      </div>
      <div class="check-group">
        <input type="checkbox" id="check-balance" name="check" />
        <label for="check">Use balance at checkout</label>
      </div>
    </div>
  </section>
</template>

<script>
import heading from "./Heading";

export default {
  name: "Profile",
  components: { heading }
};
</script>

<style lang="scss">
.form-group {
  margin: 25px 130px 25px 90px;
  display: flex;
  flex-direction: column;
  .input-group {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
    label {
      margin: 0 15px;
      align-self: center;
      color: #50473d;
    }
    input {
      height: 40px;
      border: none;
      padding: 5px 10px;
    }
    .finance {
      display: flex;
      flex-direction: column;
      min-width: 220px;
      .funds {
        display: flex;
        align-items: center;
        p {
          margin: 0 30px 0 0;
          font-size: 23px;
          color: #50473d;
          span {
            font-size: 15px;
          }
        }
        a {
          color: #fcc844;
          position: relative;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: bold;
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
            right: -15px;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
  .check-group {
    align-self: flex-end;
    label {
      color: #50473d;
    }
    input {
      margin-right: 7px;
    }
  }
}
</style>
