//your JS code here. If required.
let btn = document.querySelector('input[type="button"][value="Select and Remove"]');
let select = document.querySelector("#colorSelect");

btn.addEventListener("click", deleted);

function deleted() {
	 let selectedIndex = select.selectedIndex;
    
    // Remove the selected option from the dropdown list
    select.remove(selectedIndex);
}