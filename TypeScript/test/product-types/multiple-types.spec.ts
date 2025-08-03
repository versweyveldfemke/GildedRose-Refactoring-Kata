import { GildedRose, Item } from "@/gilded-rose";
it.each([
  [new Item('Standard Item', 10, 51)],
  [new Item('Aged Brie', 2, 80)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 51)],
  [new Item('Conjured Mana Cake', 1, 51)]
])('should throw an error if quality exceeds 50',
  (item) => {
    const gildedRose = new GildedRose([item]);
    expect(() => gildedRose.updateQuality()).toThrow('Quality cannot exceed 50');
  });

it.each([
  [new Item('Standard Item', 10, -1)],
  [new Item('Aged Brie', 2, -10)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 15, -1)],
  [new Item('Conjured', -3, -10)]
])('should throw an error if quality drops below 0',
  (item) => {
    const gildedRose = new GildedRose([item]);
    expect(() => gildedRose.updateQuality()).toThrow('Quality cannot be negative');
  });

it.each([
  [new Item('Sulfuras', 2, 80)],
  [new Item('Sulfuras', -2, -10)]
])('should not throw an error when Sulfuras exceeds quality boundaries of 0 and 50',
  (item) => {
    const gildedRose = new GildedRose([item]);
    expect(() => gildedRose.updateQuality()).not.toThrow();
  });

it.each([
  [new Item('Aged Brie', -2, 49)],
  [new Item('Aged Brie', 2, 50)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 49)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 9, 50)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 9, 49)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 49)]
])('should not allow quality exceed 50',
  (item) => {
    const gildedRose = new GildedRose([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBeLessThanOrEqual(50);
  });

it.each([
  [new Item('Standard Item', -1, 0)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)],
  [new Item('Conjured Mana Cake', -1, 0)],
  [new Item('Conjured Mana Cake', 1, 0)],
  [new Item('Conjured Mana Cake', -1, 3)],
  [new Item('Conjured Mana Cake', 1, 1)]
])('should not allow quality to drop below 0',
  (item) => {
    const gildedRose = new GildedRose([item]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBeGreaterThanOrEqual(0);
  });