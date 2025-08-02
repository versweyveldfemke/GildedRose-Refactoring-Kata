import { Item, GildedRose } from '@/gilded-rose';

describe('General items', () => {
  it('should decrease quality and sellIn by 1 when sellIn is positive', () => {
    const gildedRose = new GildedRose([new Item('Standard Item', 10, 20)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(19);
    expect(gildedRose.items[0].sellIn).toBe(9);
  });

  it('should decrease quality by 2 and sellIn by 1 when sellIn is negative', () => {
    const gildedRose = new GildedRose([new Item('Standard Item', -1, 20)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(18);
    expect(gildedRose.items[0].sellIn).toBe(-2);
  });

  it('should not allow quality to drop below 0', () => {
    const gildedRose = new GildedRose([new Item('Standard Item', -1, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
})


// describe('Gilded Rose', () => {
//   it('should foo', () => {
//     const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toBe('fixme');
//   });
// });
