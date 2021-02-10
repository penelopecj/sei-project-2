# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Template

`yarn start` to run the development server

`yarn build` to create a build directory


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Reacathon
​
## Overview
​
The second project is to **build a React application** that consumes a **public API**.
​
### Technical Requirements
​
Your app must:
​
* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **The app can have a router** - with several "pages", this is up to your disgression and if it makes sense for your project.
* **Include wireframes** - that you designed before building the app.
* **Be deployed online** and accessible to the public.
​
---
​
## Necessary Deliverables
​
* A **working application**, hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project, and frequent commits dating back to the _very beginning_ of the project
* **A `readme.md` file** with:
  * Explanations of the **technologies** used
    * A couple of paragraphs about the **general approach you took**
    * **Installation instructions** for any dependencies
    * Link to your **wireframes** – sketches of major views / interfaces in your application
   * Descriptions of any **unsolved problems** or **major hurdles** your team had to overcome
​
---
​
## Suggested Ways to Get Started
​
* **Don’t hesitate to write throwaway code** to solve short term problems.
* **Read the docs for whatever technologies / frameworks / APIs you use**.
* **Write DRY code**.
* **Be consistent with your code style.**
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Keep user stories small and well-defined**, and remember – user stories focus on what a user needs, not what development tasks need accomplishing.
* **Write code another developer wouldn't have to ask you about**. Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is?
* **Make it all well-formatted.** Are you indenting, consistently? Can we find the start and end of every div, curly brace, etc?
* **Comment your code.** Will someone understand what is going on in each block or function? Even if it's obvious, explaining the what & why means someone else can pick it up and get it.
* **Write pseudocode before you write actual code.** Thinking through the logic of something helps.
​
---
​
## Sign Off Reqs
​
* A working request in Insomnia from the API you want to use, showing that you can access the dataset you need.
* A basic wireframe of your apps design + components
​
## Useful Resources
​
* **[React](https://reactjs.org/)**
* **[Some free APIs](https://apilist.fun/)**
* **[Some more free APIs](https://github.com/public-apis/public-apis)**
* **[Even more free APIs](https://dev.to/camerenisonfire/10-intriguing-public-rest-apis-for-your-next-project-2gbd)**
* **[The best free API Finder](https://www.google.com)**

# Pages that I’m planning to create with details of them
* Register will accept email, password and password confirmation
* Navigate to next stage of registration.
* User makes a profile with their food preferences and vegan, vegetarian, dairy free etc. (these fields are a little over-sensitive) and can tick boxes from a long list of allergy ingredients.
* User can search by gluten, dairy, seafood.
* User can also just type in a search item in the search bar to see if any items match.
* Save this to user profile. (localn storage)
  * User details are stored in localStorage.
* User can login.

## Once user is logged in:
* Next you can input your recipe name and recipe into the form field to have the data analysed. Click + to add more recipes.
* It will axios.get from the api and return a big object with all of the information.
* We will use a forEach function to check if the name key in each ingredient matches any of your allergies.
* The recipe name will display at the end.
* Each of your food allergy items will display in green if it meets the criteria or red if it is something you are allergic to that is in the recipe.
* Page will display contains gluten or contains dairy if it matches that allergy.
# Extras to add (like Navbar, Error Handling, Style - Bulma etc.)
 ## Pages to build:
 * Landing Page is Login 
 * Register with two steps

 * Hero Page with search bar where user can add link to a recipe with button for search (if possible add a plus button to serch multiple recipes at the same time)
 * The same hero page will explain if the recipee have any match for the allergies

# Dependencies that I want to use ( Like Bulma, axios , react-router-dom)

* Bulma for a quick style
* react-router-dom
