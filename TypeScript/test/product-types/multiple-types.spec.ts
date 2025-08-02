import { GildedRose, Item } from "@/gilded-rose";
// to implement this when updating code
// will not do now because we might lose logic if we update code wrongly
// it.each([
//   [new Item('Standard Item', 10, 51)],
//   [new Item('Aged Brie', 2, 80)],
//   [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 51)]
// ])('should throw an error if quality exceeds 50',
//   (item) => {
//     const gildedRose = new GildedRose([item]);
//     expect(() => gildedRose.updateQuality()).toThrow('Quality cannot exceed 50');
//   });

// it.each([
//   [new Item('Standard Item', 10, -1)],
//   [new Item('Aged Brie', 2, -10)],
//   [new Item('Backstage passes to a TAFKAL80ETC concert', 15, -1)]
// ])('should throw an error if quality drops below 0',
//   (item) => {
//     const gildedRose = new GildedRose([item]);
//     expect(() => gildedRose.updateQuality()).toThrow('Quality cannot be negative');
//   });

it.each([
  [new Item('Aged Brie', -2, 49)],
  [new Item('Aged Brie', 2, 50)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 15, 49)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 9, 50)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 9, 49)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 49)]
])('should not allow quality exceed 50', () => {
  const gildedRose = new GildedRose([new Item('Standard Item', 10, -1)]);
  gildedRose.updateQuality();
  expect(gildedRose.items[0].quality).toBeLessThanOrEqual(50);
});

it.each([
  [new Item('Standard Item', -1, 0)],
  [new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)]
])('should not allow quality to drop below 0', () => {
  const gildedRose = new GildedRose([new Item('Standard Item', 10, 51)]);
  gildedRose.updateQuality();
  expect(gildedRose.items[0].quality).toBeGreaterThanOrEqual(0);
});