import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';

const meta = {
    title: 'Teaxtarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
        labe: {
            default: 'Text'
        }
    },
    tags: ['autodocs'],
    argTypes: {
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
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onClick: () => console.log('Button Clicked'),
        disabled: false
    }
};