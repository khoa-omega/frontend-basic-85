const formId = document.getElementById("id");
const formLicensePlate = document.getElementById("license-plate");
const formRepairDate = document.getElementById("repair-date");
const formName = document.getElementById("name");
const formPrice = document.getElementById("price");
const formStatusDamaged = document.getElementById("status-damaged");
const formRepairStatus = document.getElementById("repair-status");
const form = document.getElementById("accessory-form");
const tbody = document.getElementById("accessories");

const BASE_URL = "http://localhost:8080";

form.addEventListener("submit", async function (event) {
	event.preventDefault();
	await create();
	this.reset();
	findAll();
});

// load dữ liệu hiển thị ra màn hình
findAll();

async function findAll() {
	loading.style.display = "flex";
	const response = await fetch(`${BASE_URL}/api/v1/accessories`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
	const body = await response.json();
	showAccessories(body.content);
	loading.style.display = "none";
}

function showAccessories(accessories) {
	tbody.innerHTML = "";
	for (const accessory of accessories) {
		const row = tbody.insertRow();
		row.insertCell().textContent = accessory.id;
		row.insertCell().textContent = accessory.licensePlate;
		row.insertCell().textContent = accessory.repairDate;
		row.insertCell().textContent = accessory.name;
		row.insertCell().textContent = accessory.price;
		row.insertCell().textContent = accessory.statusDamaged;
		row.insertCell().textContent = accessory.repairStatus;

		const editButton = document.createElement("button");
		editButton.textContent = "🖊";
		editButton.onclick = function () {
			// logic update
		};
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "❌";
		deleteButton.onclick = async function () {
			// logic xóa
		};
		row.insertCell().append(editButton, deleteButton);
	}
}

async function create() {
	const response = await fetch(`${BASE_URL}/api/v1/accessories`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			name: formName.value,
			price: formPrice.value,
			statusDamaged: formStatusDamaged.value,
			repairStatus: formRepairStatus.value,
			licensePlate: formLicensePlate.value,
			repairDate: formRepairDate.value
		})
	});
	const accessory = await response.json();
	alert("Tạo accessory thành công: " + accessory.name);
}
