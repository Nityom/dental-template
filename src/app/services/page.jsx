'use client';
import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';

export default function ServicesPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xl font-semibold mb-4">Our Services</p>
            <h1 className="text-7xl font-semibold mb-6 leading-tight">
              Comprehensive Dental Care
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From preventive care to advanced treatments, we offer a full range of dental services to keep your smile healthy and beautiful.
            </p>
            <Button variant="primary" size="large" className="bg-[#1E63D5] hover:bg-[#25D9FF]">
              Make Appointment
              <Image src="/images/img_arrowright.svg" alt="Arrow" width={24} height={24} className="ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5"></div>
        <div className="absolute top-64 right-0 w-32 h-32 bg-white opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-100"></div>
        <div className="absolute bottom-0 right-32 w-32 h-32 bg-[#25D9FF]"></div>
        <div className="absolute bottom-32 right-0 w-32 h-32 bg-[#4FAEFF]"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#1E63D5] font-medium mb-4">Our Specialties</p>
            <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              What We Offer
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              At KS Dental & Aesthetic Clinic, we provide comprehensive dental services using the latest technology and techniques to ensure the best outcomes for our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                image: "/services/general_dental_checkup.png",
                title: "General Dental Checkup",
                description: "Comprehensive oral examinations to assess your overall dental health and detect potential issues early.",
                details: {
                  overview: "Regular dental checkups are the cornerstone of preventive dental care. Our comprehensive examinations include thorough evaluations of your teeth, gums, and overall oral health.",
                  benefits: [
                    "Early detection of cavities and tooth decay",
                    "Identification of gum disease in early stages",
                    "Oral cancer screening",
                    "Professional teeth cleaning and plaque removal",
                    "Personalized oral hygiene recommendations"
                  ],
                  process: "During your checkup, our experienced dentists will perform a complete examination, take necessary X-rays, clean your teeth, and discuss any concerns or treatment recommendations.",
                  duration: "30-60 minutes",
                  frequency: "Every 6 months recommended"
                }
              },
              {
                image: "/services/dental_fillings.png",
                title: "Dental Fillings",
                description: "High-quality fillings to restore damaged teeth and prevent further decay using the latest materials.",
                details: {
                  overview: "We use advanced composite materials that match your natural tooth color, providing both functional restoration and aesthetic appeal.",
                  benefits: [
                    "Stops cavity progression",
                    "Restores tooth function",
                    "Natural-looking results",
                    "Long-lasting durability",
                    "Prevents further damage"
                  ],
                  process: "We remove the decayed portion, clean the area, and fill it with high-quality composite material that bonds to your tooth structure.",
                  duration: "30-60 minutes per tooth",
                  frequency: "As needed based on examination"
                }
              },
              {
                image: "/services/teeth_allign.png",
                title: "Teeth Alignment Orthodontics",
                description: "Advanced orthodontic solutions including braces and aligners to straighten your teeth and improve your bite.",
                details: {
                  overview: "We offer both traditional braces and modern clear aligner systems to correct misaligned teeth and improve your smile.",
                  benefits: [
                    "Improved smile aesthetics",
                    "Better bite alignment",
                    "Easier cleaning and maintenance",
                    "Enhanced oral health",
                    "Boosted confidence"
                  ],
                  process: "After a comprehensive assessment, we create a customized treatment plan using either braces or clear aligners, with regular adjustments.",
                  duration: "12-24 months average",
                  frequency: "Monthly check-ups during treatment"
                }
              },
              {
                image: "/services/dental_implant.png",
                title: "Dental Implants",
                description: "Permanent tooth replacements that look, feel and function like natural teeth for a complete smile.",
                details: {
                  overview: "Dental implants are titanium posts surgically placed in your jawbone, providing a permanent foundation for replacement teeth.",
                  benefits: [
                    "Permanent solution for missing teeth",
                    "Natural look and feel",
                    "Preserves jawbone structure",
                    "No impact on adjacent teeth",
                    "Long-lasting with proper care"
                  ],
                  process: "The implant is placed surgically, allowed to integrate with the bone, then topped with a custom crown.",
                  duration: "3-6 months total process",
                  frequency: "One-time procedure with follow-ups"
                }
              },
              {
                image: "/services/sleep.png",
                title: "Sleep Apnea Treatment",
                description: "Custom oral appliances and solutions to help treat sleep apnea and improve your quality of sleep.",
                details: {
                  overview: "We provide custom-fitted oral appliances that help keep your airway open during sleep, reducing sleep apnea symptoms.",
                  benefits: [
                    "Improved sleep quality",
                    "Reduced snoring",
                    "Increased daytime energy",
                    "Lower health risks",
                    "Non-invasive alternative to CPAP"
                  ],
                  process: "We take impressions, create a custom appliance, and adjust it for optimal comfort and effectiveness.",
                  duration: "2-3 appointments",
                  frequency: "Annual check-ups recommended"
                }
              },
              {
                image: "/services/crown.png",
                title: "Crown, Bridge, Veneers",
                description: "Restorative and cosmetic solutions to repair, replace, or enhance your teeth for a beautiful smile.",
                details: {
                  overview: "We offer high-quality crowns, bridges, and veneers to restore damaged teeth or enhance your smile's appearance.",
                  benefits: [
                    "Restores tooth function",
                    "Natural-looking results",
                    "Long-lasting solutions",
                    "Protects damaged teeth",
                    "Improves smile aesthetics"
                  ],
                  process: "Teeth are prepared, impressions taken, temporary restorations placed, then custom permanent restorations fitted.",
                  duration: "2-3 visits",
                  frequency: "Lasts 10-15 years with care"
                }
              },
              {
                image: "/services/petridontal.png",
                title: "Periodontal Treatment",
                description: "Specialized care for gum disease and supporting structures to maintain healthy gums and teeth.",
                details: {
                  overview: "Comprehensive treatment for gum disease ranging from deep cleaning to advanced surgical procedures.",
                  benefits: [
                    "Stops gum disease progression",
                    "Reduces inflammation",
                    "Prevents tooth loss",
                    "Improves overall health",
                    "Eliminates bad breath"
                  ],
                  process: "Treatment may include scaling and root planing, medication, or surgery depending on severity.",
                  duration: "Varies by treatment",
                  frequency: "Ongoing maintenance required"
                }
              },
              {
                image: "/services/laser.png",
                title: "Laser Dental Procedures",
                description: "Advanced laser technology for precise, minimally invasive treatments with faster healing times.",
                details: {
                  overview: "We use state-of-the-art laser technology for various dental procedures, offering precision and comfort.",
                  benefits: [
                    "Minimally invasive",
                    "Faster healing time",
                    "Less discomfort",
                    "Reduced bleeding",
                    "High precision"
                  ],
                  process: "Laser is used for soft tissue procedures, cavity preparation, and teeth whitening with precision.",
                  duration: "Varies by procedure",
                  frequency: "As needed"
                }
              },
              {
                image: "/services/scaling.png",
                title: "Teeth Scaling and Polishing",
                description: "Professional cleaning to remove plaque, tartar, and stains for a healthier, brighter smile.",
                details: {
                  overview: "Deep cleaning procedure that removes plaque and tartar buildup from above and below the gum line.",
                  benefits: [
                    "Removes stubborn plaque and tartar",
                    "Prevents gum disease",
                    "Freshens breath",
                    "Brightens teeth",
                    "Promotes oral health"
                  ],
                  process: "Ultrasonic and manual tools remove buildup, followed by polishing for smooth, clean teeth.",
                  duration: "45-60 minutes",
                  frequency: "Every 6 months"
                }
              },
              {
                image: "/services/root.png",
                title: "Root Canal & Oral Surgery",
                description: "Expert endodontic treatments and surgical procedures to save teeth and address complex dental issues.",
                details: {
                  overview: "Advanced treatments to save infected teeth and perform necessary oral surgeries with precision and care.",
                  benefits: [
                    "Saves natural teeth",
                    "Eliminates pain and infection",
                    "Prevents spreading of infection",
                    "Modern pain-free techniques",
                    "High success rate"
                  ],
                  process: "Infected pulp is removed, canal cleaned and sealed, often followed by a crown restoration.",
                  duration: "1-2 hours per tooth",
                  frequency: "As needed"
                }
              },
              {
                image: "/services/facial_skin.png",
                title: "Facial Skin Rejuvenation, Tightening, Wrinkle Removal and Anti Ageing",
                description: "Advanced aesthetic treatments to restore youthful appearance and improve skin texture and firmness.",
                details: {
                  overview: "Comprehensive anti-aging treatments combining latest technologies for skin rejuvenation and facial enhancement.",
                  benefits: [
                    "Reduced fine lines and wrinkles",
                    "Improved skin texture",
                    "Enhanced skin firmness",
                    "Youthful appearance",
                    "Non-surgical options"
                  ],
                  process: "Customized treatment plans using advanced techniques tailored to your skin type and concerns.",
                  duration: "30-90 minutes per session",
                  frequency: "Series of treatments recommended"
                }
              },
              {
                image: "/services/chemical_peel.png",
                title: "Chemical Peels and Facials",
                description: "Professional skin treatments to exfoliate, refresh, and revitalize your complexion.",
                details: {
                  overview: "Medical-grade chemical peels and professional facials to improve skin tone, texture, and overall appearance.",
                  benefits: [
                    "Exfoliates dead skin cells",
                    "Reduces hyperpigmentation",
                    "Minimizes pores",
                    "Improves skin tone",
                    "Refreshed complexion"
                  ],
                  process: "Professional application of chemical solutions or facial treatments customized to your skin needs.",
                  duration: "45-90 minutes",
                  frequency: "Monthly treatments recommended"
                }
              },
              {
                image: "/services/PRP.png",
                title: "PRP and Laser Facial Treatments",
                description: "Cutting-edge platelet-rich plasma and laser therapies for natural skin rejuvenation and enhancement.",
                details: {
                  overview: "Advanced treatments using your body's own healing factors and precise laser technology for natural rejuvenation.",
                  benefits: [
                    "Natural collagen production",
                    "Improved skin quality",
                    "Reduced scarring",
                    "Enhanced skin tone",
                    "Long-lasting results"
                  ],
                  process: "PRP is extracted from your blood and applied with microneedling, or laser is used for precise treatment.",
                  duration: "60-90 minutes",
                  frequency: "3-4 sessions recommended"
                }
              },
              {
                image: "/services/hair.png",
                title: "Permanent Hair Removal and Shaping",
                description: "Safe and effective laser hair removal solutions for smooth, hair-free skin with long-lasting results.",
                details: {
                  overview: "Advanced laser technology for permanent hair reduction on various body areas with minimal discomfort.",
                  benefits: [
                    "Long-lasting hair reduction",
                    "Smooth skin",
                    "No more shaving or waxing",
                    "Safe for most skin types",
                    "Precise targeting"
                  ],
                  process: "Laser targets hair follicles, preventing regrowth while protecting surrounding skin.",
                  duration: "15-60 minutes per area",
                  frequency: "6-8 sessions for optimal results"
                }
              },
              {
                image: "/services/tattoo.png",
                title: "Body Sculpting and Tattoo Removal",
                description: "Advanced body contouring and laser tattoo removal services to help you achieve your aesthetic goals.",
                details: {
                  overview: "State-of-the-art treatments for body contouring and safe, effective tattoo removal using advanced laser technology.",
                  benefits: [
                    "Non-surgical body contouring",
                    "Safe tattoo fading/removal",
                    "Minimal downtime",
                    "Effective results",
                    "Customized treatment plans"
                  ],
                  process: "Laser technology targets specific areas for sculpting or breaks down tattoo ink for natural elimination.",
                  duration: "30-90 minutes per session",
                  frequency: "Multiple sessions required"
                }
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className={`p-8 hover:shadow-xl transition-all duration-500 ${
                  expandedCard === index ? 'md:col-span-3' : 'md:col-span-1'
                }`}
              >
                <div className={`${expandedCard === index ? 'grid md:grid-cols-2 gap-8 items-start' : ''}`}>
                  {/* Image and Basic Info */}
                  <div className={expandedCard === index ? 'md:sticky md:top-4' : ''}>
                    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <button 
                      onClick={() => toggleCard(index)}
                      className="text-[#1E63D5] font-medium flex items-center hover:text-[#25D9FF] transition-colors"
                    >
                      {expandedCard === index ? 'Show Less' : 'Learn More'}
                      <Image 
                        src="/images/img_arrowright.svg" 
                        alt="Arrow" 
                        width={16} 
                        height={16} 
                        className={`ml-2 transition-transform duration-500 ${expandedCard === index ? 'rotate-90' : ''}`}
                      />
                    </button>
                  </div>
                
                  {/* Expanded Details */}
                  <div 
                    className="grid transition-all duration-500 ease-in-out"
                    style={{
                      gridTemplateRows: expandedCard === index ? '1fr' : '0fr'
                    }}
                  >
                    <div className="overflow-hidden">
                      {service.details && (
                        <div className="pt-6 space-y-6">
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg">Overview</h4>
                            <p className="text-gray-600 leading-relaxed">{service.details.overview}</p>
                          </div>
                          
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                              <svg className="w-5 h-5 text-[#1E63D5] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                              </svg>
                              Key Features
                            </h4>
                            <ul className="space-y-3 mt-4">
                              {service.details.benefits.slice(0, 4).map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <svg className="w-5 h-5 text-[#1E63D5] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg">Benefits</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.details.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start">
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1E63D5] text-white text-xs mr-2 flex-shrink-0 mt-0.5">
                                    ✓
                                  </span>
                                  <span className="text-gray-700 text-sm">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-[#1E63D5] bg-opacity-10 p-5 rounded-lg border-l-4 border-[#1E63D5]">
                              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                <svg className="w-5 h-5 text-[#1E63D5] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                                </svg>
                                Duration
                              </h4>
                              <p className="text-gray-700 font-medium">{service.details.duration}</p>
                            </div>
                            <div className="bg-[#25D9FF] bg-opacity-10 p-5 rounded-lg border-l-4 border-[#25D9FF]">
                              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                                <svg className="w-5 h-5 text-[#25D9FF] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                                </svg>
                                Frequency
                              </h4>
                              <p className="text-gray-700 font-medium">{service.details.frequency}</p>
                            </div>
                          </div>

                          <div className="bg-gradient-to-r from-[#1E63D5] to-[#25D9FF] p-6 rounded-lg text-white">
                            <h4 className="font-semibold mb-2 text-lg">Treatment Process</h4>
                            <p className="text-white text-opacity-90 leading-relaxed">{service.details.process}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#1E63D5] font-medium mb-4">Featured Service</p>
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Advanced Teeth Whitening
              </h2>
              <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                Our professional teeth whitening treatments can brighten your smile by several shades in just one visit. We use advanced technology that is gentle on teeth while providing dramatic results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#1E63D5] p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-500">Professional-strength whitening agents</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#1E63D5] p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-500">Customized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#1E63D5] p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-500">Quick, noticeable results</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#1E63D5] p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-500">Safe for teeth and gums</span>
                </li>
              </ul>
              <Button variant="primary" size="large">
                Learn More
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg h-96 relative overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Teeth Whitening Treatment Image]
                </div>
                <Image 
                  src="/images/img_shape_cyan_500.svg" 
                  alt="Decorative shape" 
                  width={200}
                  height={100}
                  className="absolute bottom-0 left-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#1E63D5] font-medium mb-4">Our Process</p>
            <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              How We Work
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We follow a systematic approach to ensure we meet your dental needs effectively and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "/images/img_scedule.svg",
                title: "Consultation",
                description: "We start with a thorough consultation to understand your dental history and goals."
              },
              {
                icon: "/images/img_dentist.svg",
                title: "Examination",
                description: "Our dentists perform a comprehensive examination and discuss treatment options."
              },
              {
                icon: "/images/img_tooth_insurance.svg",
                title: "Treatment",
                description: "We provide personalized treatment with a focus on comfort and effectiveness."
              },
              {
                icon: "/images/img_thumbsup.svg",
                title: "Follow-Up",
                description: "We ensure your continued dental health with regular check-ups and maintenance."
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-[#1E63D5] p-6 rounded-lg w-20 h-20 mx-auto mb-6 flex items-center justify-center relative z-10">
                  <Image src={step.icon} alt={step.title} width={40} height={40} />
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#25D9FF] text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-[#25D9FF]"></div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#1E63D5] font-medium mb-4">Pricing</p>
            <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Transparent Fee Structure
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We believe in transparency when it comes to our pricing. Here are our starting rates for common treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">General Dentistry</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between">
                  <span className="text-gray-500">Regular Checkup</span>
                  <span className="font-semibold text-gray-900">$75</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Dental Cleaning</span>
                  <span className="font-semibold text-gray-900">$100</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Filling (per tooth)</span>
                  <span className="font-semibold text-gray-900">$150</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Root Canal</span>
                  <span className="font-semibold text-gray-900">$700</span>
                </li>
              </ul>
              <Button variant="outline" size="medium" className="w-full">
                Book Now
              </Button>
            </Card>
            
            <Card className="p-8 border-2 border-[#1E63D5] shadow-lg">
              <div className="absolute top-0 right-0 bg-[#1E63D5] text-white py-1 px-4 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Cosmetic Services</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between">
                  <span className="text-gray-500">Teeth Whitening</span>
                  <span className="font-semibold text-gray-900">$350</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Veneers (per tooth)</span>
                  <span className="font-semibold text-gray-900">$950</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Bonding (per tooth)</span>
                  <span className="font-semibold text-gray-900">$300</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Smile Makeover</span>
                  <span className="font-semibold text-gray-900">$2,500+</span>
                </li>
              </ul>
              <Button variant="primary" size="medium" className="w-full">
                Book Now
              </Button>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Specialty Treatments</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between">
                  <span className="text-gray-500">Dental Implant</span>
                  <span className="font-semibold text-gray-900">$3,000</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Orthodontics</span>
                  <span className="font-semibold text-gray-900">$5,000+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Wisdom Tooth Extraction</span>
                  <span className="font-semibold text-gray-900">$450</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">Periodontal Treatment</span>
                  <span className="font-semibold text-gray-900">$800+</span>
                </li>
              </ul>
              <Button variant="outline" size="medium" className="w-full">
                Book Now
              </Button>
            </Card>
          </div>
          
          <div className="text-center mt-12 text-gray-500">
            <p>* Pricing may vary based on individual needs and complexity. Contact us for a personalized quote.</p>
          </div>
        </div>
      </section>
      
      
      <Footer />
    </div>
  );
}
