//your JS code here. If required.
let btn = document.querySelector('input[type="button"][value="Select and Remove"]');
let select = document.querySelector("#colorSelect");

btn.addEventListener("click", deleted);

function deleted() {
	let selectedValue = select.option[select.selectedIndex];
	let selectOption = selectedValue.text;
    console.log(`Selected value: ${selectedValue}`);

	selectedValue.remove();
}