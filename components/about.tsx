export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-pixel text-pixel-green mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-float">
            <div className="pixel-card p-6">
              <h3 className="text-2xl font-pixel text-pixel-blue mb-4">Background</h3>
              <p className="font-pixel-text">
                I'm a third-year IT BTech student with a passion for software development and innovative technologies. I
                specialize in creating efficient and scalable software solutions.
              </p>
            </div>
            <div className="pixel-card p-6">
              <h3 className="text-2xl font-pixel text-pixel-blue mb-4">Education</h3>
              <p className="font-pixel-text">
                BTech in Information Technology
                <br />
                Expected Graduation: 2026
              </p>
            </div>
          </div>
          <div className="space-y-6 animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="pixel-card p-6">
              <h3 className="text-2xl font-pixel text-pixel-blue mb-4">Interests</h3>
              <p className="font-pixel-text">
                Software architecture, algorithm optimization, cloud computing, and creating interactive digital
                experiences.
              </p>
            </div>
            <div className="pixel-card p-6">
              <h3 className="text-2xl font-pixel text-pixel-blue mb-4">Goals</h3>
              <p className="font-pixel-text">
                To become a leading Software Development Engineer, contributing to cutting-edge projects and driving
                technological innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

