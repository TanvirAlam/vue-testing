import {
    mount
}
from '@vue/test-utils'
import Counter from '../src/components/Counter.vue';
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
    it('increments the count when the increment button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('.increment').trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });

    it('decrements the count when the decrement button is clicked', () => {
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('.increment').trigger('click');
        wrapper.find('.increment').trigger('click');
        wrapper.find('.decrement').trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });

    it('never goes below 0', () => {
        expect(wrapper.vm.count).toBe(0);
        expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(true);
        wrapper.find('.increment').trigger('click');
        expect(wrapper.find('.decrement').hasStyle('display', 'none')).toBe(false);
        wrapper.find('.decrement').trigger('click');
    });

    //testing what is presented to the user
    it('present the current count', () => {
        expect(wrapper.find('.count').html()).toContain(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.find('.count').html()).toContain(1);
    });
});