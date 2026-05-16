import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // TODO: Add to Resend audience / Supabase subscribers table

    console.log('Newsletter subscriber:', email)

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
