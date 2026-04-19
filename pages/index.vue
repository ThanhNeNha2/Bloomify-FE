<script>
import {
  defineComponent,
  ref
} from 'vue';
import HomePageContext from './HomePageContext';

export default defineComponent({
  name: 'HomeView',

  setup () {
    const displayNameRef = ref('Vo Chi Thanh');

    const context = HomePageContext.create({
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
  <div class="unit-home">
    <p class="greeting">
      {{ context.formatGreetingLine() }}
    </p>

    <p class="name">
      Vo Chi Thanhaa
    </p>
  </div>
</template>

<style scoped>
.unit-home {
  background-color: var(--background-color);

  padding-block: 1rem;
  padding-inline: 1rem;
}

.unit-home > .greeting {
  margin-block-end: 0.5rem;
}

.unit-home > .name {
  color: var(--color-brown);
}
</style>
