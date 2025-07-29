export const learnings = [
  {
    id: "day-1",
    title: "Day 1 – Variables & Data Types",
    content: (
      <>
        <p>
          We learned about the three keywords used to declare variables in
          JavaScript: <code>var</code>, <code>let</code>, and <code>const</code>
          .
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code>var</code> – function-scoped, hoisted. ❌ Not recommended due
            to unpredictable behavior.
          </li>
          <li>
            <code>let</code> – block-scoped, can be reassigned. ✅ Use this for
            most variables.
          </li>
          <li>
            <code>const</code> – block-scoped, cannot be reassigned. ✅ Use this
            by default if the value won’t change.
          </li>
        </ul>
        <p>We also explored JavaScript data types:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>String</strong> – e.g., <code>"hello"</code>
          </li>
          <li>
            <strong>Number</strong> – both integers and floats, e.g.,{" "}
            <code>42</code>, <code>3.14</code>
          </li>
          <li>
            <strong>Boolean</strong> – <code>true</code> or <code>false</code>
          </li>
          <li>
            <strong>undefined</strong> – declared but not assigned
          </li>
          <li>
            <strong>null</strong> – intentional absence of value
          </li>
          <li>
            <strong>Object</strong> – key-value pairs
          </li>
          <li>
            <strong>Array</strong> – ordered list of values
          </li>
        </ul>
      </>
    ),
    code: `// Variable declarations
let name = "Alice";
const age = 25;
var oldWay = "Avoid using var";

// Data types
let str = "Hello";
let num = 42;
let float = 3.14;
let isActive = true;
let unknown;
let empty = null;
let person = { name: "Bob", age: 30 };
let items = [1, 2, 3, "four"];`,
  },
  {
    id: "day-2",
    title: "Day 2 - Basic Operations & User Input",
    content: (
      <>
        <p className="mb-4">
          Today we explored basic <strong>arithmetic operations</strong> in
          JavaScript: addition (<code>+</code>), subtraction (<code>-</code>),
          multiplication (<code>*</code>), and division (<code>/</code>).
        </p>

        <p className="mb-4">
          We also learned how to use the <code>prompt()</code> method to get
          user input from the browser, and then convert that string input into a
          number using <code>parseInt()</code> or <code>parseFloat()</code>.
        </p>

        <p>
          ⚠️ Remember: <code>prompt()</code> always returns a string, so you
          must convert it if you want to do math operations.
        </p>
      </>
    ),
    code: `const num1 = prompt("Enter first number:");
const num2 = prompt("Enter second number:");

// Convert string input to integers
const a = parseInt(num1);
const b = parseInt(num2);

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);`,
  },
];
