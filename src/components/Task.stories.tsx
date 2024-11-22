import { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent } from '@storybook/test';
import * as mocks from '../mocks/data'

import Task from "./Task";

const meta = {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
  args: {
    onArchiveTask: fn(),
    onPinTask: fn(),
  }
} satisfies Meta<typeof Task>
export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    task: mocks.task,
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};

export const LongTitle: Story = {
  args: {
    task: {
      ...Default.args.task,
      title: `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`,
    },
  },
};

export const Test: Story = {
  ...Default,
  play: async({ canvas, args }) => {
    await userEvent.click(canvas.getByLabelText('Pin Learn more about Storybook'))
    await expect(args.onPinTask).toHaveBeenCalledWith(mocks.task.id)

    await userEvent.click(canvas.getByLabelText('Archive Learn more about Storybook'))
    await expect(args.onArchiveTask).toHaveBeenCalledWith(mocks.task.id)
  },
  tags: ['!autodocs']
}
