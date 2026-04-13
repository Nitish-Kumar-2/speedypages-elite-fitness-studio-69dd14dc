import Header from "@/components/Header";
import TeamList from "@/components/TeamList";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Meet Our Expert Trainers - Elite Fitness Studio",
  description: "Learn about the experienced trainers at Elite Fitness Studio who will guide you on your fitness journey."
};

export default function TrainersPage() {
  const headerProps = {
    'logo': 'Elite Fitness Studio',
    'navigation': [
        {
            'label': 'Home',
            'path': '/'
        },
        {
            'label': 'Trainers',
            'path': '/trainers'
        },
        {
            'label': 'Membership',
            'path': '/membership'
        },
        {
            'label': 'Contact',
            'path': '/contact'
        }
    ]
};
  const teamlistProps = {
    'teamMembers': [
        {
            'name': 'Jessica Smith',
            'specialty': 'Personal Trainer',
            'experience': '5 years of experience in strength training and nutrition coaching',
            'icon': 'Users'
        },
        {
            'name': 'Michael Johnson',
            'specialty': 'Yoga Instructor',
            'experience': '3 years of experience in Hatha and Vinyasa yoga',
            'icon': 'Star'
        },
        {
            'name': 'Emily Davis',
            'specialty': 'Group Fitness Coach',
            'experience': '7 years of experience leading high-energy classes',
            'icon': 'Trophy'
        },
        {
            'name': 'David Lee',
            'specialty': 'Nutrition Specialist',
            'experience': '10 years of experience in dietary planning and wellness programs',
            'icon': 'Users'
        },
        {
            'name': 'Sarah Brown',
            'specialty': 'Pilates Instructor',
            'experience': '4 years of experience in Pilates and core strengthening',
            'icon': 'Star'
        }
    ]
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
      <TeamList {...teamlistProps} />
      <Footer {...footerProps} />
    </main>
  );
}