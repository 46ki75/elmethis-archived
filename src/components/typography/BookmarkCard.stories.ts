import type { Meta, StoryObj } from '@storybook/vue3'

import BookmarkCard from './BookmarkCard.vue'

const meta: Meta<typeof BookmarkCard> = {
  component: BookmarkCard,
  title: 'Typography/BookmarkCard',
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof BookmarkCard>

export const Primary: Story = {
  args: {
    title: 'Amazon EC2 Pricing | AWS Official',
    description:
      'Describes the four payment methods for Amazon EC2 instances. In addition to the three methods of on-demand, reserved instances, and spot instances, payments can also be made for Dedicated Hosts.',
    url: 'https://aws.amazon.com/jp/ec2/pricing/',
    image:
      'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png'
  }
}

export const NoImage: Story = {
  args: {
    title: 'Amazon EC2 Pricing | AWS Official',
    description:
      'Describes the four payment methods for Amazon EC2 instances. In addition to the three methods of on-demand, reserved instances, and spot instances, payments can also be made for Dedicated Hosts.',
    url: 'https://aws.amazon.com/jp/ec2/pricing/'
  }
}

export const NoDescription: Story = {
  args: {
    title: 'Amazon EC2 Pricing | AWS Official',
    url: 'https://aws.amazon.com/jp/ec2/pricing/'
  }
}
