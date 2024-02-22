import { createElement } from "react";
import { createRoot } from "react-dom/client";

const title = createElement("h1", null, "React loaded successfully with CI/CD.");

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(title);
