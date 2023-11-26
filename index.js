class CelsiusTemperature {
 constructor(value) {
  this.value = value;
 }

 getTemperature() {
  return this.value;
 }
}

class FahrenheitAdapter extends CelsiusTemperature {
 constructor(celsiusTemperature) {
  super(celsiusTemperature.getTemperature());
 }

 getTemperature() {
  return (this.value * 9) / 5 + 32;
 }
}

function main() {
 const celsiusTemperature = new CelsiusTemperature(25);
 console.log(
  `Temperature in Celsius: ${celsiusTemperature.getTemperature()}°C`
 );

 const fahrenheitTemperature = new FahrenheitAdapter(celsiusTemperature);
 console.log(
  `Temperature in Fahrenheit: ${fahrenheitTemperature.getTemperature()}°F`
 );
}

main();
