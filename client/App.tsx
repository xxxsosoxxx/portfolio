import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4"></header>
      <BrowserRouter>
        <div className="smooth-scroll">
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
}

