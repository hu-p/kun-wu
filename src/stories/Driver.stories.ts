import type { Meta, StoryObj } from '@storybook/react';
import { Driver } from '@/export/Driver';

const meta = {
    title: 'Driver',
    component: Driver,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Driver>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};