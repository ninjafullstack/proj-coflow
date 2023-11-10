'use server'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Header from '@/components/Global/Header'
import ProtectedComponent from '@/components/Protected';
import { getServerSession } from 'next-auth/next'

const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1> This is a
        <i style={{color: 'red'}}> Server-Side</i> protected page
      </h1>

      <ProtectedComponent user={session?.user} />
    </div>
  )
}

export default ProtectedServerPage
