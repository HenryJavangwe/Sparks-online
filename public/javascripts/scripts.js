// Implementing blotter.js text effects
// Define text style
const text = new Blotter.Text('Sparks Online', {
	family: "'EB Garamond', serif",
    size: 80,
    fill:'rgb(199, 199, 199)',
    paddingLeft: 100,
    paddingRight: 100,
    position: 'relative',
    marginTop: 100
});

// Use a material
// https://blotter.js.org/#/materials
let material = new Blotter.LiquidDistortMaterial();

// Set material opts
material.uniforms.uSpeed.value = 0.1;
material.uniforms.uVolatility.value = 0.10;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
  texts: text
});

// Apply to element
let scope = blotter.forText(text);
let elem = document.getElementById('blotter-container');
scope.appendTo(elem);