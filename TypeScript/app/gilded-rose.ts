import { InputValidator } from "./input-validator";
import { QualityUpdater } from "./quality-updater";

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
  qualityUpdater: QualityUpdater;
  inputValidator: InputValidator;

  constructor(
    items = [] as Array<Item>,
    qualityUpdater: QualityUpdater = new QualityUpdater(),
    inputValidator: InputValidator = new InputValidator()
  ) {
    this.items = items;
    this.qualityUpdater = qualityUpdater;
    this.inputValidator = inputValidator;
  }

  updateQuality() {
    /** Throw error if input invalid */
    this.inputValidator.validateItems(this.items);

    this.items
      .filter(item => !item.name.includes('Sulfuras')) // Sulfuras does not change quality or sellIn
      .forEach(item => {
        if (item.name.includes('Aged Brie')) {
          this.qualityUpdater.updateAgedBrieQuality(item);
        }
        else if (item.name.includes('Backstage passes')) {
          this.qualityUpdater.updateBackstagePassesQuality(item);
        }
        else if (item.name.includes('Conjured')) {
          this.qualityUpdater.updateDefaultQuality(item, 2); // Conjured items degrade in quality twice as fast
        }
        else {
          this.qualityUpdater.updateDefaultQuality(item);
        }
        item.sellIn--;
      });

    return this.items;
  }
}
