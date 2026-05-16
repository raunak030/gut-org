import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, concern, message, source = 'website' } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Save to Supabase database
    // const { data, error } = await supabase.from('leads').insert({
    //   name, email, phone, concern, message, source,
    //   created_at: new Date().toISOString()
    // })

    // TODO: Send notification email via Resend
    // await resend.emails.send({
    //   from: 'noreply@gutorg.in',
    //   to: 'gutorgwellness@gmail.com',
    //   subject: `New Lead: ${name}`,
    //   html: `<p>${name} (${email}) submitted a contact form. Concern: ${concern}</p>`
    // })

    console.log('Lead captured:', { name, email, phone, concern, source })

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error capturing lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  // Admin-only endpoint — add auth middleware in production
  return NextResponse.json(
    { message: 'Admin authentication required' },
    { status: 401 }
  )
}
