import type { Meta, StoryObj } from '@storybook/react-vite';

import SlideInput from './SlideInput';

const meta = {
  title: 'Components/Input/SlideInput',
  component: SlideInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
} satisfies Meta<typeof SlideInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
