import Vue from "vue";
import TaskList from "../../src/components/TaskList.vue";
import { WithPinnedTasks } from "../../src/components/TaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  // render Tasklist
  const Constructor = Vue.extend(TaskList);
  const vm = new Constructor({
    // ...using WithPinnedTasks.args
    propsData: WithPinnedTasks.args,
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  // We expect the pinned task to be rendered first, not at the end
  expect(firstTaskPinned).not.toBe(null);
});
