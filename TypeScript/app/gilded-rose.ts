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
            if (item.sellIn > 0) {
              item.quality = item.quality + 1;
            }
            if (item.sellIn <= 0) {
              item.quality = item.quality + 2;
            }
            break;
          case item.name.includes('Backstage passes'):
            if (item.sellIn <= 0) {
              item.quality = 0;
            } else if (item.sellIn < 6) {
              item.quality = item.quality + 3;
            } else if (item.sellIn < 11) {
              item.quality = item.quality + 2;
            } else {
              item.quality = item.quality + 1;
            }

            break;
          default:
            if (item.sellIn >= 0 && item.quality > 0) {
              item.quality = item.quality - 1;
            }
            if (item.sellIn < 0 && item.quality > 1) {
              item.quality = item.quality - 2;
            }
            break;
        }
        item.sellIn = item.sellIn - 1;

        // Can only do step below because we assured quality is within bounds at the start
        if (item.quality > 50) {
          item.quality = 50;
        }
        if (item.quality < 0) {
          item.quality = 0;
        }
      });




    // for (let i = 0; i < this.items.length; i++) {
    //   if (
    //     this.items[i].name != 'Aged Brie'
    //     && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
    //     && this.items[i].name != 'Sulfuras, Hand of Ragnaros'
    //     && this.items[i].quality > 0
    //   ) {
    //     this.items[i].quality = this.items[i].quality - 1
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
    //           this.items[i].quality = this.items[i].quality + 1
    //         }
    //         if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
    //           this.items[i].quality = this.items[i].quality + 1
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     this.items[i].sellIn = this.items[i].sellIn - 1;
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != 'Aged Brie') {
    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             this.items[i].quality = this.items[i].quality - 1
    //           }
    //         }
    //       } else {
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1
    //       }
    //     }
    //   }
    // }

    return this.items;
  }
}
