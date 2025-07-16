import {
  ShieldCheck,
  PenTool,
  Share2,
  Layers,
  Zap,
  GraduationCap,
  MonitorSmartphone
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

// ✅ Define a type for each feature
interface Feature {
  icon: React.ElementType; // Icon is passed as a component
  title: string;
  description: string;
}

// ✅ Props for FeatureCard
interface FeatureCardProps extends Feature {}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary">
            <Zap className="mr-1 h-3.5 w-3.5" />
            <span>Powerful Features</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need to Learn and Grow
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Our platform makes learning simple, engaging, and effective.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Feature list with component references (not JSX elements)
const features: Feature[] = [
  {
    icon: GraduationCap,
    title: "Expert-Led Courses",
    description:
      "Learn from top instructors across technology, business, design, and more.",
  },
  {
    icon: PenTool,
    title: "Interactive Learning",
    description:
      "Quizzes, assignments, and hands-on projects to reinforce your skills.",
  },
  {
    icon: Layers,
    title: "Flexible Learning Paths",
    description:
      "Study at your own pace—anytime, anywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Course Certificates",
    description: "Earn verified certificates to boost your resume and LinkedIn profile.",
  },
  {
    icon: Share2,
    title: "Community & Support",
    description: "Join a vibrant learner community and get support whenever you need it.",
  },
  {
    icon: MonitorSmartphone,
    title: " Mobile & Desktop Access",
    description:
      "Learn from any device with a seamless experience.",
  },
];

// ✅ FeatureCard component
function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 ">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4 ">
        <div className="p-3 rounded-full ">
          <Icon className="h-10 w-10 text-primary " />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
