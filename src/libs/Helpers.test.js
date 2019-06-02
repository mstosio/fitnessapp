import { calculateBMI } from './Helpers';

test('Calculate BMI', () => {
    expect(calculateBMI(102, 178)).toBe("32.19");
});