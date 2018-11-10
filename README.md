#  Lab: Prepping for Full Stack


In this lab, you will combine two concepts:

* Building and serving an API using Express
* Building a ReactJS front-end that consumes that API

You'll need to combine these two concepts into one project folder.

## API
Your API should already be completed. Bring it into this project, making sure to observe the project structure discussed in lecture. Transition to using ES6 import/export syntax.

## Front-End
Create a ReactJS front-end, observing the project structure discussed in lecture. The front-end should have a router that shows a list of chirps as the main page. There should be a form for creating a new chirp. Use an onClick event on the button to submit a POST request to your api using the fetch API.

Each chirp should contain a button that says See Details. When that button is clicked, you should go to a page that specializes in displaying info for a single chirp.

On the page for a single chirp, you should make a GET request for the specific chirp. Display the chirp information on the page. Have an X button on the page that will trigger a DELETE request to the API for that chirp. Send the user back to the main page when the chirp is successfully deleted. You should also have an Edit link that will send the user to a page that specializes in editing a single chirp.

On the page for editing a single chirp, you should have a form that is prefilled with the current value of the chirp data. The user should be able to make changes and then click an update button to trigger a PUT request to the API for that chirp. When the update is successful, send the user back to the main page.

## Hints
* Use the Fetch API in your front-end code for making all your API requests (GET, POST, PUT, DELETE)
  * See MDN, specifically "Uploading JSON Data" in the "Making Fetch Requests" section
* You will find front-end route params and this.props.match.params to be useful in this lab
* Recommended front-end paths are as follows:
  * / for the main page that displays the list of chirps and a form
  * /chirp/:id/edit for the page that displays a chirp edit form
  * /chirp/:id for the page that displays a single chirp
* Any component that is presented by the Router (e.g. your "pages") will have access to this.props.history. This is necessary to kick off navigation from your code. (in response to something being completed, etc.)
  * this.props.history.push('/something') allows you to navigate to the page that responds to the path /something
  * this.props.history.replace('/something') can be used to navigate to that path, but not keep a record of where we currently are (we are replacing the current browser history entry, with this new page we are going to. This is useful if we don't want someone to be able to click the back button and return to this page)
  * this.props.history.goBack() can be used to navigate back one page in the browser history
