import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Briefcase, Target, Rocket, Factory } from "lucide-react"

const useCases = [
  {
    icon: Rocket,
    title: "Startups & Scale-ups",
    description: "Fast-growing companies that need to hire quickly while maintaining quality standards.",
    scenarios: [
      "Rapid team expansion",
      "Limited HR resources",
      "Need for efficient processes",
      "Building company culture",
    ],
  },
  {
    icon: Building2,
    title: "Mid-size Companies",
    description: "Established businesses looking to optimize their recruitment processes and reduce costs.",
    scenarios: [
      "Multiple department hiring",
      "Standardizing hiring practices",
      "Improving time-to-hire",
      "Reducing recruitment costs",
    ],
  },
  {
    icon: Factory,
    title: "Enterprise Organizations",
    description: "Large corporations requiring scalable, compliant, and data-driven recruitment solutions.",
    scenarios: [
      "High-volume hiring",
      "Complex approval workflows",
      "Compliance requirements",
      "Global recruitment needs",
    ],
  },
  {
    icon: Users,
    title: "HR Teams & Managers",
    description: "Human resources professionals who want to streamline operations and make data-driven decisions.",
    scenarios: [
      "Managing multiple job openings",
      "Coordinating with hiring managers",
      "Tracking recruitment metrics",
      "Ensuring fair hiring practices",
    ],
  },
  {
    icon: Target,
    title: "Recruitment Agencies",
    description: "Staffing firms and recruitment consultancies serving multiple clients efficiently.",
    scenarios: [
      "Managing client requirements",
      "Candidate database management",
      "Faster candidate matching",
      "Client reporting and analytics",
    ],
  },
  {
    icon: Briefcase,
    title: "Hiring Managers",
    description: "Department heads and team leads who need to find the right talent for their specific roles.",
    scenarios: [
      "Technical role requirements",
      "Team collaboration on hiring",
      "Interview scheduling",
      "Candidate evaluation",
    ],
  },
]

export function UseCasesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Who Is RecruitExe For?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform is designed to serve diverse organizations and professionals across industries, from
            fast-growing startups to large enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-full mr-4 group-hover:bg-purple-600/30 transition-colors">
                    <useCase.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wide">Perfect For:</h4>
                  <ul className="space-y-1">
                    {useCase.scenarios.map((scenario, scenarioIndex) => (
                      <li key={scenarioIndex} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                        {scenario}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Not Sure If RecruitExe Is Right for You?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Schedule a personalized demo to see how our platform can address your specific hiring challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors border-0">
                Schedule Demo
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
