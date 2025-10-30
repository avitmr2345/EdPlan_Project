import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import CollegeCard from "./CollegeCard";

export default function HeroSection() {
  const [collegeData, setCollegeData] = useState(null);

  useEffect(() => {
    const fetchCollegeData = async () => {
      try {
        const apiKey = import.meta.env.VITE_COLLEGE_API_KEY;
        const response = await fetch(
          `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}&school.name=Santa Fe College`
        );

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched college data:", data);
        setCollegeData(data);
      } catch (error) {
        console.error("Error fetching college data:", error);
      }
    };

    fetchCollegeData();
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border mb-6 hover-elevate transition-all">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by thousands of students
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Find Your Perfect{" "}
            <span className="text-primary">College Match</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            Discover and compare colleges, explore programs, and create
            personalized education plans. Make informed decisions about your
            future with comprehensive data and expert guidance.
          </p>

          {/* College Cards Section */}
          {collegeData && collegeData.results?.length > 0 && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collegeData.results.slice(0, 20).map((college) => {
                console.log("Formatted College:", college);
                const formattedCollege = {
                  id: college.id,
                  name: college.school.name,
                  city: college.school.city,
                  state: college.school.state,
                  annual_cost: college.latest.cost.avg_net_price.overall,
                  median_earnings: college.latest.earnings["10_yrs_after_entry"].median,
                  type: college.latest.school.peps_ownership
                };

                return (
                  <CollegeCard key={college.id} college={formattedCollege} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
