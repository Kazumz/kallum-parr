This repository has been set up to demonstrate my capabilities as a Developer.

Development Notes (Eventually to be a Wiki):
    -   import React from "React"; does not work when using TypeScript as React is using CommonJS module system and has no recognisable default export for the ESNext module system. The solution here is to use import * as React from "React" or specifically identify what you need/want to avoid bloating your final bundle sizes.