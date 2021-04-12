import FirstButton from '@/components/FirstButton.vue';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';

export default {
  title: 'Bonnie/FirstButton',
  component: FirstButton,
  decorators: [() => ({ template: '<div style="margin: 50px;"><story/></div>' })],
  parameters: {
    backgrounds: {
      values: [
        {name: 'red', value: '#f00'},
        {name: 'green', value: '#0f0'},
        {name: 'blue', value: '#00f'},
        {name: 'yellow', value: '#eeec44'},
      ]
    }
  },

}

const Template = (args, {argTypes}) => ({
  components: {FirstButton},
  props: Object.keys(argTypes),

  template: '<FirstButton v-bind="$props"/>',
})

export const Primary = Template.bind({})
Primary.args = {backgroundColor: '#ff0', label: 'Button'};


export const Secondary = Template.bind({})
Secondary.args = {...Primary.args, label: '😍'};


export const CrossAngle = Template.bind({})
CrossAngle.args = {...Primary.args, label: 'crossAngle'};




