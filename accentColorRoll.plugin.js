/**
 * @name AccentColor Rolling
 * @author QuantumSoul
 * @description Animates accent color hue
 * @version 0.0.1
 */

const SPEED = 500;

module.exports = class Plugin {
  constructor(meta) {
    this.initHue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--base-hue')) || 0;
  }

  start() {
    let baseHue = this.initHue;

    this.animationInterval = setInterval(() => {
      baseHue = (baseHue + 1) % 360;
      document.documentElement.style.setProperty('--base-hue', baseHue);
    }, SPEED);
  }

  stop() {
    clearInterval(this.animationInterval);
    document.documentElement.style.setProperty('--base-hue', this.initHue);
  }
};