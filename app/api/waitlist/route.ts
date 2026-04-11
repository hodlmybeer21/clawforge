import { NextResponse } from 'next/server'
import { writeFile, appendFile, existsSync } from 'fs'
import { promisify } from 'util'

const writeFileAsync = promisify(writeFile)
const appendFileAsync = promisify(appendFile)

const DATA_FILE = '/tmp/clawforge-waitlist.csv'

export async function POST(request: Request) {
  try {
    const { email, idea } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const timestamp = new Date().toISOString()
    const row = `${timestamp},${email},"${(idea || '').replace(/"/g, '""')}"\n`

    const header = 'timestamp,email,idea\n'
    if (!existsSync(DATA_FILE)) {
      await writeFileAsync(DATA_FILE, header)
    }
    await appendFileAsync(DATA_FILE, row)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }
}