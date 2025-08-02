
test('always passes', () => {
  expect(true).toBe(true);
});

// import { GildedRose, Item } from "@/gilded-rose";
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