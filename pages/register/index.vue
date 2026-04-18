<script>
import {
  defineComponent,
  ref
} from 'vue';
import RegisterPageContext from './RegisterPageContext';

export default defineComponent({
  name: 'RegisterView',

  setup () {
    const displayNameRef = ref('Vo Chi Thanh');

    const context = RegisterPageContext.create({
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
  <div class="unit-register">
    <p class="greeting">
      {{ context.formatGreetingLine() }}
    </p>

    <p class="name">
      Vo Chi Thanhaa
    </p>
  </div>
</template>

<style scoped>
.unit-register {
  background-color: var(--background-color);

  padding-block: 1rem;
  padding-inline: 1rem;
}

.unit-register > .greeting {
  margin-block-end: 0.5rem;
}

.unit-register > .name {
  color: var(--color-brown);
}
</style>
