import { Card, CardContent } from "@/components/ui/card"
import { Clock, Award, Zap, Scale, UserCheck, BarChart3, DollarSign } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Save Time & Resources",
    description:
      "Automate repetitive screening tasks, reducing manual effort and allowing your team to focus on strategic candidate evaluation and shortlisting.",
  },
  {
    icon: Award,
    title: "Improve Screening Quality",
    description:
      "AI-driven insights ensure you identify the most suitable candidates during screening, leading to better shortlists and higher quality candidate pools.",
  },
  {
    icon: Zap,
    title: "Boost Screening Efficiency",
    description:
      "Streamline your entire candidate screening pipeline from application collection to shortlisting, making your evaluation process faster and more effective.",
  },
  {
    icon: Scale,
    title: "Reduce Bias",
    description:
      "Leverage AI to objectively evaluate candidates based on qualifications during screening, significantly minimizing unconscious human biases in your evaluation process.",
  },
  {
    icon: UserCheck,
    title: "Enhanced Candidate Experience",
    description:
      "Provide faster screening responses, transparent communication about application status, and a smoother evaluation journey for all applicants.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Screening",
    description:
      "Gain actionable insights from AI-powered screening analytics, allowing you to make informed candidate evaluation decisions and optimize your screening strategies.",
  },
  {
    icon: DollarSign,
    title: "Significant Cost Savings",
    description:
      "Lower screening operational costs, reduce time spent on manual evaluation, and decrease dependency on extensive manual screening labor, boosting your ROI.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black/20 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose RecruitExe for Screening</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform delivers tangible benefits that transform how you screen candidates, saving you time and money
            while improving screening outcomes and candidate quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-full mr-4 group-hover:bg-purple-600/30 transition-colors">
                    <benefit.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
