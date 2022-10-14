import { Meta, StoryObj } from '@storybook/react'
import { Children } from 'react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Creat account',
  },
  argTypes: {},
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

  


