import { MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CollegeCard({ college }) {
  return (
    <Card
      className="group overflow-hidden hover-elevate transition-all duration-300 w-full h-full flex flex-col justify-between"
      data-testid={`card-college-${college.id}`}
    >
      {/* Card Content */}
      <CardContent className="p-8 flex flex-col grow justify-between">
        {/* Top Section (Badge + Info) */}
        <div className="flex flex-col grow">
          <div className="flex justify-end mb-4">
            <Badge variant="secondary" className="px-3 py-1 relative left-5 bottom-4 text-sm">
              {college.type}
            </Badge>
          </div>

          {/* College Name & Location */}
          <div className="flex flex-col items-start space-y-2 grow">
          <h3 className="font-heading text-xl font-semibold text-foreground leading-snug text-left wrap-break-words group-hover:text-primary transition-colors">
              {college.name}
            </h3>

            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="capitalize">
                {college.city}, {college.state}
              </span>
            </div>
          </div>

          {/* Tuition Info */}
          <div className="pt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
              <TrendingUp className="h-5 w-5 text-chart-4" />
            </div>
            <div>
              <div
                className="text-base font-semibold text-foreground"
                data-testid={`stat-tuition-${college.id}`}
              >
                ${(college.annual_cost / 1000).toFixed(0)}k
              </div>
              <div className="text-xs text-muted-foreground">Tuition</div>
            </div>
          </div>

          <div className="pt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
              <TrendingUp className="h-5 w-5 text-chart-4" />
            </div>
            <div>
              <div
                className="text-base font-semibold text-foreground"
                data-testid={`stat-tuition-${college.id}`}
              >
                ${(college.median_earnings / 1000).toFixed(0)}k
              </div>
              <div className="text-xs text-muted-foreground">Tuition</div>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-8 pt-0">
        <Button
          variant="ghost"
          className="w-full group/btn justify-between text-base py-6"
        >
          <span>View Details</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
