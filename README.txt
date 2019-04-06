========================================================================================
== WELCOME!
========================================================================================

This is a simple Angular project with two main pages components (Table and Item).  The aim is to show off your basic Angular skills, as well as general code quality.

No CSS styling is required.

I suggest you Fork this project into your own StackBlitz account.  You could alternatively get set up with a local Angular installation, but using StackBlitz is ideal as it provides an in-browser setup so you can get going immediately.

Feel free to contact me (dan.soper@victoriaforms.co.uk) if anything doesn't make sense.  There's no time limit, but if you get stuck on something and lose a lot of time, feel free to send it in an incomplete state.

======================
1. ADD LOADING INDICATOR
Edit the Table component so that while the data is loading, the text "Loading" is displayed.

======================
2. LINK BACK TO TABLE FROM ITEM
Add a link on the Item component, to go back to the Table component.

======================
3. READ SELECTED ITEM PARAMETER AND DISPLAY IT ON THE PAGE
Clicking on the name in the first column on the Table component links through to the Item component.  Edit the Item component to read the selected item ID.  I've already set up a route in app.module.ts to provide the parameter 'id'.  This task is simply to print the ID on the Item page.

======================
4. DISPLAY THE SELECTED ITEM DETAILS
Edit the Item component to load the values from the mock-data.json for the selected item.  As there's no proper backend, you'll need to load all rows of the JSON then find the required ID within the component. You can get the list of properties available in the item by looking at the model at /app/models/item.ts.

======================
5. ITEM COMPONENT INTO A FORM
Edit the Item component to use Reactive Forms and display the values in form inputs in the HTML page.

========================================================================================
ONCE YOU'RE DONE, send your files (or the link to your StackBlitz project) to me at dan.soper@victoriaforms.co.uk