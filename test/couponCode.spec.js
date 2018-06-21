import {
    mount
} from '@vue/test-utils';
import expect from 'expect';
import CouponCode from '../src/components/CouponCode.vue';

describe('couponCode', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(CouponCode);
    });

    it('accepts a coupon code', () => {
        expect(wrapper.contains('input.coupon-code')).toBe(true);
    });

    it('validate a real coupon code', () => {
        let couponCode = wrapper.find('input.coupon-code');

        couponCode.element.value = '50OFF';
        couponCode.trigger('input');

        expect(wrapper.html()).toContain('Coupon Redeemed: 50% Off');
    });

    it('validate a fake coupon code', () => {
        let couponCode = wrapper.find('input.coupon-code');

        couponCode.element.value = 'NOTREAL';
        couponCode.trigger('input');

        expect(wrapper.html()).toContain('Invalid Coupon Code');
    });

    it('braodcast the percentage discount when a valid coupon code is applied', () => {
        // let couponCode = wrapper.find('input.coupon-code');
        // couponCode.element.value = '50OFF';
        // couponCode.trigger('input');

        wrapper.setData({
            code: '50OFF'
        });
        wrapper.vm.validate();

        expect(wrapper.emitted().applied).toBeTruthy();
        expect(wrapper.emitted().applied[0]).toEqual([50]);
    });
});