import { Button } from "@/components/ui/button";
import { LogOut, CircleQuestionMark } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Button variant="ghost">
        <Link to="/help">
          <CircleQuestionMark />
        </Link>
      </Button>
      <Button variant="ghost">
        <Link to="/login">
          <LogOut />
        </Link>
      </Button>
      Home Page
    </div>
  );
}
