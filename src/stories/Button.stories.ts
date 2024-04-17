import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
        labe: {
            default: 'Text'
        }
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            type: 'string',
            description: '按钮',
        },
        onClick: {
            type: 'function',
            description: '点击事件',
        },
        disabled: {
            type: 'boolean',
            description: '是否禁用',
        },
    },
    args: {}
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
        onClick: () => console.log('Button Clicked'),
        disabled: false
    }
};