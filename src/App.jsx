import { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import myPhoto from './assets/myphoto.jpeg'
import weather from './assets/weather.jpg'
import flower from './assets/flower.jpg'
import form from './assets/form.jpg'
import task from './assets/task.jpg'
import landing from './assets/landing.jpg'
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaUser,
} from 'react-icons/fa'

function App() {
  const formRef = useRef(null)
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const gradientHeadingClass =
    'bg-linear-to-r from-[#A78BFA] to-[#D4A5A5] bg-clip-text text-3xl font-semibold tracking-wide text-transparent md:text-4xl font-serif'
  const glassCardClass =
    'rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_10px_35px_rgba(137,95,228,0.24)] backdrop-blur-xl'
  const smoothInteractiveClass =
    'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'

  const skills = [
    'C++',
    'oop',
    'python',
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React',
    'Bootstrap',
    'Tailwind CSS',
    'Firebase',
    'GitHub',
  ]

  const projects = [
    {
      name: 'Weather App',
      image:weather,
      github:'https://github.com/Fatmasaeed123/Weather-App',
      demo:'https://fatmasaeed123.github.io/Weather-App/',
      description: "A sleek and responsive weather application that provides real-time meteorological data using the OpenWeather API. Features a minimalist UI, dynamic background changes based on weather conditions, and precise location-based forecasting.",
    },
    {
      name: 'Flower Shop E-commerce',
      image:flower,
      github:'https://github.com/Fatmasaeed123/-responsive-flower-website-design-tutorial',
      demo:'https://fatmasaeed123.github.io/-responsive-flower-website-design-tutorial/#',
      description: "A beautifully designed e-commerce landing page for a flower boutique. Built using semantic HTML5 and modern CSS3, featuring a clean, responsive layout, elegant typography, and a polished user interface to showcase products effectively.",
    },
    {
      name: 'Form-Validation',
      image:form,
      github:'https://github.com/Fatmasaeed123/Form-Validation',
      demo:'https://fatmasaeed123.github.io/Form-Validation/',
      description: 'A robust Form Validation system developed with vanilla JavaScript to ensure data integrity and a seamless user experience. It features real-time feedback for users, including email format verification, password strength checks, and empty field detection, all wrapped in a clean, intuitive UI.',
    },
    {
      name: 'Task Manager',
      image:task,
      github:'https://github.com/Fatmasaeed123/to-do-list',
      demo:'https://fatmasaeed123.github.io/to-do-list/',
      description: "A clean and functional Task Management application designed for productivity. It allows users to efficiently organize their daily activities with features to add, complete, and delete tasks. Built with a focus on a minimalist UI and local data persistence to ensure a seamless and organized user experience.",
    },
    {
      name: "Landing Page",
      image:landing,
      github:'https://github.com/Fatmasaeed123/templete-two',
      demo:'https://fatmasaeed123.github.io/templete-two/',
      description: "A high-conversion Landing Page designed with a modern aesthetic and a focus on clean typography. Developed using HTML5 and CSS3, it features a fully responsive grid system, interactive call-to-action sections, and optimized layouts to ensure a professional and engaging user journey across all devices."
    }
  ]

  const experience = [
    {
      title: 'Frontend Projects & Practice',
      detail:
        'Built responsive user interfaces with React, Firebase, and modern CSS systems while keeping accessibility and maintainable component architecture at the center.',
    },
  ]

  const contactLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fatma-saeed-/',
      icon: FaLinkedin,
    },
    {
      label: 'Email',
      href: 'mailto:fs792757@gmail.com',
      icon: FaEnvelope,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Fatmasaeed123',
      icon: FaGithub,
    },
  ]

  const handleContactSubmit = async (event) => {
    event.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({
        type: 'error',
        message: 'Email service is not configured yet. Please try again later.',
      })
      return
    }

    if (!formRef.current) return

    setIsSending(true)
    setFormStatus({ type: '', message: '' })

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setFormStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon!' })
      formRef.current.reset()
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again in a moment.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#1E0E1E] via-[#101026] to-[#0A0A1F] text-white transition-all duration-700">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="blob blob-one absolute left-[-120px] top-[8%] h-[340px] w-[340px] rounded-full bg-[#2D1B2D]/55 blur-[110px]" />
        <div className="blob blob-two absolute right-[-140px] top-[32%] h-[420px] w-[420px] rounded-full bg-[#1A1A2E]/70 blur-[120px]" />
        <div className="blob blob-three absolute bottom-[-120px] left-1/3 h-[300px] w-[300px] rounded-full bg-[#2D1B2D]/45 blur-[110px]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/20 bg-[#140f25]/70 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <p className="text-sm font-serif font-semibold tracking-[0.16em] text-white">
            Fatma
          </p>
          <div className="flex items-center gap-4">
            <nav className="hidden gap-5 text-sm md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative text-white/85 ${smoothInteractiveClass} hover:text-white`}
                >
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#D7B6FF] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
            <a
              href="./Fatma-Saeed-Mohamed-Hassan-CV.pdf"
              className={`rounded-xl border border-[#A78BFA]/65 px-3 py-2 text-xs font-semibold text-[#A78BFA] ${smoothInteractiveClass} hover:bg-[#A78BFA] hover:text-white`}
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20 md:gap-20 md:px-10">
        <section
          id="hero"
          className={`reveal-on-scroll relative overflow-hidden rounded-3xl border border-white/10 bg-[#1b1330]/35 px-8 py-16 shadow-[0_20px_80px_rgba(126,88,255,0.2)] backdrop-blur-xl`}
        >
          <div className="pointer-events-none absolute right-[-8%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#9D6DFF]/30 blur-[120px]" />
          <div className="relative flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-5 text-left">
              <p className="text-sm font-light uppercase tracking-[0.22em] text-white/70">Frontend Developer</p>
              <h1 className="text-5xl leading-tight md:text-7xl">
                <span className="bg-linear-to-r from-[#A78BFA] to-[#D4A5A5] bg-clip-text font-serif text-transparent">
                  Hi, I&apos;m Fatma
                </span>
              </h1>
              <p className="max-w-xl text-base font-light leading-8 text-white/80 md:text-lg">
                I craft polished, responsive interfaces with a refined visual style and modern
                frontend engineering principles.
              </p>
              <p className="text-sm font-light text-white/65">
                Computer Science &amp; Engineering Student
              </p>
            </div>
            
