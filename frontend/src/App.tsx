import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>
        Click me
        <X />
      </Button>
    </div>
  );
}

export default App;
