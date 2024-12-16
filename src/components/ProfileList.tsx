import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/rootReducer';
import ProfileCard from './ProfileCard';

const ProfileList: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.data);
  const status = useSelector((state: RootState) => state.users.status);

  if (status === 'loading') return <div>Loading profiles...</div>;
  if (!users || users.length === 0) return <div>No profiles available.</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
      {users.map((u: any) => (
        <ProfileCard
          key={u.id}
          id={u.id}
          name={u.name ?? u.slug ?? 'Unnamed'}
          description={u.description}
          imageUrl={u.image_url}
        />
      ))}
    </div>
  );
};

export default ProfileList;
