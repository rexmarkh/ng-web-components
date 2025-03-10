import type { Meta, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      control: 'text', // ✅ Allows title to be edited in Storybook UI
      description: 'The title input passed to the component',
    },
    getCardTitle: {
      action: 'getCardTitle',
      description: 'Returns the title from Storybook UI or a default value',
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Title: Story = {
  args: {
    title: 'Hello World..!!', // ✅ Editable in Storybook UI
    getCardTitle() {
      const result = this.title ?? 'Default Title'; // ✅ Always return a valid string
      action('getCardTitle called!')({ result }); // ✅ Log in Storybook Actions
      return result; // ✅ Ensure it's always a string
    },
  },
};
