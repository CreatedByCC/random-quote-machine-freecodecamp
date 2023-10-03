# Random Quote Generator  
[Click here for DEMO](https://createdbycc.github.io/random-quote-machine-freecodecamp/)  

> This is one of the freeCodeCamp Front End Development Libraries Projects.
>> In this project we build a react app that generates a random quote when a button is clicked with the option to post it to twitter.
***
**I prefer to code in VS Code over CodePen**
## Steps I took:
### Getting VS ready:
1. Open the folder where you project folder will be saved
2. Use terminal to install Vite `npm create vite@latest` - I selected React and JS
### Minor tweaks to Vite files:
1. Remove the flavicon icon in head element of the index.html file - personal preference
2. Clear out App.css - here you can add your own styles
3. Clear out most of Index.css - I keep some of the root styles (font-family, line-height and font-weight)
4. Delete the content in the return method of App.jsx
### Start working on your project:
1. I create the entire App in App.jsx first
2. Then I split each section into its own component and fix up the code by adding props
   - Create a jsx file for each component in the src folder
   - Move that section of code from App.jsx to the component jsx file
   - I keep my data (assigned to state) in the assets folder inside the src folder in a jsx file
### Deploy the project on GitHub Pages:
1. I usually follow the instructions in the blog listed in the Resources below
   - There is step where you need to add a new .github folder INSIDE your main project folder (I didnt understand the instruction the first time so felt it would be a good idea to just make you aware of where this folder goes)
## Resources:
- [VS Code](https://code.visualstudio.com/) - prerequisite
- [Nodejs](https://nodejs.org/en/download) - prerequisite
- [Vite](https://vitejs.dev/guide/)
- [How to deploy Vite-React App](https://blog.devgenius.io/how-to-deploy-your-vite-react-app-to-github-pages-with-and-without-react-router-b060d912b10e) or YouTube video [link](https://youtu.be/XhoWXhyuW_I?si=KJB64Z1ckTbMi2is)
