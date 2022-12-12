CV-Project is the first application I made using React.

I used the App component as my main component and three children, genInfo, Education and WorkXp.

I learned how to use these components to dynamically render data. I used state to store the variables that the user would input, and setState to update this state whenever there was a change in the input field.

In Education and WorkXp I created an add feature, which added a new object to an array. This array was then rendered each time using the indices to reference each object. This made it easy to edit and delete different education/work data sets.

The final thing used here is window.print(). This function is used to enable the user to print a final copy of their CV. The @media CSS at-rule ensures that only the actual CV is sent to be printed.
