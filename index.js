let result = "";
function getId(event) {
  var operation = document.getElementById("operation");
  var operationId = operation.options[operation.selectedIndex].id;
  console.log(operationId);
  var selection = document.getElementById("selection");
  var selectionId = selection.options[selection.selectedIndex].id;
  console.log(selectionId);
  event.preventDefault();
  switch (true) {
    case operationId === "get" && selectionId === "anime":
      result = "This would return all the currently available anime";
      break;
    case operationId === "post" && selectionId === "anime":
      result =
        "This would let you add a new anime to the list of available anime";
      break;
    case operationId === "put" && selectionId === "anime":
      result = "This is not possible";
      break;
    case operationId === "patch" && selectionId === "anime":
      result = "This is not possible";
      break;
    case operationId === "delete" && selectionId === "anime":
      result = "This would delete all available anime";
      break;
    case operationId === "get" && selectionId === "attack":
      result = "This would return only the attack on titan anime";
      break;
    case operationId === "put" && selectionId === "attack":
      result = "This would let you replace all data about attack on titan";
      break;
    case operationId === "patch" && selectionId === "attack":
      result = "This would let you replace some data about attack on titan";
      break;
    case operationId === "delete" && selectionId === "anime":
      result = "This would delete attack on titan from the available anime";
      break;
    default:
      break;
  }
  document.getElementById("result").innerHTML = result;
}
