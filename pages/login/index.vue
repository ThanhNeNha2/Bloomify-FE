<script setup>

</script>

<template>
  <div class="unit-login">
    <div class="right">
      anh
    </div>
    <div class="left">
      <h1>Login</h1>
      <span>
        Chào mừng bạn đến với ứng dụng lưu trữ nhật ký cá nhân
      </span>
      <form>
        <label for="email">Email</label>
        <input type="text" placeholder="Email" id="email" />
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button type="submit">Login</button>
      </form>
      <span>New User? <a href="/register">Register</a></span>
    </div>
  </div>
</template>

<style scoped>
.unit-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.unit-login>.right {
  width: 50%;
  height: 100%;
  background-color: #c2c2c2;
}

.unit-login>.left {
  width: 50%;
  height: 100%;

}
</style>
