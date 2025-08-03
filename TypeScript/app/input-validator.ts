import { Item } from "./gilded-rose";

export class InputValidator {
  lowerQualityBound: number;
  upperQualityBound: number;

  constructor(lowerQualityBound = 0, upperQualityBound = 50) {
    this.lowerQualityBound = lowerQualityBound;
    this.upperQualityBound = upperQualityBound;
  }
  validateItems(items: Array<Item>) {
    if (!items || !Array.isArray(items)) {
      throw new Error('Items must be an array');
    }

    items.forEach(item => {
      /** Throw error if quality or sellIn is NaN */
      if (typeof item.quality !== 'number' || typeof item.sellIn !== 'number') {
        throw new Error(`Quality or sellIn is NaN of item: ${item.name}`);
      }
      /** Throw error if quality is out of bounds */
      if (!item.name.includes('Sulfura') && (item.quality < this.lowerQualityBound || item.quality > this.upperQualityBound)) {
        throw new Error(`Quality is out of bounds: ${item.quality}`);
      }

    });
  }
}