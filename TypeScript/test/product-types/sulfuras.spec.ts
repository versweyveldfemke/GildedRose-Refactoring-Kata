

  // new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  // new Item("Sulfuras, Hand of Ragnaros", -1, 80), 

import { GildedRose, Item } from "@/gilded-rose";

  describe('Sulfuras', () => {
    it('should not change quality or sellIn', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(80);
      expect(gildedRose.items[0].sellIn).toBe(0);
    });

    it('should not change quality or sellIn when sellIn is negative', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 60)]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toBe(60);
      expect(gildedRose.items[0].sellIn).toBe(-1);
    });
  })
