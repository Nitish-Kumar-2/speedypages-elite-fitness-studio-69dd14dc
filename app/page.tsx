import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const headerProps = {
    'logo': 'https://example.com/logo.png',
    'navigation': [
        {
            'label': 'Home',
            'path': '/'
        },
        {
            'label': 'About Us',
            'path': '/about'
        },
        {
            'label': 'Services',
            'path': '/services'
        },
        {
            'label': 'Testimonials',
            'path': '/testimonials'
        },
        {
            'label': 'Contact',
            'path': '/contact'
        }
    ]
};
  const heroProps = {
    'headline': 'Achieve Your Fitness Goals with Elite Coaching',
    'subheadline': 'Discover amazing features and services',
    'primaryCta': 'Start Your Journey',
    'secondaryCta': 'Learn More',
    'title': 'Achieve Your Fitness Goals with Elite Coaching',
    'tagline': 'At Elite Fitness Studio, we provide personalized fitness programs tailored to busy professionals who want to transform their health and wellness. Experience expert coaching and innovative fitness solutions designed just for you.'
};
  const featuresProps = {
    'title': 'Why Choose Elite Fitness Studio',
    'subtitle': 'We are committed to helping you achieve your fitness goals through unique programs and dedicated support.',
    'features': [
        {
            'icon': 'Trophy',
            'title': 'Personalized Training Plans',
            'description': 'Tailored fitness regimens that fit your lifestyle and goals.'
        },
        {
            'icon': 'Zap',
            'title': 'Dynamic Group Classes',
            'description': 'Engaging classes that keep you motivated and accountable.'
        },
        {
            'icon': 'Shield',
            'title': 'Holistic Wellness Programs',
            'description': 'Comprehensive wellness strategies including nutrition and mindfulness.'
        }
    ]
};
  const statsProps = {
    'title': 'Our Impact',
    'stats': [
        {
            'number': '1000+',
            'label': 'Members Transformed',
            'icon': 'Users'
        },
        {
            'number': '98%',
            'label': 'Customer Satisfaction',
            'icon': 'Star'
        },
        {
            'number': '5+',
            'label': 'Years of Excellence',
            'icon': 'TrendingUp'
        }
    ]
};
  const testimonialsProps = {
    'title': 'What Our Clients Say',
    'testimonials': [
        {
            'name': 'John Doe',
            'role': 'Marketing Executive',
            'feedback': 'Elite Fitness has changed my life! The personal training has helped me achieve my goals.',
            'rating': 5
        },
        {
            'name': 'Jane Smith',
            'role': 'Finance Manager',
            'feedback': 'The group classes are a blast! I feel stronger and more energetic.',
            'rating': 4.8
        }
    ]
};
  const servicesProps = {
    'title': 'Our Services',
    'subtitle': 'Explore our range of fitness solutions',
    'services': [
        {
            'icon': 'Dumbbell',
            'title': 'Personal Training',
            'description': 'One-on-one customized workout plans tailored to your fitness goals.',
            'price': '$75/session'
        },
        {
            'icon': 'Users',
            'title': 'Group Classes',
            'description': 'High-energy group sessions including HIIT, yoga, and strength training classes.',
            'price': '$25/class'
        },
        {
            'icon': 'Heart',
            'title': 'Nutrition Coaching',
            'description': 'Personalized meal plans and dietary guidance from certified nutritionists.',
            'price': '$150/month'
        }
    ]
};
  const ctaProps = {
    'title': 'Transform Your Health Today',
    'description': 'Join Elite Fitness Studio and discover personalized fitness solutions tailored to your needs. Whether you're looking for personal training or group classes, we have the right program for you.',
    'primaryButton': 'Join Now',
    'secondaryButton': 'Schedule a Consultation'
};
  const footerProps = {
    'companyName': 'Elite Fitness Studio',
    'copyright': '2023 Elite Fitness Studio. All rights reserved.',
    'links': [
        {
            'label': 'Home',
            'path': '/'
        },
        {
            'label': 'About Us',
            'path': '/about'
        },
        {
            'label': 'Services',
            'path': '/services'
        },
        {
            'label': 'Testimonials',
            'path': '/testimonials'
        },
        {
            'label': 'Contact',
            'path': '/contact'
        }
    ]
};

  return (
    <main className="min-h-screen">
      <Header {...headerProps} />
      <Hero {...heroProps} />
      <Features {...featuresProps} />
      <Stats {...statsProps} />
      <Testimonials {...testimonialsProps} />
      <Services {...servicesProps} />
      <CTA {...ctaProps} />
      <Footer {...footerProps} />
    </main>
  );
}