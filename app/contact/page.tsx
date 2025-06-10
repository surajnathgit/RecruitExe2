"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send, Clock, CheckCircle } from "lucide-react"
import axios from 'axios'
import { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'

// Define types for the form data and alert state
interface FormData {
  name: string
  email: string
  subject: string
  product: string
  message: string
}

interface AlertState {
  type: 'success' | 'error' | null
  message: string | null
}

// Define the expected Axios response type
interface ContactResponse {
  success: boolean
  message?: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://default-api-url.com'

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    product: 'RecruitExe',
    message: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<AlertState>({ type: null, message: null })

  // Handle input change with typed event
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setAlert({ type: null, message: null })

    try {
      const response = await axios.post<ContactResponse>(`https://parser.fincooper.in/api/contact`, formData)
      if (response.data.success) {
        setAlert({ type: 'success', message: 'Your message has been sent successfully!' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(response.data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setAlert({ type: 'error', message: 'Failed to send your message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#1a1a40] to-[#2d1b69] text-white relative overflow-hidden">
      <Header />

      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              background: 'linear-gradient(135deg, #4E36FF, #FF6B6B)',
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Contact Section */}
      <section className="min-h-screen py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4E36FF] to-[#FF6B6B] bg-clip-text text-transparent">
              Contact Us
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#4E36FF] to-[#FF6B6B] mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
              We'd love to hear from you! Fill out the form below or reach out directly via email.
            </p>
          </div>

          {/* Alert for success/error */}
          {alert.type && (
            <div
              className={`p-4 rounded-lg max-w-lg mx-auto mb-6 text-white transition-all duration-300 ${
                alert.type === 'success' ? 'bg-green-600' : 'bg-red-600'
              }`}
            >
              {alert.message}
              <button
                onClick={() => setAlert({ type: null, message: null })}
                className="ml-4 text-white hover:text-gray-200 transition-colors"
                type="button"
              >
                ✕
              </button>
            </div>
          )}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-6">
              {/* Email Us Card */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#4E36FF]/20 rounded-full mr-3">
                      <Mail className="w-5 h-5 text-[#4E36FF]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#4E36FF]">Email Us</h3>
                  </div>
                  <Link
                    href="mailto:recruitexe@fincoopers.in"
                    className="text-[#4E36FF] font-semibold text-sm hover:underline transition-all duration-200"
                  >
                    recruitexe@fincoopers.in
                  </Link>
                  <p className="text-sm text-gray-300 mt-1">
                    Our team is ready to assist you via email
                  </p>
                </CardContent>
              </Card>

              {/* Response Time Card */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#4E36FF]/20 rounded-full mr-3">
                      <Clock className="w-5 h-5 text-[#4E36FF]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#4E36FF]">Response Time</h3>
                  </div>
                  <p className="text-sm font-semibold text-white">Within 24 hours</p>
                  <p className="text-sm text-gray-300 mt-1">
                    We'll get back to you promptly with the information you need.
                  </p>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
             <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Why Contact Us?</h3>
                  <div className="space-y-3">
                    {[
                      'Get personalized solutions for your document needs',
                      'Learn about our AI-powered document processing',
                      'Request a demo of our platform'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-white mr-2 mt-0.5" />
                        <p className="text-sm text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/7 transition-all duration-300">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#4E36FF] to-[#FF6B6B] p-6 text-center">
                  <h2 className="text-xl font-semibold text-white mb-2">Send Us a Message</h2>
                  <p className="text-sm text-gray-200 opacity-90">
                    We're here to help with any questions you might have
                  </p>
                </div>

                {/* Form Content */}
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white mb-2 block">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-lg focus:border-[#4E36FF] focus:ring-[#4E36FF] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white mb-2 block">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-lg focus:border-[#4E36FF] focus:ring-[#4E36FF] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-white mb-2 block">
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-lg focus:border-[#4E36FF] focus:ring-[#4E36FF] transition-all duration-200"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={4}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-lg focus:border-[#4E36FF] focus:ring-[#4E36FF] transition-all duration-200 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#4E36FF] to-[#FF6B6B] hover:from-[#4E36FF]/90 hover:to-[#FF6B6B]/90 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        disabled={loading || !formData.name || !formData.email || !formData.subject || !formData.message}
                      >
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-gray-300 mt-4 text-center">
                        By submitting this form, you agree to our{' '}
                        <Link href="/policies" className="text-[#4E36FF] hover:underline transition-colors">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}