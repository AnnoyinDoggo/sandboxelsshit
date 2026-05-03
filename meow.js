elements.heatsink = {
	color: "#0000ff",
	tick: function(pixel) {
		if (pixel.temp < -258) {
			pixel.temp = -273;
		} else {
			pixel.temp -= 15;
		}
	},
	category: "land",
	insulate: true,
	state: "solid"
};
