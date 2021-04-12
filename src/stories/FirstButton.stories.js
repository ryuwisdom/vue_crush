import FirstButton from '@/stories/FirstButton.vue';

export default {
    title : 'FirstButton',
    components : FirstButton,
}

const Template = (args, {argTypes}) => ({
    components: {FirstButton},
    props: Object.keys(argTypes),
    template : '<FirstButton label="label"/>',
})

export const Primary = Template.bind({})
Primary.args = { background: '#ff0', label: 'Button' };


export const Secondary = Template.bind({})
Secondary.args = {...Primary.args, label: '😍' };


export const CrossAngle = Template.bind({})
CrossAngle.args = { ...Primary.args, label: 'crossAngle' };

