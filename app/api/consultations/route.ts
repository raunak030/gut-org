import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, health_issue, preferred_time, program } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    // TODO: Save to Supabase consultations table
    // const { data, error } = await supabase.from('consultations').insert({
    //   name, email, phone, health_issue, preferred_time, program,
    //   status: 'pending',
    //   created_at: new Date().toISOString()
    // })

    // TODO: Send confirmation email to user
    // TODO: Send notification to admin

    console.log('Consultation booked:', { name, email, phone, health_issue, preferred_time })

    return NextResponse.json(
      {
        success: true,
        message: 'Consultation booked successfully. We will contact you within 24 hours.',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error booking consultation:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
