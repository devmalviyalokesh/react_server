import { createElement } from "react";
import { createRoot } from "react-dom/client";

const title = createElement("h1", null, "React loaded successfully. Updated!");

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(title);
