import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Calendar, Building } from 'lucide-react'
import './App.css'

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-primary">Sriram Iyengar</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-foreground transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-muted-foreground hover:text-foreground transition-colors">Skills</button>
              <button onClick={() => scrollToSection('education')} className="text-muted-foreground hover:text-foreground transition-colors">Education</button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg section-padding pt-32">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Sriram Iyengar
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary mb-8 font-medium">
            Data Scientist
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Driving impact in healthcare analytics through machine learning, feature selection, and predictive modeling. 
            Passionate about applying data and AI in high-growth, mission-driven environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="text-lg px-8">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="text-lg px-8">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  My name is Sriram Iyengar, I'm a data scientist with experience driving impact in healthcare analytics through machine learning, feature selection, and predictive modeling. During my last tenure as a Jr Data Scientist at Certilytics, I enhanced data processing pipelines, developed QA frameworks for clinical data, and delivered model-driven insights to stakeholders, thereby improving decision-making and reducing processing time.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  My work includes deploying cost prediction models with clinical justification and optimizing onboarding workflows across clients. I'm now looking to apply these skills in a high-growth, mission-driven environment where data and AI play a central role in product and strategy.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary" className="text-sm">Python</Badge>
                  <Badge variant="secondary" className="text-sm">SQL</Badge>
                  <Badge variant="secondary" className="text-sm">Scala</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Certilytics */}
            <Card className="card-hover">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Junior Data Scientist</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Building className="w-4 h-4" />
                      Certilytics Inc. - Mechanicsburg, PA (Remote)
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    December 2023 - March 2025
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Generated multiple customized Machine Learning reports that leveraged a deep learning model to identify high-cost providers and procedures, and generate actionable business value comparisons, resulting in potential savings of over $XXM per client.</li>
                  <li>• Led the experiment for Unsupervised Feature Selection on AHRQ SDoH data using python, reducing 320+ features to 17 while maintaining or improving predictive accuracy by 0.5-1.0% for various models in the model suite.</li>
                  <li>• Optimized the existing Scala and SQL based data processing pipeline, reducing errors by 30% and processing time by 40% (from 5 days to 3 days), improving process reliability and enabling analysts to focus more on insights rather than data wrangling.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Paradigm Infotech */}
            <Card className="card-hover">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Asset Analyst</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Building className="w-4 h-4" />
                      Paradigm Infotech - Erie, PA
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    October 2023 - November 2023
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Worked on IBM's Asset Management tool Maximo to develop data-backed reports facilitating decision-making on various projects.</li>
                  <li>• Developed Project Feasibility reports to advise the integration of Maximo across various production facilities worldwide.</li>
                </ul>
              </CardContent>
            </Card>

            {/* View Inc */}
            <Card className="card-hover">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Data Science Intern - Business Intelligence</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Building className="w-4 h-4" />
                      View Inc. - Milpitas, CA (Remote)
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    June 2021 - August 2021
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Designed and developed a novel KNN based predictive model that was able to use sensor-based data to identify and flag potentially damaged/malfunctioning IGUs with an accuracy rate of 78%.</li>
                  <li>• Programmed Python scripts to collect, clean, and analyze data extracted from a Splunk Database using MySQL queries.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Penn State */}
            <Card className="card-hover">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Lecture Assistant and Grader</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Building className="w-4 h-4" />
                      The Pennsylvania University - College of Engineering
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    August 2020 - August 2023
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Executed the duties of a lecture assistant for CMPSC 221 – Introduction to Object-Oriented Programming with Web Design (Java) by holding office hours to coach over 300 students and help them excel in the class.</li>
                  <li> Testing 123.
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Computer Vision Project */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Computer Vision based Land Classification</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  January 2023 - May 2023
                </CardDescription>
                <CardDescription className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  The Pennsylvania State University
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed a multi-class classification system to identify land types based on satellite sensor readings with 73.2% accuracy.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Developed Python and PySpark scripts to collect, clean, and analyze data from Radiant-MLHub's open source repository</li>
                  <li>• Deployed various Supervised Machine Learning models for satellite data classification (Landsat 8, Sentinel 1, Sentinel 2)</li>
                  <li>• Evaluated models using cross-validation functions and confusion matrices</li>
                  <li>• Gained expertise in big data handling and processing using Spark</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PySpark</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">Big Data</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Music Recommendation Project */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Novel Music Recommendation Engine</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  January 2023 - May 2023
                </CardDescription>
                <CardDescription className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  The Pennsylvania State University
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Built a content-based recommendation engine using raw audio features and lyrical data to generate personalized song suggestions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Developed a novel content-based Music-Recommendation Engine</li>
                  <li>• Used raw-audio features in conjunction with lyrical data for recommendations across different popularity tiers</li>
                  <li>• Applied Supervised and Unsupervised models to find underlying patterns in user music taste</li>
                  <li>• Implemented audio and lyrical analysis for personalized recommendations</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Audio Processing</Badge>
                  <Badge variant="outline">NLP</Badge>
                  <Badge variant="outline">Recommendation Systems</Badge>
                  <Badge variant="outline">Unsupervised Learning</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Programming Languages */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Apache Spark/Scala</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">R</span>
                    <span className="skill-tag">Java</span>
                  </div>
                </CardContent>
              </Card>

              {/* Data-Centric Skills */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Data-Centric Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-tag">Machine Learning</span>
                    <span className="skill-tag">Hadoop</span>
                    <span className="skill-tag">Neural Networks</span>
                    <span className="skill-tag">Deep Learning</span>
                    <span className="skill-tag">Data Engineering</span>
                    <span className="skill-tag">Data Analysis</span>
                    <span className="skill-tag">ETL Pipelines</span>
                    <span className="skill-tag">Computer Vision</span>
                    <span className="skill-tag">Data Visualization</span>
                    <span className="skill-tag">Business Intelligence</span>
                    <span className="skill-tag">Big Data</span>
                    <span className="skill-tag">Model Registry (MLFlow)</span>
                  </div>
                </CardContent>
              </Card>

              {/* Other Skills */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Other Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">AI Agents</span>
                    <span className="skill-tag">LLMs and Fine-tuning</span>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-tag">AWS Certified Cloud Practitioner</span>
                    <span className="skill-tag">Alteryx Core Certified</span>
                    <span className="skill-tag">Deep Learning - Neural Networks</span>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">Bachelor of Science in Data Science</CardTitle>
                    <CardDescription className="text-lg mt-1">Focus on Computation and AI</CardDescription>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Building className="w-4 h-4" />
                      The Pennsylvania State University - University Park, PA
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      Class of 2023
                    </div>
                    <Badge variant="secondary" className="mt-2">2x Dean's List Recipient</Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-8">
                <p className="text-center text-lg text-muted-foreground mb-8">
                  I'm always interested in new opportunities and collaborations. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">[Your Email Here]</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-muted-foreground">[Your LinkedIn Profile]</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <Github className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-muted-foreground">[Your GitHub Profile]</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">[Your Phone Number]</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container-max text-center">
          <p className="text-muted-foreground">
            © 2025 Sriram Iyengar. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

