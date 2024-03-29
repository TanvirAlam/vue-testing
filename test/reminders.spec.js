import {
    mount
} from '@vue/test-utils';
import expect from 'expect';
import Reminders from '../src/components/Reminders.vue';

describe('Reminder', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Reminders);
    });

    it('hides the reminders list if there are none', () => {
        expect(wrapper.contains('ul')).toBe(false);
    });

    it('can add reminders', () => {
        addReminder("Go to the store");
        expect(wrapper.find('ul').text()).toContain('Go to the store');
    });

    it('remove a reminder', () => {
        addReminder("Go to the store");
        addReminder("Finish work");

        let deleteButton = wrapper.find("ul > li:first-child .delete");

        deleteButton.trigger('click');

        expect(wrapper.find('ul').text()).not.toContain('Go to the store');
        expect(wrapper.find('ul').text()).toContain('Finish work');
    });

    function addReminder($body) {
        let newReminder = wrapper.find('.new-reminder');

        newReminder.element.value = $body;
        newReminder.trigger('input');

        wrapper.find('button').trigger('click');
    }
});