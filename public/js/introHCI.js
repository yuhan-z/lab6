'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	$.get("/project/"+idNumber, callBackFn)
}

function callBackFn(response){
	console.log(response)
	var projectHTML = "<h4>" + response["title"] + "</h5>"+
	"<h5>" + response["date"] + "</h6>"+
    '<img class= "detailsImage" src="' + response['image'] + '" class="img">' +
    '<p>' + response['summary'] + '</p>'; 
	$("#project"+response.id+" .thumbnail .details").html(projectHTML)
}
