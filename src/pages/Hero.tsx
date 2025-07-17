import { Button } from "../components/ui/button";
import { Sparkles} from "lucide-react";
import AnimatedTooltip from "../components/shared/AnimatedTooltip";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary">
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            <span>CodeLearn- a Learning Platforn</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Learn New Skills. Build Your Future.
          </h1>
          <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl">
            Access top-quality courses taught by industry experts. Whether you're upskilling, switching careers, or exploring a new passion — CodeLearn has what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary" className="px-8">
              <a href="/signup">Get Learning Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/demo">Watch Demo</a>
            </Button>
          </div>
          <div className="flex items-center justify-center mt-8">
            <AnimatedTooltip items={people} />
          </div>
          <p className="text-sm text-muted-foreground">
            CodeLearn is a platform that connects learners with industry experts, offering a wide range of courses to help you grow professionally and personally. Join our community today and start your learning journey!
          </p>
        </div>
      </div>
    </section>
  );
}

const people = [
  {
    id: 1,
    name: "Python",
    designation: "www.python.com",
    image: "../assets/python.png",
  },
  {
    id: 2,
    name: "JavaScript",
    designation: "www.javascript.com",
    image: "../assets/javascript.png",
  },
  {
    id: 3,
    name: "React",
    designation: "www.reactjs.org",
    image: "../assets/react.png",
  },
  {
    id: 4,
    name: "Node.js",
    designation: "www.nodejs.org",
    image: "../assets/nodejs.png",
  },
  {
    id: 5,
    name: "MySQL",
    designation: "www.mysql.com",
    image: "../assets/mysql.png",
  },
];
