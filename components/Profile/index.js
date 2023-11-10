import ChangePassword from "./ChangePassword";
import ProfileCard from "./ProfileCard";
import ProfileUpdate from "./ProfileUpdate";
import { useSession } from 'next-auth/react';

const ProfileComponent = ({ user }) => {
  if (typeof window === "undefined") {
    // Выполняем этот код только на серверной стороне
    return null;
  }
  
  const { data: session, update } = useSession();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* ProfileCard занимает всю ширину */}
      <div className="md:col-span-2">
        <ProfileCard user={session?.user || user} />
      </div>
      
      {/* ProfileUpdate и ChangePassword располагаются в две колонки */}
      <div className="md:col-span-1">
        <ProfileUpdate update={update} />
      </div>
      
      <div className="md:col-span-1">
        {(session?.user?.provider === 'credentials' || user?.provider === 'credentials') && (
          <ChangePassword />
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