<div className="order-first md:order-last mb-10 md:mb-0 ml-auto flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-[#26173f]/70 shadow-[0_0_70px_rgba(168,110,255,0.55)] md:h-64 md:w-64">
  <div className="flex h-[90%] w-[90%] items-center justify-center rounded-full border border-white/15 bg-[#1a102f]/90">
    
    <img 
      src={myPhoto} 
      alt="Fatma"  
      style={{
        width: '160px', 
        height: '160px', 
        borderRadius: '50%', 
        objectFit: 'cover',
        border: '4px solid #A78BFA', 
        transform: 'scale(1.7) translateY(-5%)'
      }}
    />

  </div>
</div>
          </div>
        </section>

        <section id="about" className="reveal-on-scroll space-y-5 py-20">
          <div className="flex items-center gap-3">
            <FaUser className="text-[#D4A5A5]" />
            <h2 className={gradientHeadingClass}>About Me</h2>
          </div>
          <div className={`${glassCardClass} p-10`}>
            <p className="font-sans font-light leading-8 text-white/85">
              Passionate frontend developer focused on building clean, accessible, and responsive
              web experiences. I am currently growing my skills through practical projects and
              academic study, aiming to create user-centered interfaces with React and modern web
              technologies.
            </p>
          </div>
        </section>

        <section id="skills" className="reveal-on-scroll space-y-5 py-20">
          <div className="flex items-center gap-3">
            <FaCode className="text-[#A78BFA]" />
            <h2 className={gradientHeadingClass}>Skills</h2>
          </div>
          <div className={glassCardClass}>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className={`rounded-2xl border border-white/10 bg-[#2a1d45]/45 px-4 py-2 text-sm font-light text-white/90 ${smoothInteractiveClass} hover:-translate-y-1 hover:scale-105 hover:border-[#A78BFA]/70 hover:shadow-[0_0_20px_rgba(167,139,250,0.45)]`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="space-y-5 py-10 md:py-20 px-4">
          <div className="flex items-center gap-3">
            <FaCode className="text-[#A78BFA]" />
            <h2 className={gradientHeadingClass}>Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className={`rounded-2xl border border-white/10 bg-[#2a1e44]/35 p-6 backdrop-blur-2xl ${smoothInteractiveClass} hover:scale-[1.03] hover:shadow-[inset_0_0_45px_rgba(175,120,255,0.35),0_20px_55px_rgba(96,57,180,0.5)]`}
              >
                <div className=" rounded-xl bg-cover bg-center bg-no-repeat border border-white/10 bg-linear-to-br from-[#31204d]/80 via-[#221739]/70 to-[#140f29]/75" style={{backgroundImage:`url(${project.image})`,width:'100%' , aspectRatio:'1/1', height:'30vh'}} />
                <h3 className="mt-4 text-lg font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm font-light leading-7 text-white/80">
                  {project.description}
                </p>
                <div className="mt-5 flex gap-3">
                  <a
                    href={project.github}
                    className={`relative overflow-hidden rounded-xl border border-[#A78BFA]/60 bg-linear-to-r from-[#D4A5A5] to-[#A78BFA] px-4 py-2 text-sm font-medium text-white ${smoothInteractiveClass} before:absolute before:inset-0 before:-z-10 before:scale-x-0 before:bg-linear-to-r before:from-[#A78BFA] before:to-[#D4A5A5] before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:shadow-[0_0_26px_rgba(167,139,250,0.6)]`}
                  >
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    className={`relative overflow-hidden rounded-xl border border-[#A78BFA]/60 bg-linear-to-r from-[#D4A5A5] to-[#A78BFA] px-4 py-2 text-sm font-medium text-white ${smoothInteractiveClass} before:absolute before:inset-0 before:-z-10 before:scale-x-0 before:bg-linear-to-r before:from-[#A78BFA] before:to-[#D4A5A5] before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:shadow-[0_0_26px_rgba(167,139,250,0.6)]`}
                  >
                    Visit Site
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="reveal-on-scroll space-y-5 py-20">
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-[#A78BFA]" />
            <h2 className={gradientHeadingClass}>Experience</h2>
          </div>
          <div className={glassCardClass}>
            {experience.map((item) => (
              <article key={item.title} className="space-y-2">
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="text-sm font-light leading-7 text-white/80">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="reveal-on-scroll space-y-5 py-20">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#D4A5A5]" />
            <h2 className={gradientHeadingClass}>Let&apos;s Bloom Together</h2>
          </div>
          <div className={glassCardClass}>
            <form ref={formRef} onSubmit={handleContactSubmit} className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className={`rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#A78BFA] focus:outline-none md:col-span-1 ${smoothInteractiveClass}`}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className={`rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#A78BFA] focus:outline-none md:col-span-1 ${smoothInteractiveClass}`}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className={`rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#A78BFA] focus:outline-none md:col-span-2 ${smoothInteractiveClass}`}
              />
              <button
                type="submit"
                disabled={isSending}
                className={`inline-flex items-center justify-center gap-2 rounded-xl border border-[#A78BFA]/60 bg-linear-to-r from-[#D4A5A5] to-[#A78BFA] px-4 py-3 text-sm font-medium text-white ${smoothInteractiveClass} hover:shadow-[0_0_26px_rgba(167,139,250,0.6)] disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2 md:w-fit`}
              >
                <FaPaperPlane size={14} />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {formStatus.message ? (
              <p
                className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
                  formStatus.type === 'success'
                    ? 'border-emerald-300/30 bg-emerald-400/10 text-emerald-200'
                    : 'border-rose-300/30 bg-rose-400/10 text-rose-200'
                }`}
              >
                {formStatus.message}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm md:text-base">
              {contactLinks.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.label}
                    className={`inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white ${smoothInteractiveClass} hover:-translate-y-0.5 hover:border-[#A78BFA]/60 hover:shadow-[0_10px_20px_rgba(167,139,250,0.35)]`}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon size={14} className="text-[#D4A5A5]" />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
