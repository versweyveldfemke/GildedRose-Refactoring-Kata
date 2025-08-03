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

  private readonly UPPER_QUALITY_BOUND = 50;
  private readonly LOWER_QUALITY_BOUND = 0;

  updateQuality() {
    /** Throw error if input invalid */
    if (!this.items || !Array.isArray(this.items)) {
      throw new Error('Items must be an array');
    }

    this.items
      .filter(item => !item.name.includes('Sulfuras')) // Sulfuras does not change quality or sellIn
      .forEach(item => {
        /** Throw error if quality or sellIn is NaN */
        if (typeof item.quality !== 'number' || typeof item.sellIn !== 'number') {
          throw new Error(`Quality or sellIn is NaN`);
        }
        /** Throw error if quality is out of bounds */
        if (item.quality < this.LOWER_QUALITY_BOUND || item.quality > this.UPPER_QUALITY_BOUND) {
          throw new Error(`Quality is out of bounds: ${item.quality}`);
        }


        if (item.name.includes('Aged Brie')) {
          this.updateAgedBrieQuality(item);
        }
        else if (item.name.includes('Backstage passes')) {
          this.updateBackstagePassesQuality(item);
        }
        else if (item.name.includes('Conjured')) {
          this.updateDefaultQuality(item, 2); // Conjured items degrade in quality twice as fast
        }
        else {
          this.updateDefaultQuality(item);
        }
        item.sellIn--;
      });

    return this.items;
  }

  private updateAgedBrieQuality(item: Item) {
    if (item.sellIn > 0) {
      item.quality++;
    } else {
      item.quality += 2;
    }
    this.keepQualityInBounds(item, this.LOWER_QUALITY_BOUND, this.UPPER_QUALITY_BOUND);
  }
  private updateBackstagePassesQuality(item: Item) {
    if (item.sellIn <= 0) {
      item.quality = this.LOWER_QUALITY_BOUND;
    } else if (item.sellIn < 6) {
      item.quality += 3;
    } else if (item.sellIn < 11) {
      item.quality += 2;
    } else {
      item.quality++;
    }
    this.keepQualityInBounds(item, this.LOWER_QUALITY_BOUND, this.UPPER_QUALITY_BOUND);
  }
  private updateDefaultQuality(item: Item, multiplicator = 1) {
    if (item.sellIn > 0) {
      item.quality -= 1 * multiplicator;
    } else {
      item.quality -= 2 * multiplicator;
    }
    this.keepQualityInBounds(item, this.LOWER_QUALITY_BOUND, this.UPPER_QUALITY_BOUND);
  }
  private keepQualityInBounds(item: Item, lowerBound = 0, upperBound = 50) {
    if (item.quality < lowerBound) {
      item.quality = lowerBound;
    }
    if (item.quality > upperBound) {
      item.quality = upperBound;
    }
  }
}
