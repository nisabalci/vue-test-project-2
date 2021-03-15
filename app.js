new Vue({
	el: "#app",
	data: {
		message: "",
		checked: "",
		checkedNames: [],
		picked: "",
		selected1: "",
		multipleSelected: [],
		selectedValue: "A",
		options: [
			{ text: "One", value: "A" },
			{ text: "Two", value: "B" },
			{ text: "Three", value: "C" },
		],
	},
});
