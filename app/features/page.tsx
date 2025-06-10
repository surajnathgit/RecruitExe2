"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Users, MessageSquare, BarChart3, FileText, Zap, ArrowRight, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Candidate Screening",
    description:
      "Automatically screen and rank candidates based on your specific requirements and company culture fit.",
    benefits: [
      "Automated resume parsing and analysis",
      "Precise skill and experience matching",
      "Bias reduction algorithms for fair evaluation",
      "Data-driven insights for informed decisions",
      "Faster shortlisting and reduced time-to-screen",
    ],
  },
  {
    icon: Users,
    title: "Applicant Tracking System",
    description: "Streamlined ATS to manage your screening pipeline from application to shortlisting.",
    benefits: [
      "Centralized candidate database",
      "Screening pipeline stage management",
      "Automated status updates",
      "Shortlist organization",
    ],
  },
  {
    icon: MessageSquare,
    title: "Team Collaboration",
    description: "Built-in communication tools for screening teams to collaborate and share feedback seamlessly.",
    benefits: ["Real-time feedback sharing", "Screening scorecards", "Team decision tracking", "Comment threads"],
  },
  {
    icon: BarChart3,
    title: "Screening Analytics",
    description: "Deep insights into your screening metrics, time-to-shortlist, and screening funnel performance.",
    benefits: ["Time-to-shortlist tracking", "Source effectiveness", "Cost-per-screen analysis", "Custom reporting"],
  },
  {
    icon: FileText,
    title: "Resume Intelligence",
    description: "AI-powered resume parsing and candidate matching to identify the best fits quickly during screening.",
    benefits: ["Automatic data extraction", "Skills identification", "Experience matching", "Duplicate detection"],
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive screening tasks, email sequences, and candidate status updates.",
    benefits: ["Email automation", "Status change triggers", "Task assignments", "Reminder notifications"],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Modern Screening
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how RecruitExe's comprehensive suite of AI-powered tools can transform your candidate screening
              process and help you identify the best talent faster.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mr-4">
                      <feature.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience These Screening Features?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how RecruitExe can revolutionize your candidate screening process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg border-0"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
