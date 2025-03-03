export default function Skills() {
  const skills = {
    programmingLanguages: [
      { name: "Java", level: 60 },
      { name: "C", level: 70 },
      { name: "C++", level: 70 },
      { name: "Python", level: 65 },
      { name: "JavaScript", level: 85 },
    ],
    webTechnologies: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 75 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "AWS", level: 65 },
    ],
    tools: [
      { name: "VS Code", level: 90 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Jenkins", level: 60 },
      { name: "Jira", level: 75 },
    ],
    softSkills: [
      { name: "Problem Solving", level: 80 },
      { name: "Teamwork", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Adaptability", level: 75 },
      { name: "Quick Learner", level: 90 },
    ],
  }

  const renderSkillCategory = (category: string, skills: { name: string; level: number }[], color: string) => (
    <div className="pixel-card p-6">
      <h3 className="text-2xl font-pixel text-pixel-blue mb-6">{category}</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="font-pixel-text">{skill.name}</span>
              <span className="font-pixel-text">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 h-4 pixel-border">
              <div className={`bg-${color} h-4`} style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-pixel text-pixel-green mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {renderSkillCategory("Programming Languages", skills.programmingLanguages, "pixel-green")}
            {renderSkillCategory("Web Technologies", skills.webTechnologies, "pixel-blue")}
          </div>
          <div className="space-y-8">
            {renderSkillCategory("Tools", skills.tools, "pixel-yellow")}
            {renderSkillCategory("Soft Skills", skills.softSkills, "pixel-red")}
          </div>
        </div>
      </div>
    </section>
  )
}

