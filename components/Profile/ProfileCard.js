import Image from 'next/image'

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Name: {user?.name}</h2>
      
      {user?.image && (
        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
        
          <Image src={user?.image} alt='avatar' width={100} height={100} layout="responsive" />
        </div>
      )}
      
      <h4 className="text-lg mb-2">Email: {user?.email}</h4>
      
      <h4 className="text-lg mb-2">Role: {user?.role}</h4>
    </div>
  )
}

export default ProfileCard
