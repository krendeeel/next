export async function GET(request: Request) {
  return new Response('<h1>Hello, Next.js!<h1/>', {
    status: 200,
    headers: new Headers({
      ...request.headers,
      'Content-Type': 'text/html; charset=utf-8',
    }),
  });
}
