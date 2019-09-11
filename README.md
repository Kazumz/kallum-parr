This repository has been set up to demonstrate my capabilities as a Developer.

Major Technologies Utilised:
<ul>
    <li>
        Gatsby (Site Generation)
    </li>
    <li>
        React 16.9.x
    </li>
    <li>
        TypeScript 3.6.3
    </li>
    <li>
        SCSS with SCSS Modules
    </li>
    <li>
        ESLint (JavaScript, TypeScript, React Hooks)
    </li>
</ul>

Key Points:
<ul>
    <li>
        I have used Gatsby here as the Site Generator over CRA as it provides out of the box GraphQL, SSR, and excellent plugin support. This is fantastic for getting up and running fast without thinking too much about environment maintenance.
    </li>
    <li>
        Ever since learning to develop in React, I have become extremely fond of it. It's easy to understand and use and doesn't force you down a path like Frameworks do, because it's a Library! With support from Facebook, it's quickly growing to become the most popular and best web development tool out there.
    </li>
    <li>
        Coming from a C# background and moving to Web Technologies, I was aware of JavaScript and it's looseness. I wanted something that could provide me the confidence that C# could, so TypeScript was the answer to that. Ever since using TypeScript and JavaScript, I wouldn't recommend ever developing a project without TypeScript. Even for small scale projects, the benefit of typing your code and being strict means you're less likely to find smells and bugs. It allows your project to be scalable and enforce consistent code with confidence.
    </li>
</ul>

Development Points:
<ul>
    <li>
        import React from "React"; does not work when using TypeScript as React is using CommonJS module system and has no recognisable default export for the ESNext module system. The solution here is to use import * as React from "React" or specifically identify what you need/want to avoid bloating your final bundle sizes.
    </li>
</ul>