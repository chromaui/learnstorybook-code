<template>
  <PureTaskList
    :tasks="tasks"
    v-on="$listeners"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script>
import PureTaskList from "./PureTaskList";
import { mapState, mapActions } from "vuex";

export default {
  components: { PureTaskList },

  methods: mapActions(["archiveTask", "pinTask"]),

  computed: mapState(["tasks"])
};
</script>
