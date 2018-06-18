<template>
  <div class="list-item">
    <input type="text" :readonly="true" :value="this.task.title" />
  </div>  
</template>

<script>
export default {
  name: "task",
  props: {
    task: Object,
    required: true
  }
};
</script>
