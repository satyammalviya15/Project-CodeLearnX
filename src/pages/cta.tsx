import { Button } from "../components/ui/button";
import { CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600/10 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-black to-bg-blue-900"></div>
          <div className="relative grid gap-6 lg:grid-cols-2 items-center p-8 md:p-12 lg:p-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
                  Transform the Way You Learn
                </h2>
                <p className="text-primary-foreground/90 md:text-xl max-w-md">
                  Join learners who are growing their careers and mastering new skills on CodeLearn.
                </p>
              </div>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    <span className="text-primary-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" variant="secondary" className="px-8">
                  <a href="/signup">Get Started for Free</a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground"
                >
                  <a href="/demo">Watch Demo</a>
                </Button>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="space-y-2 mb-4">
                <h3 className="text-xl font-bold text-primary-foreground">
                  CodeLearn
                </h3>
                {/* <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div> */}
              </div>

              <blockquote className="text-primary-foreground/90 italic mb-4">
                "A modern learning platform for students, professionals, and teams.
                CodeLearn has transformed the way approach learning new skills."
              </blockquote>

              {/* <div className="flex items-center gap-3">
                <div className="flex items-center h-10 w-10 rounded-full bg-primary-foreground/20">
                  <img
                    height={50}
                    width={50}
                    src="www.google.com"
                    alt="Satyam Malviya"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">
                    Jessica Williams
                  </p>
                  <p className="text-sm text-primary-foreground/70">
                    Marketing Director, TechCorp
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  "Join a community of learners and experts",
  "Access resources to help you succeed",
  "Learn at your own pace with flexible options",
  "No credit card required to get started",
];
