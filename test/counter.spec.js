import {
    mount
}
from '@vue/test-utils'
import Counter from '../src/components/Counter.js';
import expect from 'expect';

describe('Counter', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Counter);
    });

    it('defaults to a count 0', () => {
        expect(wrapper.vm.count).toBe(0);
    });

    //testing the underline logic
    it('increments the count when the button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });

    //testing what is presented to the user
    it('present the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.find('.count').html()).toContain(1);
    });
});