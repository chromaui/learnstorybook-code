<template>
  <PureInboxScreen :error="error" />
</template>

<script>
import PureInboxScreen from "./PureInboxScreen";
import { mapState } from "vuex";

export default {
  name: "InboxScreen",
  components: { PureInboxScreen },
  computed: mapState(["error"])
};
</script>
