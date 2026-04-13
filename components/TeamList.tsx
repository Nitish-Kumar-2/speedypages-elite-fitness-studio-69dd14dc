import React from 'react';
import { Users, Star, Trophy } from 'lucide-react';

interface TeamListProps {
  teamMembers: Array<{ name: string; specialty: string; experience: string; icon?: string; }>; 
}

const iconMap: Record<string, React.ElementType> = {
  'Users': Users,
  'Star': Star,
  'Trophy': Trophy
};

const TeamList = (props: TeamListProps) => {
  const teamMembers = props.teamMembers || [];
  if (teamMembers.length === 0) return <div>No team members available.</div>;

  return (
    <section className="py-12 px-4 md:py-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">Meet Our Team</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => {
          const IconComponent = iconMap[member.icon] || Users;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <IconComponent className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">Specialty: {member.specialty}</p>
              <p className="text-gray-600">Experience: {member.experience}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamList;