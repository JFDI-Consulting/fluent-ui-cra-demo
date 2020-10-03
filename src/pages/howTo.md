#### How To

It's not immediately obvious from the documentation how to
do quite a few things using Fluent UI. This is partly
because it's a work-in-progress. This demo app has solved a
number of common challenges.

-   Switching themes is achieved using the _React Context API_ in a convenient custom wrapper (\`ThemeContext.js\`). The theme is switched by calling its internal state's set-state function, provided by the _useTheme_ custom hook. Applying the theme is done by the Fabric component's _applyTheme_ method, with Fluent UI's \`Customizations.applySettings()\` called in a \`useEffect\` hook whenever the theme changes.
-   The URL structure of the app reflects and controls the current context. The React Router is shown interacting with the Fluent UI _Pivot_ and _Nav_ components.
-   These documentation pages were created using Markdown and transformed into HTML by React Markdown, for the sheer convenience of writing documentation as markdown instead of HTML in JSX.
-   CSS grid is used along with custom components like ContainerWithSidebar and semantic SCSS classes to fill the gap in presentation surface components in Fluent UI.
