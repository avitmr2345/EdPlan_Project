import { MapPin, ArrowRight } from "lucide-react";
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
            <Badge
              variant="secondary"
              className="px-3 py-1 relative left-5 bottom-4 text-sm"
            >
              {college.type == "Proprietary"
                ? "Private For-Profit"
                : college.type}
            </Badge>
          </div>

          {/* College Name & Location */}
          <div className="flex flex-col items-start space-y-2 grow">
            <h3 className="font-heading text-xl font-bold leading-snug text-left text-[#007000] wrap-break-words transition-colors">
              <a
                href={`https://${college.college_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:underline-offset-2 decoration-[#007000]"
              >
                {college.name}
              </a>
            </h3>

            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="capitalize">
                {college.city}, {college.state}
              </span>
            </div>
          </div>

          {/* College Info */}
          <div className="pt-12 flex flex-col items-start gap-2">
            <h3 className="text-sm">AVERAGE ANNUAL COST</h3>
            <div className="font-bold text-xl text-[#10274e]">
              {college.annual_cost != null
                ? `$${(college.annual_cost / 1000).toFixed(0)}k`
                : "N/A"}
            </div>
          </div>

          <div className="pt-4 flex flex-col items-start gap-2">
            <h3 className="text-sm">MEDIAN EARNINGS</h3>
            <div className="font-bold text-xl text-[#10274e]">
              {college.median_earnings != null
                ? `$${(college.median_earnings / 1000).toFixed(0)}k`
                : "N/A"}
            </div>
          </div>
          
          <div className="pt-4 flex flex-col items-start gap-2">
            <h3 className="text-sm">ACCEPTANCE RATE</h3>
            <div className="font-bold text-xl text-[#10274e]">
              {college.acceptance_rate != null
                ? `${(college.acceptance_rate * 100).toFixed(0)}%`
                : "100%"}
            </div>
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-8 pt-0">
        <Button
          variant="outline"
          className="w-full group/btn justify-between shadow hover:text-white py-4 hover:bg-primary"
        >
          <span>View Details</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
