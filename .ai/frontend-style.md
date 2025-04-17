## Tailwind CSS & Theme Setup

### Use Tailwind CSS

- Tailwind is our primary CSS utility framework.
- We are using the latest version with JIT enabled (via `tailwind.config.js`).
- Apply classes directly in templates.

### Dark Mode Strategy

- Use Tailwind’s **`class` strategy** for dark mode (not `media`).
- Add `dark:` variants to relevant class names.
- Toggle `dark` class on `<html>` manually via JS or framework logic (e.g., Vue, React).
- Example:

  ```html
  <div class="bg-white text-black dark:bg-gray-900 dark:text-white">...</div>
