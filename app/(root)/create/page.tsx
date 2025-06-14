"use client"
import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const page = () => {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState({ summary: {summary: ''}, podcast: {podcast_script: ''} })
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setFile(file)
  }
  const handleSubmit = async () => {
    if (!file) return alert('Please upload a PDF')

    setLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const [summaryRes, podcastRes] = await Promise.all([
        fetch('https://chordlabs.onrender.com/summary', {
          method: 'POST',
          body: formData,
        }),
        fetch('https://chordlabs.onrender.com/podcast', {
          method: 'POST',
          body: formData,
        }),
      ])

      const summaryData = await summaryRes.json()
      const podcastData = await podcastRes.json()
      setResult({
        summary: summaryData,
        podcast: podcastData,
      })
      console.log(summaryData);
      console.log(podcastData);
      
    } catch (err) {
      console.error(err)
      alert('Error uploading file')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <h1 className='text-4xl font-bold'>create</h1>
      <br />
      <div className="space-y-4 p-4 max-w-xl mx-auto border rounded-xl shadow">
        <Label htmlFor="pdf">Upload PDF</Label>
        <Input
          id="pdf"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload & Generate'}
        </Button>
      </div>
      <br />
      {result.summary.summary !== '' && (
        <div className="mt-4 px-5">
          <h3 className="font-bold text-2xl">📄Short and Sweet Summary :</h3>
          <br />
          <p className="whitespace-pre-wrap text-base ">{result.summary?.summary}</p>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-gray-900" />
        </div>
      )}
    </div>
  )
}

export default page