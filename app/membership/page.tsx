import Header from "@/components/Header";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Membership Plans at Elite Fitness Studio - Elite Fitness Studio",
  description: "Discover our flexible membership plans designed for health-conscious professionals."
};

export default function MembershipPage() {
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
        },
        {
            'icon': 'Users',
            'title': 'Wellness Programs',
            'description': 'Comprehensive wellness programs designed to improve your overall health.',
            'price': '$100/month'
        },
        {
            'icon': 'Dumbbell',
            'title': 'Online Coaching',
            'description': 'Virtual coaching sessions to keep you motivated and on track from anywhere.',
            'price': '$50/session'
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
    'copyright': '© 2026 Elite Fitness Studio. All rights reserved',
    'links': [
        {
            'label': 'Privacy',
            'path': '/privacy'
        },
        {
            'label': 'Terms',
            'path': '/terms'
        }
    ]
};

  return (
    <main className="min-h-screen">
      <Header {...headerProps} />
      <Services {...servicesProps} />
      <CTA {...ctaProps} />
      <Footer {...footerProps} />
    </main>
  );
}