import { GildedRose, Item } from "@/gilded-rose";

describe('Aged Brie', () => {
  it('should increase quality by 1 and decrease sellIn by 1 when sellIn is positive', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(1);
    expect(gildedRose.items[0].sellIn).toBe(1);
  });

  it('should increase quality by 2 and decrease sellIn by 1 when sellIn is 0', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(2);
    expect(gildedRose.items[0].sellIn).toBe(-1);
  });

  it('should increase quality by 2 and decrease sellIn by 1 when sellIn is negative', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 10)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(12);
    expect(gildedRose.items[0].sellIn).toBe(-2);
  });

  it('should not allow quality to exceed 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 50)]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(50);
    expect(gildedRose.items[0].sellIn).toBe(1);
  });

  // to implement this when updating code
  // will not do now because we might lose logic if we update code wrongly
  // it('should throw an error if quality exceeds 50', () => {
  //   const gildedRose = new GildedRose([new Item('Aged Brie', 2, 51)]);
  //   expect(() => gildedRose.updateQuality()).toThrow('Quality cannot exceed 50');
  // });
});
