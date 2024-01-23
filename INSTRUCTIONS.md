# Module 02 Practice 

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

This exercise has a goal of getting you more familiar with State and the useState hook in React.

&nbsp;
## Initialize a new Vite project.

First, [start a new Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) and follow the prompts:

```sh
$ npm create vite@latest
```
&nbsp;

You'll want to select the options for React and to skip using Typescript.

You can also bootstrap a project directly by skipping the CLI and specifying a template:

```sh
$ npm create vite@latest calculator_exercise -- --template react
```
&nbsp;

This will create a folder with a Vite template for a React app. Go ahead and `cd` into the created folder and run `npm i` to install React and the other dependencies. 

Afterward, you should be ready to run your app and start building:

```sh
$ npm run dev
```
&nbsp;

&nbsp;
## Clean up the Starter Code

You'll notice that the Vite React template adds in some basic code and styling. If you open `/src/App.jsx` you'll see that the App component has code for the spinning React logo and a counter component. Go ahead and delete this code so you have the following:

```jsx
export default function App() {
  return (
    <>
    </>
  )
}

```
&nbsp;

**NOTE**: You'll probably also want to get rid of the code in `/src/App.css` and `/src/index.css`. Both files are imported so that they run as Global CSS files. You may want to change the App file to be a CSS module and use the Index file as a global CSS file, or use App as a global file and delete the index file. It's up to you how you organize your CSS. You can read more about CSS modules in Vite [here](https://vitejs.dev/guide/features.html#css-modules).

&nbsp;
## Create a Calculator

![react state](./react_state.jpg)

Creating a calculator is a bit of a time-honored tradition when learning to program, but here it should really help you get up to speed on working with React State pretty quickly.

For this exercise, you're going to create a calculator with some limitations:

1. The calculator will only accept two numbers per operation.
1. The calculator will only have one operation available.

There are a number of ways to solve this type of problem in React, so I won't be specific on how you should or shouldn't construct your app. You can create additional components as you wish, or perform everything within the `App` component. However, you **MUST** use the `useState` hook to work with the data within your app. Remember that normal variables don't work the same in a React component due to re-renders causing the function to run again.

**HINT**: Think about how a physical calculator works. You could create buttons for 0-9, but you could also use `input` elements to capture user input for numbers to perform your operation on. Both approaches have advantages and disadvantages. 

&nbsp;
### **Additional Practice**

If you complete the single operation, feel free to add additional operations. If you haven't already, you could also allow for handling decimals and negative numbers.

&nbsp;
## Deployment Practice

Once you're finished (or mostly finished), go ahead and try deploying your site to [Vercel](https://vercel.com/docs).

To deploy, make an account with Vercel and either [attach Vercel to your GitHub repository](https://vercel.com/docs/concepts/get-started/deploy#create-and-deploy-a-project) or [use the Vercel CLI](https://vercel.com/docs/cli) to [deploy](https://vercel.com/docs/cli/deploy) your site.

Vercel should be able to recognize your app as a Vite/React app and configure accordingly.

**NOTE**: There's no need for the `vercel.json` file this time around because our app only has one route. However, you could add it anyway if you like (this would redirect all URL paths to our calculator). The code for that file is below:

&nbsp;
```json
{
  "routes": [
    {
      "src": "/[^.]+",
      "dest": "/",
      "status": 200
    }
  ]
}
```
