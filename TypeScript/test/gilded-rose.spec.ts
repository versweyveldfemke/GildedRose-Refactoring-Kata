import { GildedRose, Item } from '@/gilded-rose';

describe('GildedRose constructor', () => {
  it('should initialize with given items', () => {
    const items = [
      new Item('foo', 5, 10),
      new Item('bar', 3, 7),
      new Item('Aged Brie', 0, 0)
    ];
    const gildedRose = new GildedRose(items);

    expect(gildedRose.items).toEqual(items);
    expect(gildedRose.items.length).toBe(3);
  });

  it('should initialize with empty array if no items are passed', () => {
    const gildedRose = new GildedRose();

    expect(gildedRose.items).toEqual([]);
    expect(gildedRose.items.length).toBe(0);
  });

  // To add when updating code
  // Right now it accepts any type of items
  // it('should throw an error if items are not an array', () => {
  //   expect(() => new GildedRose({} as any)).toThrow('Items must be an array');
  //   expect(() => new GildedRose(null as any)).toThrow('Items must be an array');
  //   expect(() => new GildedRose(123 as any)).toThrow('Items must be an array');
  // });
});
