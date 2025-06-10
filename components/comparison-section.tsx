import { Check, X } from "lucide-react"

const comparisonPoints = [
  {
    aspect: "Candidate Screening",
    traditional: "Manual resume review, prone to bias and inconsistency",
    recruitexe: "AI-powered screening with objective skill matching and bias reduction",
  },
  {
    aspect: "Time Investment",
    traditional: "Hours spent sorting through emails and attachments",
    recruitexe: "Automated sorting and prioritization, saving 60% of screening time",
  },
  {
    aspect: "Application Tracking",
    traditional: "Spreadsheets and email folders, easy to lose track of applicants",
    recruitexe: "Centralized ATS with complete visibility of screening pipeline",
  },
  {
    aspect: "Team Collaboration",
    traditional: "Forwarded emails, missed communications, siloed feedback",
    recruitexe: "Real-time collaboration, centralized feedback, and shared screening decisions",
  },
  {
    aspect: "Analytics & Reporting",
    traditional: "Manual data collection, limited insights, time-consuming reports",
    recruitexe: "Automated screening metrics, real-time dashboards, and actionable insights",
  },
  {
    aspect: "Candidate Experience",
    traditional: "Delayed responses, lack of updates, inconsistent communication",
    recruitexe: "Automated screening updates, transparent process, and professional engagement",
  },
  {
    aspect: "Data Organization",
    traditional: "Scattered across multiple email threads and folders",
    recruitexe: "Centralized database with searchable candidate profiles and screening history",
  },
  {
    aspect: "Communication",
    traditional: "Manual email composition and follow-ups",
    recruitexe: "Automated email sequences and personalized screening templates",
  },
  {
    aspect: "Evaluation Process",
    traditional: "Inconsistent screening criteria and subjective evaluation",
    recruitexe: "Standardized screening workflows and objective candidate assessment",
  },
  {
    aspect: "Scalability",
    traditional: "Becomes overwhelming with high volume applications",
    recruitexe: "Easily handles high-volume screening with automation",
  },
  {
    aspect: "Cost Efficiency",
    traditional: "High manual screening costs and potential missed candidates",
    recruitexe: "Reduced operational costs and improved screening quality",
  },
  {
    aspect: "Decision Making",
    traditional: "Based on gut feeling and limited screening data",
    recruitexe: "Data-driven insights and comprehensive candidate screening analytics",
  },
]

export function ComparisonSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black/20 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Modern Screening vs. Traditional Methods</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how RecruitExe transforms your candidate screening process compared to traditional email-based
            evaluation methods.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-12">
            <thead>
              <tr>
                <th className="p-4 text-left bg-white/10 border border-white/10 text-white font-semibold rounded-tl-lg">
                  Screening Aspect
                </th>
                <th className="p-4 text-left bg-white/10 border border-white/10 text-white font-semibold">
                  Traditional Email Process
                </th>
                <th className="p-4 text-left bg-purple-600/20 border border-white/10 text-white font-semibold rounded-tr-lg">
                  RecruitExe Platform
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonPoints.map((point, index) => (
                <tr key={index} className="hover:bg-white/5">
                  <td
                    className={`p-4 border border-white/10 text-white font-medium ${
                      index === comparisonPoints.length - 1 ? "rounded-bl-lg" : ""
                    }`}
                  >
                    {point.aspect}
                  </td>
                  <td className="p-4 border border-white/10 text-gray-300">
                    <div className="flex items-start">
                      <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{point.traditional}</span>
                    </div>
                  </td>
                  <td
                    className={`p-4 border border-white/10 bg-purple-600/10 text-gray-300 ${
                      index === comparisonPoints.length - 1 ? "rounded-br-lg" : ""
                    }`}
                  >
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{point.recruitexe}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-300 mb-6">
            Ready to leave outdated screening methods behind and embrace the future of candidate evaluation?
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Upgrade Your Screening Process
          </button>
        </div>
      </div>
    </section>
  )
}
