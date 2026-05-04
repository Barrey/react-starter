import { Routes, Route, Link } from 'react-router-dom'
import { Rocket, Code2, Zap, ArrowRight, Globe, LogOut } from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { Login } from '@/pages/Login'

// --- Pages ---
function Home() {
  const { user, isAuthenticated, logout } = useAppStore()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4">
          <div className="flex items-center gap-2 text-primary">
            <Rocket className="h-6 w-6" />
            <span className="font-bold text-lg tracking-tight text-foreground">GeminiStarter</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to="/about" className="transition-colors hover:text-primary text-foreground/60">About</Link>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-foreground/60 hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              {isAuthenticated ? (
                <div className="flex items-center gap-4 border-l border-border pl-4">
                  <span className="text-muted-foreground hidden sm:inline-block">Welcome, {user?.name}</span>
                  <button onClick={logout} className="flex items-center gap-1 text-foreground hover:text-destructive transition-colors">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link to="/login" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4">
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-40">
          <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-6 text-center px-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Zap className="mr-1 h-4 w-4" />
              <span>Vite + React + Tailwind v4 + TypeScript + MSW</span>
            </div>
            
            <h1 className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
              A Modern Template for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Agentic Workflows
              </span>
            </h1>
            
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A beautiful, robust starter kit equipped with Zustand, React Query, and React Router. Now with Mock Service Worker!
            </p>
            
            <div className="flex gap-4 mt-4">
              {!isAuthenticated && (
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8 group"
                >
                  Sign In Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto space-y-6 py-12 md:py-24 lg:py-32 px-4">
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {[
              { title: "Lightning Fast", desc: "Powered by Vite for instant HMR and rapid cold starts.", icon: Zap },
              { title: "Type Safe", desc: "End-to-end TypeScript support out of the box.", icon: Code2 },
              { title: "State of the Art", desc: "Tailwind v4, React Router, Zustand, React Query, and MSW.", icon: Rocket },
            ].map((feature, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">About the Starter</h1>
        <p className="text-muted-foreground max-w-xl text-center mb-8">
          This project was thoughtfully crafted to provide the best possible developer experience. 
          It includes the standard ecosystem components required for scalable application development.
        </p>
        <Link to="/" className="text-primary hover:underline underline-offset-4 inline-flex items-center gap-1">
          <ArrowRight className="h-4 w-4 rotate-180" /> Back to Home
        </Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
