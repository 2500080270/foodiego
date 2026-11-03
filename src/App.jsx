import { useEffect } from "react";
import template from "./template.html?raw";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/legacy.js";
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: template }} />;
}
