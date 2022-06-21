<template>
  <PureInboxScreen :error="error" />
</template>

<script>
  import { computed } from 'vue';

  import { useStore } from 'vuex';

  import PureInboxScreen from './PureInboxScreen';

  export default {
    name: 'InboxScreen',
    components: { PureInboxScreen },
    setup() {
      //👇 Creates a store instance
      const store = useStore();

      //👇 Retrieves the error from the store's state
      const error = computed(() => store.state.error);
      return {
        error,
      };
    },
  };
</script>
