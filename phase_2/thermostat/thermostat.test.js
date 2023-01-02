const Thermostat = require('./thermostat');

beforeEach(() => {
  thermostat = new Thermostat();
});

describe('Thermostat', () => {
  it('should return 20', () => {
    expect(thermostat.getTemperature()).toEqual(20)
  });

  it('should return 21', () => {
    thermostat.up(1)
    expect(thermostat.getTemperature()).toEqual(21)
  });

  it('should return 19', () => {
    thermostat.down(1)
    expect(thermostat.getTemperature()).toEqual(19)
  });

  it('should return Max 25 Temp', () => {
    expect(thermostat.up(10)).toEqual('Max 25 Temp');
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('should return Max 32 Temp', () => {
    thermostat.changePowerSavingMode(false) 
    expect(thermostat.up(15)).toEqual('Max 32 Temp');
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('should return 20 after reset', () => {
    thermostat.reset() 
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('should return low usage', () => {
    thermostat.down(5)
    expect(thermostat.checkEnergyUsage()).toEqual('low-usage')
  });

  it('should return high usage', () => {
    thermostat.up(20)
    expect(thermostat.checkEnergyUsage()).toEqual('high-usage')
  });
});