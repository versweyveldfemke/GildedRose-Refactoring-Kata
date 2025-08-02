// new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
// new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
// new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

import { GildedRose, Item } from "@/gilded-rose";

describe('Backstage passes', () => {
  it.each([
    [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20), 14, 21],
    [new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10), 10, 11],
    [new Item('Backstage passes to a TAFKAL80ETC concert', 25, 10), 24, 11],
  ])('should increase quality by 1 when sellIn is above 10',
    (item, expectedSellIn, expectedQuality) => {
      const gildedRose = new GildedRose([item]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(expectedQuality);
      expect(gildedRose.items[0].sellIn).toBe(expectedSellIn);
    });
  it.each([
    [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20), 9, 22],
    [new Item('Backstage passes to a TAFKAL80ETC concert', 6, 10), 5, 12],
    [new Item('Backstage passes to a TAFKAL80ETC concert', 7, 30), 6, 32],
  ])('should increase quality by 2 when sellIn is between 6 and 10',
    (item, expectedSellIn, expectedQuality) => {
      const gildedRose = new GildedRose([item]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(expectedQuality);
      expect(gildedRose.items[0].sellIn).toBe(expectedSellIn);
    });
  it.each([
    [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20), 4, 23],
    [new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10), 2, 13],
    [new Item('Backstage passes to a TAFKAL80ETC concert', 1, 30), 0, 33],
  ])('should increase quality by 3 when sellIn is between 0 and 5',
    (item, expectedSellIn, expectedQuality) => {
      const gildedRose = new GildedRose([item]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(expectedQuality);
      expect(gildedRose.items[0].sellIn).toBe(expectedSellIn);
    });
  it('should keep a quality equal to zero when sellIn is negative', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
    expect(gildedRose.items[0].sellIn).toBe(-1);
  })
  it.each([
    [new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20), -2, 0],
    [new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0), -3, 0],
  ])('should have quality equal to zero and decrease sellIn by 1 when sellIn is negative',
    (item, expectedSellIn, expectedQuality) => {
      const gildedRose = new GildedRose([item]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(expectedQuality);
      expect(gildedRose.items[0].sellIn).toBe(expectedSellIn);
    });
  it.each([
    [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 49), 14, 50],
    [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50), 14, 50],
    [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50), 9, 50],
    [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50), 4, 50],
  ])('should not allow quality to exceed 50',
    (item, expectedSellIn, expectedQuality) => {
      const gildedRose = new GildedRose([item]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(expectedQuality);
      expect(gildedRose.items[0].sellIn).toBe(expectedSellIn);
    });
})