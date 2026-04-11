<script>
import {
  defineComponent,
  ref
} from 'vue';
import LoginPageContext from './LoginPageContext';

export default defineComponent({
  name: 'HomeView',

  setup () {
    const displayNameRef = ref('Vo Chi Thanh');

    const context = LoginPageContext.create({
      displayNameRef
    })
      .setupComponent();

    return {
      context
    };
  }
});
</script>

<template>
  <div class="unit-login">
    <div class="header-login">
      <span>Atelier</span>
    </div>
  </div>
</template>

<style scoped>
.unit-login {
  background-color:  red;
  width: 100vw;
}
</style>
