import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, MessageSquare, BarChart3, FileText, Zap, Globe, Target, TrendingUp, Mail } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Candidate Screening",
    description:
      "Automatically screen and rank candidates based on your specific requirements and company culture fit.",
  },
  {
    icon: Users,
    title: "Applicant Tracking System",
    description:
      "Streamlined ATS to manage your screening pipeline from application to shortlisting, with centralized resume collection at one place for easy access and organization.",
  },
  {
    icon: MessageSquare,
    title: "Team Collaboration",
    description:
      "Built-in communication tools for screening teams to collaborate and share candidate feedback seamlessly.",
  },
  {
    icon: BarChart3,
    title: "Screening Analytics",
    description:
      "Deep insights into your screening metrics, time-to-shortlist, screening funnel performance, and comprehensive tracking of all application statuses.",
  },
  {
    icon: FileText,
    title: "Resume Intelligence",
    description: "AI-powered resume parsing and candidate matching to identify the best fits quickly during screening.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Automate repetitive screening tasks, email sequences, and candidate status updates during evaluation.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Posting",
    description: "Post jobs across multiple job boards and social platforms to collect applications in one place.",
  },
  {
    icon: Target,
    title: "Candidate Sourcing",
    description: "Advanced search and sourcing tools to find and screen passive candidates for your talent pools.",
  },
  {
    icon: TrendingUp,
    title: "Screening Performance",
    description: "Monitor screening efficiency and candidate evaluation success rates with detailed metrics.",
  },
  {
    icon: Mail,
    title: "Email Templates",
    description: "Pre-built, customizable email templates for candidate communication during the screening process.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything Your Screening Team Needs</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive screening tools designed to help HR professionals and recruiters efficiently evaluate and
            shortlist the best candidates from your applicant pool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mx-auto mb-4 group-hover:bg-purple-600/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
