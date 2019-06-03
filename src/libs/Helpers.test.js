import { calculateBMI, calculateDailyMacro } from './Helpers';

test('Calculate BMI', () => {
    expect(calculateBMI(102, 178)).toBe(32);
});

test('Calculate Daily Caloric Demand', () => {
   expect(calculateDailyMacro(2550, 102, "lowcarb")).toMatchObject({proteins: 204, carbs: 179, fats: 113 });
   expect(calculateDailyMacro(2550, 102, "highcarb")).toMatchObject({proteins: 204, carbs: 274, fats: 71 });
   expect(calculateDailyMacro(2550, 102, "balanced")).toMatchObject({proteins: 204, carbs: 242, fats: 85 });
});