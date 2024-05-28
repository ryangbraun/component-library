import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
    <Button onClick={() => console.log('clicked')} {...args} />
);

export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
    children: 'Primary Button',
    variant: 'primary'
};

export const Secondary: StoryFn<ButtonProps> = Template.bind({});
Secondary.args = {
    children: 'Secondary Button',
    variant: 'secondary'
};

export const Disabled: StoryFn<ButtonProps> = Template.bind({});
Disabled.args = {
    children: 'Delete now',
    variant: 'disabled'
};
