import { getLoggedInUser } from '@/lib/actions/user.action'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const page = async () => {
  const user = await getLoggedInUser()
  return (
    <div className='w-full h-full flex justify-center items-center text-center'>
      {user ? (
        <div>
          <h1>Logged In</h1>
          <Avatar className="rounded-lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <div>
          <h1>Not Logged In</h1>
        </div>
      )}
    </div>
  )
}

export default page