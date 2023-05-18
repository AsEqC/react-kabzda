import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
    title: 'Rating stories',
    component: Rating,
}

export default meta;
type Story = StoryObj<typeof meta>;



export const Empty: Story = {
    args: {
        value: 0,
        label: 'Rating',
    },
};
export const Rating1: Story = {
    args: {
        value: 1,
        label: 'Rating',
    },
};
export const Rating2: Story = {
    args: {
        value: 2,
        label: 'Rating',
    },
};
export const Rating3: Story = {
    args: {
        value: 3,
        label: 'Rating',
    },
};
export const Rating4: Story = {
    args: {
        value: 4,
        label: 'Rating',
    },
};
export const Rating5: Story = {
    args: {
        value: 5,
        label: 'Rating',
    },
};
