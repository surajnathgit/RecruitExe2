import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-20 h-20 bg-purple-600/20 rounded-full mx-auto mb-8">
            <Sparkles className="w-10 h-10 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Screening Process?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of HR teams already using RecruitExe to screen candidates faster and build stronger shortlists
            with data-driven candidate evaluation.
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
              Book Demo
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-6">No setup fees • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
