// ======================
// VARIABLES
// ======================

// 1st: pull initial budgetItems/lastID from localStorage to set initial variables
const budgetItem = JSON.parse(localStorage.getItem("BudgetItems")) ||  [];
let lastID = localStorage.getItem("lastID") || 0; 


// ======================
// FUNCTIONS
// ====================== 

// 4th: function to update localStorage with latest budgetItems and latest lastID
const updateStorage = () => {
localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
localStorage.setItem("lastID", lastID);

}

// 5th: function to render budgetItems on table; each item should be rendered in this format:
// <tr data-id="2"><td>Oct 14, 2019 5:08 PM</td><td>November Rent</td><td>Rent/Mortgage</td><td>1300</td><td>Fill out lease renewal form!</td><td class="delete"><span>x</span></td></tr>
// also, update total amount spent on page (based on selected category):
const renderItems = items => {
if (!items) items = budgetItem;
const tbody = $("#budgetItems tbody");
// adding a spoce shows multiple items specific table 
tbody.empty();

items.forEach(item => {
const row = `<tr data-id=${item.id}><td>${item.date}</td><td>${item.name}</td><td>${item.category}</td><td>${item.amount}</td><td>${item.notes}</td><td class="delete"><span>x</span></td></tr>`;
tbody.append(row);

});
// clear out previous rows 
// create var pointer to table bodyb
// loop through array 

}

renderItems(myItems);
renderItems();

// ======================
// MAIN PROCESS
// ======================
renderItems(); // put any existing items

// 2nd: wire up click event on 'Enter New Budget Item' button to toggle display of form
$("#toggleFormButton, #hideForm").on("click", function() {
const button = $("#toggleFormButton"); // points at the button 
const form = $("#addItemForm"); // points to form

form.toggle("fast", function() {
if ($(this).is("visible")) { 
// if its visible t
button.text("hide Form");
} else {
   // if its not visible  
   button.text("Add New Budget Item"); 
}
});

})



// 3rd: wire up click event on 'Add Budget Item' button, gather user input and add item to budgetItems array
// (each item's object should include: id / date / name / category / amount / notes)... then clear the form
// fields and trigger localStorage update/budgetItems rerender functions, once created
$("#addItem").on("click", function() {
event.preventDefault();

const newItem = {
    id: ++lastID, // increment lastId and stores it in th same step  
    date: moment().format("lll"), // add in current dsate time stamp 
    name: $("#name").val().trim(),
    category: $('#category').val().trim(),
    amount: $("#amount").val().trim(),
    notes: $("#notes").val().trim(),
}

console.log(newItem)
$("input, select").val("");
budgetItems.push(newItem);
updateStorage();
renderItems();
// update local storage
// render html
});

// 6th: wire up change event on the category select menu, show filtered budgetItems based on selection


// 7th: wire up click event on the delete button of a given row; on click delete that budgetItem






