import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, Leaf, Zap, Recycle, Users, Mail, Phone, Globe, ArrowRight, Play, Target, TrendingUp } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigation = [
    { id: 'home', label: 'Home', icon: Leaf },
    { id: 'about', label: 'About', icon: Globe },
    { id: 'technologies', label: 'Technologies', icon: Zap },
    { id: 'impact', label: 'Impact', icon: TrendingUp },
    { id: 'action', label: 'Take Action', icon: Target },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const NavBar = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Waste to Energy</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7512621/pexels-photo-7512621.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-pulse">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">
              ♻️ Waste to Energy
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-delay">
            Transforming Trash into Treasure
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-delay-2">
            Revolutionary smart waste management solutions using AI, IoT, and sustainable technology 
            to create a cleaner, greener future for our communities.
          </p>
          <button
            onClick={() => setCurrentPage('about')}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-delay-3"
          >
            Explore the Project
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </button>
        </div>
        
        {/* Floating Animation */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="bg-green-500 rounded-full p-3">
            <Recycle className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-1000">
          <div className="bg-blue-500 rounded-full p-3">
            <Zap className="h-8 w-8 text-white" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '90%', label: 'Landfill Diversion', icon: Target },
              { number: '70%', label: 'Methane Reduction', icon: Leaf },
              { number: '50K', label: 'Homes Powered', icon: Zap },
              { number: '30%', label: 'Fuel Savings', icon: TrendingUp },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-lg transition-all duration-300">
                <stat.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the Project
          </h2>
          <p className="text-xl text-green-600 font-semibold mb-8">
            "From landfills to power plants – Waste is the new resource!"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">The Global Waste Crisis</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The world generates over 2 billion tons of municipal solid waste annually, with production 
              expected to increase by 70% by 2050. Traditional waste management methods are failing to 
              keep pace with this growth, leading to overflowing landfills, environmental pollution, 
              and missed opportunities for resource recovery.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our smart waste-to-energy solutions represent a paradigm shift from linear "take-make-waste" 
              models to circular systems that view waste as a valuable resource for energy generation 
              and material recovery.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 rounded-full p-3">
                  <Recycle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Energy Recovery</h4>
                  <p className="text-gray-600">From solid waste streams</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 rounded-full p-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">IoT Integration</h4>
                  <p className="text-gray-600">Digital waste tracking systems</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 rounded-full p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Community Engagement</h4>
                  <p className="text-gray-600">Public awareness & participation</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-teal-500 rounded-full p-3">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Carbon Capture</h4>
                  <p className="text-gray-600">Net-negative emissions systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Smart Solution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="bg-green-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Collection</h4>
              <p className="text-gray-600 text-sm">IoT-enabled bins with real-time monitoring</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="bg-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Sorting</h4>
              <p className="text-gray-600 text-sm">99% accuracy automated waste classification</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="bg-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Energy Generation</h4>
              <p className="text-gray-600 text-sm">Modular WTE plants for all scales</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="bg-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Carbon Neutral</h4>
              <p className="text-gray-600 text-sm">Advanced capture & storage systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TechnologiesPage = () => (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technologies Used
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge solutions combining AI, IoT, and sustainable engineering 
            to revolutionize waste management
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              title: "IoT Smart Bins",
              subtitle: "Enevo Sensors & Real-time Monitoring",
              description: "Advanced sensor networks provide real-time fill-level monitoring, temperature tracking, and contamination detection. Our smart bins optimize collection routes and reduce operational costs by up to 30%.",
              icon: Target,
              color: "from-green-500 to-emerald-500",
              features: ["Real-time fill monitoring", "Route optimization", "Contamination alerts", "Predictive maintenance"]
            },
            {
              title: "AI Waste Sorting",
              subtitle: "AMP Robotics – 99% Accuracy",
              description: "Machine learning algorithms trained on millions of waste images enable precise material identification and automated sorting. Our AI system processes 80 items per minute with industry-leading accuracy.",
              icon: Zap,
              color: "from-blue-500 to-cyan-500",
              features: ["Computer vision sorting", "Material identification", "Quality control", "Throughput optimization"]
            },
            {
              title: "Blockchain Transparency",
              subtitle: "Immutable Waste Tracking",
              description: "Distributed ledger technology ensures complete transparency in the waste-to-energy process. Every step from collection to energy generation is recorded and verifiable.",
              icon: Globe,
              color: "from-purple-500 to-pink-500",
              features: ["Supply chain tracking", "Carbon credit verification", "Compliance reporting", "Stakeholder transparency"]
            },
            {
              title: "Modular WTE Plants",
              subtitle: "Urban & Rural Scale Solutions",
              description: "Scalable waste-to-energy facilities designed for different community sizes. From small rural installations to large urban complexes, our modular approach ensures optimal resource utilization.",
              icon: Recycle,
              color: "from-orange-500 to-red-500",
              features: ["Scalable design", "Rapid deployment", "Local energy generation", "Community integration"]
            },
            {
              title: "Carbon Capture Systems",
              subtitle: "Net-Negative Emissions",
              description: "Advanced carbon capture and storage technology ensures our WTE plants operate with net-negative emissions. We capture more CO2 than we generate, contributing to global climate goals.",
              icon: Leaf,
              color: "from-teal-500 to-green-500",
              features: ["CO2 capture", "Emission reduction", "Climate positive", "Environmental benefits"]
            }
          ].map((tech, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`bg-gradient-to-r ${tech.color} rounded-full p-4`}>
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                      <p className="text-lg text-gray-600 font-medium">{tech.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {tech.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br ${tech.color} rounded-xl p-8 flex items-center justify-center`}>
                  <tech.icon className="h-32 w-32 text-white/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ImpactPage = () => (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case Studies & Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world implementations demonstrating the transformative power of smart waste management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Semakau Landfill",
              location: "Singapore",
              description: "Singapore's only landfill transformed into a model of sustainability with integrated WTE systems and smart monitoring.",
              impact: "Extended lifespan by 50 years",
              image: "https://images.pexels.com/photos/8155734/pexels-photo-8155734.jpeg?auto=compress&cs=tinysrgb&w=800",
              link: "https://www.nea.gov.sg/corporate-functions/resources/publications/books-journals-and-magazines/semakau-landfill-story"
            },
            {
              title: "SYSAV Plant",
              location: "Sweden",
              description: "Advanced WTE facility processing 550,000 tons annually with 99% material recovery and district heating integration.",
              impact: "Powers 150,000 homes",
              image: "https://images.pexels.com/photos/9800040/pexels-photo-9800040.jpeg?auto=compress&cs=tinysrgb&w=800",
              link: "https://cleanaway2stor.blob.core.windows.net/cleanaway2-blob-container/2024/02/CaseStudy_Sysav_.pdf"
            },
            {
              title: "Dubai WTE Project",
              location: "UAE",
              description: "$1.1B public-private partnership creating the world's largest WTE facility with advanced emission controls.",
              impact: "Processes 2M tons annually",
              image: "https://images.pexels.com/photos/8155716/pexels-photo-8155716.jpeg?auto=compress&cs=tinysrgb&w=800",
              link: "https://besix-concessions.com/wp-content/uploads/sites/15/2021/08/Case-Study-Dubai-Waste-to-Energy-01.pdf"
            }
          ].map((study, index) => (
            <a
              key={index}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${study.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{study.title}</h3>
                      <p className="text-sm opacity-90">{study.location}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{study.description}</p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-600">{study.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Global Impact Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { number: '90%', label: 'Landfill Diversion', description: 'Waste redirected from landfills to energy' },
              { number: '70%', label: 'Methane Reduction', description: 'Lower greenhouse gas emissions' },
              { number: '50,000', label: 'Homes Powered', description: 'Annual energy generation capacity' },
              { number: '30%', label: 'Fuel Savings', description: 'Through AI-optimized routing' },
              { number: '30%', label: 'Recycling Boost', description: 'Increased community participation' }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{metric.number}</div>
                <div className="text-lg font-semibold mb-1">{metric.label}</div>
                <div className="text-sm opacity-90">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ActionPage = () => (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Take Action Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the movement towards sustainable waste management. Every action counts 
            in building a cleaner, greener future for our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="bg-green-500 rounded-full p-4 w-16 h-16 mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Citizens</h3>
            <p className="text-gray-600 mb-6 text-center">
              Join local recycling programs and become an environmental champion in your community
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Participate in local recycling initiatives</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Use smart bins and mobile apps</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Educate others about waste reduction</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Support sustainable businesses</span>
              </li>
            </ul>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
              onClick={() => setCurrentPage('contact')}
            >
              Join the Movement
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="bg-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Government</h3>
            <p className="text-gray-600 mb-6 text-center">
              Fund sustainable WTE infrastructure and policy frameworks for the future
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Invest in smart waste infrastructure</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Create supportive policy frameworks</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Enable public-private partnerships</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Set ambitious sustainability targets</span>
              </li>
            </ul>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors"
              onClick={() => setCurrentPage('contact')}
            >
              Partner with Us
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="bg-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Corporations</h3>
            <p className="text-gray-600 mb-6 text-center">
              Design for circular economy principles and sustainable business practices
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Implement circular design principles</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Integrate smart waste solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Invest in clean technology</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Achieve carbon neutrality goals</span>
              </li>
            </ul>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition-colors"
              onClick={() => setCurrentPage('contact')}
            >
              Collaborate
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to learn how you can be part of the waste-to-energy revolution
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Contact Us to Collaborate
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Handle form submission here
    };

    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform waste into energy? Get in touch with our team to discuss 
              partnerships, implementations, or learn more about our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">bhardwajhritik68@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 8829028163</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 rounded-full p-3">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <p className="text-gray-600">@harsh.bhati_07</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Why Partner with Us?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Proven track record in sustainable technology</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Comprehensive end-to-end solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Expert technical support and maintenance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Scalable solutions for any community size</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your project, questions, or how we can help..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'technologies': return <TechnologiesPage />;
      case 'impact': return <ImpactPage />;
      case 'action': return <ActionPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {renderPage()}
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default App;