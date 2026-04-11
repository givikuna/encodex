# Contributing to encodex

First off, thank you for considering contributing to `encodex`!
This library aims to be the ultimate, modular extension of TypeScript's capabilities, spanning everything from basic utilities to quantum computing and astrophysics.

To keep this massive project organized, maintainable, and highly functional, we have to have a few strict guidelines.

Please read through this document before opening a Pull Request.

## Code of Conduct
* **Keep it professional:** Zero tolerance for swearing, hostility, or toxic behavior in issues, pull requests, or code comments.
* **Be constructive:** We are all here to learn and build something cool. Critique the code, not the coder.

## Development Workflow

We enforce a standard Fork & Pull Request workflow. **Do not make commits directly via the GitHub website UI** unless you are a designated core maintainer/project leader fixing a critical typo.

1.  **Fork the repository** to your own GitHub account.
2.  **Clone it locally:** `git clone https://github.com/YOUR_USERNAME/encodex.git`
3.  **Create a branch** for your feature or bugfix: `git checkout -b feat/add-tim-sort` or `git checkout -b fix/bst-deletion`.
4.  **Write your code**, adhering to the guidelines below.
5.  **Commit your changes** with clear, descriptive messages.
6.  **Push to your fork** and open a Pull Request against the `main` branch of the original repository.

## Coding Standards

### Strict Typing & Modularity
`encodex` is supposed to be heavily modular. Everything should be easily exportable and contained.

* **No `any`:** We strongly type *everything*. Using `any` defeats the purpose of TypeScript. If you absolutely must bypass the type system and there is no other way, you must leave a comment explaining exactly *why*.
* **Modular Design:** Functions and classes should do one thing and do it well.

### Language Support
While this is a TypeScript-first project, we allow contributions written in many JavaScript dialects.
You are only allowed to use the following list of allowed languages:
* JavaScript
* TypeScript
* LiveScript

If you'd like to use another language you must submit an issue requesting support for using that language.
If language usage is approved but the language does not have support for Jest or Rollup you must make a compatibility layer yourself.

* If you're writing the code in something that isn't TypeScript **you MUST include a handwritten `[filename].d.ts` declaration file.** If TypeScript cannot read and validate the types of your module, the PR will be rejected.

### Documentation (IntelliSense)
Every function, class, and complex type must be documented using TSDoc/JSDoc comments. This ensures that users see helpful tooltips when hovering over the code in VSCode.

**Example of what we expect:**
```typescript
/**
 * Clamps a number between a minimum and maximum value.
 * * @param value - The number to clamp.
 * @param min - The lower bound.
 * @param max - The upper bound.
 * @returns The clamped number.
 * * @example
 * ```typescript
 * clamp(15, 0, 10); // Returns 10
 * clamp(-5, 0, 10); // Returns 0
 * ```
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}
```
### Important Order

To keep files clean and readable, please order your imports as follows, separated by a blank line:
1. Native Node Modules (if applicable, e.g., `fs`, `path`, etc...)
2. External NPM Packages
3. Internal Absolute Imports (e.g., `@/Utils/...`)
4. Internal Relative Imports (e.g., `../Interfaces/...`, `./helper`)

## Extending the Library

### Adding to an Existing Module

Find the relevant folder (e.g., `Sorting/`).
Add your file, write your tests in `tests/`, and ensure your new feature is exported in the module's index.ts or main namespace file (e.g., `Sorting.ts`).

### Creating a New Project Part/Module

If you are adding an entirely new domain (like a module), follow the directory structure:
1. Create a new folder in the root directory (e.g., `NewModule/`).
2. Create the main entry file matching the folder name (e.g., `NewModule/NewModule.ts`).
3. Set up the namespace and export your sub-modules.
4. Update the root `index.ts` to export your new module.

### Dependency Policy (Adding new NPM libraries)

**Do not add new NPM dependencies without permission.**
We want to keep encodex as dependency-free and lightweight as possible. If you are working on a feature that strictly requires an external library, you must first open an Issue and discuss it with a project leader. If approved, you may proceed.

