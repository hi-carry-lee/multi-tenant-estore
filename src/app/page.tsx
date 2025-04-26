import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-20 max-w-2xl gap-4">
      <h1>Hello World</h1>
      <Button variant="elevated">Click me</Button>
      <Input
        type="text"
        placeholder="Enter your name"
        className="w-full text-base"
      />
      <Progress value={33} />
    </div>
  );
}
