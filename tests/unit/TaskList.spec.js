import Vue from "vue";
import TaskList from "../../src/components/TaskList.vue";
import { withPinnedTasks } from "../../src/components/TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    propsData: { tasks: withPinnedTasks }
  }).$mount();
  const lastTaskInput = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  // We expect the pinned task to be rendered first, not at the end
  expect(lastTaskInput).not.toBe(null);
