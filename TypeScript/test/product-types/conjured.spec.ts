import { GildedRose, Item } from "@/gilded-rose";

describe('Conjured items', () => {
  it.each([
    [new Item('Conjured Mana Cake', 10, 20), 9, 18]
  ])('should decrease quality by 2 and sellIn by 1 when sellIn is positive',
    (item, expectedSellIn, expectedQuality) => {
      const gildedRose = new GildedRose([item]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(expectedQuality);
      expect(gildedRose.items[0].sellIn).toBe(expectedSellIn);
    });

  it.each([

    [new Item('Conjured Mana Cake', 0, 20), -1, 16],
    [new Item('Conjured Mana Cake', -1, 20), -2, 16],
  ])('should decrease quality by 4 and sellIn by 1 when sellIn is negative',
    (item, expectedSellIn, expectedQuality) => {
      const gildedRose = new GildedRose([item]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(expectedQuality);
      expect(gildedRose.items[0].sellIn).toBe(expectedSellIn);
    });
})