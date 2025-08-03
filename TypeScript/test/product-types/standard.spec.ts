import { Item, GildedRose } from '@/gilded-rose';

describe('General items', () => {
  it.each([
    [new Item('Standard Item', 10, 20), 9, 19],
  ])('should decrease quality and sellIn by 1 when sellIn is positive',
    (item, expectedSellIn, expectedQuality) => {
      const gildedRose = new GildedRose([item]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(expectedQuality);
      expect(gildedRose.items[0].sellIn).toBe(expectedSellIn);
    });

  it.each([
    [new Item('Standard Item', -1, 20), -2, 18],
    [new Item('Standard Item', 0, 20), -1, 18],
  ])('should decrease quality by 2 and sellIn by 1 when sellIn is negative',
    (item, expectedSellIn, expectedQuality) => {
      const gildedRose = new GildedRose([item]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(expectedQuality);
      expect(gildedRose.items[0].sellIn).toBe(expectedSellIn);
    });
})

