class Thermostat {
  constructor () {
    this.temperature = 20;
    this.setPowerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  };

  up(number) {
    if (!this.setPowerSavingMode && (this.getTemperature() + number) > 32) {
      this.temperature = 32;
      return 'Max 32 Temp';
    } else if (this.setPowerSavingMode && (this.getTemperature() + number) > 25) {
      this.temperature = 25;
      return 'Max 25 Temp';
    } else {
    return this.temperature += number
  }};

  down(number) {
    return this.temperature -= number
  };

  changePowerSavingMode(bool) {
    return this.setPowerSavingMode = bool;
  };

  reset() {
    return this.temperature = 20
  };

  checkEnergyUsage() {
    switch (true) {
      case this.getTemperature() < 18:
        return 'low-usage';
      case this.getTemperature() <= 25:
        return 'medium-usage';
      case this.getTemperature() > 25:
        return 'high-usage';
    };
  };
};

module.exports = Thermostat;