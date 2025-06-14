"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getLocalStorage, setLocalStorage } from '@/constants/storage'
import { HiOutlineUpload } from "react-icons/hi";
import Link from 'next/link'

const page = () => {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const userName = getLocalStorage("username") || ""
  const user = getLocalStorage("name") || ""
  function click(){
    console.log(name, username);
    setLocalStorage("name", name)
    setLocalStorage("username", username)
  }
  return (
    <div className='w-full h-full flex justify-center items-center text-center'>
      {user && userName ? (
        <div className='flex flex-col gap-4 justify-center items-center text-center'>
          <h1 className='text-2xl font-bold'>Namste <b className='text-gray-500 font-semibold'>{user}</b></h1>
          <Link href='/create' className='h-28 w-80 border dark:border-white/50 border-gray-500  rounded-md flex items-center justify-center'>
              <div className='flex flex-row divide-x dark:divide-white/50 divide-gray-500 '>
                <div className='flex items-center justify-center w-1/2'>
                  <HiOutlineUpload className='h-9 w-9'/>
                </div>
                <div className='text-start px-2 py-2'>
                  <h1 className=' font-semibold'>PDF to podcast and summaries</h1>
                  <p className='text-xs text-gray-500'>Upload your PDF file and get a detailed podcast and summary of the script within few minutes</p>
                </div>
              </div>
          </Link>
        </div>
      ) : (
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">New User?</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input id="username-1" name="username" defaultValue="" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
              <Button type="submit" onClick={click}>Save</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
      )}
    </div>
  )
}

export default page