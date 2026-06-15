export const notesData = [
  {
    id: 1,
    title: "Understanding React Components",
    body: `React components are the building blocks of every React application.
           They help developers split the UI into reusable and independent pieces.
           Components can be functional or class-based depending on the project setup.
           Using reusable components makes applications easier to manage and scale.
           Props and state are commonly used inside components for dynamic behavior.`,
    date: "2026-05-26",
    color: 'blue'
  },

  {
    id: 2,
    title: "What is JSX in React?",
    body: `JSX stands for JavaScript XML and allows writing HTML inside JavaScript.
           It makes React code more readable and easier to understand.
           Browsers cannot read JSX directly, so Babel converts it into regular JavaScript.
           JSX expressions can include variables, functions, and dynamic content.
           Most React developers use JSX to build user interfaces efficiently.`,
    date: "2026-05-24",
    color: 'pink'
  },

  {
    id: 3,
    title: "Using useState Hook",
    body: `The useState hook allows functional components to manage state.
           It returns a state value and a function to update that value.
           Whenever state changes, React automatically re-renders the component.
           Hooks simplified state management compared to older class components.
           useState is one of the most commonly used hooks in React applications.`,
    date: "2026-05-22",
    color: 'yellow'
  }
 
]