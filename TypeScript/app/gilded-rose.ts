export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    /** Throw error if input invalid */
    if (!this.items || !Array.isArray(this.items)) {
      throw new Error('Items must be an array');
    }

    this.items
      .filter(item => !item.name.includes('Sulfuras')) // Sulfuras does not change quality or sellIn
      .forEach(item => {
        /** Throw error if quality is out of bounds */
        if (item.quality < 0) {
          throw new Error('Quality cannot be negative');
        }
        if (item.quality > 50) {
          throw new Error('Quality cannot exceed 50');
        }

        /** Different operations based on product type, with the default/standard behavior on the bottom */

        switch (true) {
          case item.name.includes('Aged Brie'):
            this.updateAgedBrieQuality(item);
            break;
          case item.name.includes('Backstage passes'):
            this.updateBackstagePassesQuality(item);
            break;
          case item.name.includes('Conjured'):
            this.updateDefaultQuality(item, 2); // Conjured items degrade in quality twice as fast
            break;
          default:
            this.updateDefaultQuality(item);
            break;
        }
        item.sellIn = item.sellIn - 1;
      });

    return this.items;
  }

  updateAgedBrieQuality(item: Item) {
    if (item.sellIn > 0) {
      item.quality += 1;
    } else {
      item.quality += 2;
    }
    if (item.quality > 50) {
      item.quality = 50;
    }
  }
  updateBackstagePassesQuality(item: Item) {
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else if (item.sellIn < 6) {
      item.quality += 3;
    } else if (item.sellIn < 11) {
      item.quality += 2;
    } else {
      item.quality += 1;
    }
    if (item.quality > 50) {
      item.quality = 50;
    }
  }
  updateDefaultQuality(item: Item, multiplicator = 1) {
    if (item.sellIn > 0) {
      item.quality -= 1 * multiplicator;
    } else {
      item.quality -= 2 * multiplicator;
    }
    if (item.quality < 0) {
      item.quality = 0;
    }
    if (item.quality > 50) {
      item.quality = 50;
    }
  }
}
