import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { OlfactoryProfile } from '../types';

interface OlfactoryChartProps {
  profile: OlfactoryProfile;
}

const OlfactoryChart: React.FC<OlfactoryChartProps> = ({ profile }) => {
  const data = [
    { subject: 'Floral', A: profile.floral, fullMark: 100 },
    { subject: 'Boisé', A: profile.woody, fullMark: 100 },
    { subject: 'Epicé', A: profile.spicy, fullMark: 100 },
    { subject: 'Frais', A: profile.fresh, fullMark: 100 },
    { subject: 'Sucré', A: profile.sweet, fullMark: 100 },
    { subject: 'Oriental', A: profile.oriental, fullMark: 100 },
  ];

  return (
    <div className="w-full h-[300px] bg-maison-ivory/50 rounded-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#D8C7A1" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#0C1A2A', fontFamily: 'Cinzel', fontSize: 10 }} />
          <Radar
            name="Profil Olfactif"
            dataKey="A"
            stroke="#C8A453"
            strokeWidth={2}
            fill="#C8A453"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OlfactoryChart;