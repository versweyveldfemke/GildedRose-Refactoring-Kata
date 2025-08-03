import { Item } from "./gilded-rose";

export class QualityUpdater {
  lowerBound: number;
  upperBound: number;

  constructor(lowerBound = 0, upperBound = 50) {
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
  }

  updateAgedBrieQuality(item: Item) {
    if (item.sellIn > 0) {
      item.quality++;
    } else {
      item.quality += 2;
    }
    this.keepQualityInBounds(item, this.lowerBound, this.upperBound);
  }
  updateBackstagePassesQuality(item: Item) {
    if (item.sellIn <= 0) {
      item.quality = this.lowerBound;
    } else if (item.sellIn < 6) {
      item.quality += 3;
    } else if (item.sellIn < 11) {
      item.quality += 2;
    } else {
      item.quality++;
    }
    this.keepQualityInBounds(item, this.lowerBound, this.upperBound);
  }
  updateDefaultQuality(item: Item, multiplicator = 1) {
    if (item.sellIn > 0) {
      item.quality -= 1 * multiplicator;
    } else {
      item.quality -= 2 * multiplicator;
    }
    this.keepQualityInBounds(item, this.lowerBound, this.upperBound);
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