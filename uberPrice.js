class UberPriceCalculator {
  constructor(baseFare, costPerKm, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKm = costPerKm;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distanceInKm, durationInMinutes) {
    const distanceCost = distanceInKm * this.costPerKm;
    const durationCost = durationInMinutes * this.costPerMinute;
    const totalPrice = this.baseFare + distanceCost + durationCost;
    return totalPrice;
  }
}

// Example usage:
const calculator = new UberPriceCalculator(5, 1.5, 0.25);
const distance = 10; // in kilometers
const duration = 20; // in minutes
const price = calculator.calculatePrice(distance, duration);
console.log("Total Price: $" + price);
