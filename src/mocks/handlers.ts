import { http, HttpResponse, delay } from 'msw'

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    // Add artificial delay to simulate real network request
    await delay(1000)

    const requestBody = await request.json() as any
    const { email, password } = requestBody

    if (email === 'test@example.com' && password === 'password123') {
      return HttpResponse.json({
        user: {
          id: 'usr_123',
          name: 'Test User',
          email: 'test@example.com',
        },
        token: 'mock-jwt-token-abcd-1234',
      })
    }

    return HttpResponse.json(
      { message: 'Invalid email or password. Try test@example.com / password123' },
      { status: 401 }
    )
  }),
]
