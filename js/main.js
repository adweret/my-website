// Портфолио Alikhan: скрипт окна с кодом (переключение JavaScript / Python / C++).

const L = {
  JavaScript: [
    "hello.js",
    "const|let|console|log",
    '// A little introduction\nconst developer = {\n  name: "Alikhan",\n  focus: "Building for the web",\n  learning: ["Python", "C++"]\n};\n\nconsole.log(developer.name);',
  ],
  Python: [
    "hello.py",
    "print",
    '# Practice: Python\ndeveloper = {\n    "name": "Alikhan",\n    "focus": "Building for the web",\n}\n\nprint(developer["name"])',
  ],
  "C++": [
    "hello.cpp",
    "int|return",
    '// Practice: C++\n#include <iostream>\n\nint main() {\n    std::cout << "Hello, world!" << std::endl;\n    return 0;\n}',
  ],
};
const code = document.getElementById("code"),
  fn = document.getElementById("fn"),
  tabs = document.querySelectorAll(".tabs button");
function show(n) {
  const [f, k, src] = L[n];
  fn.textContent = f;
  const re = new RegExp(
    '(//.*|#(?!include).*)|("[^"]*")|(#include|\\b(?:' + k + ")\\b)",
    "g",
  );
  code.innerHTML = src
    .split("\n")
    .map(
      (l) =>
        "<div>" +
        l
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(
            re,
            (m, c, s) =>
              '<i class="' + (c ? "c" : s ? "s" : "k") + '">' + m + "</i>",
          ) +
        "</div>",
    )
    .join("");
}
tabs.forEach((b) =>
  b.addEventListener("click", () => {
    tabs.forEach((t) => t.setAttribute("aria-selected", t === b));
    show(b.textContent);
  }),
);
show("JavaScript");
