// Topic: Union types + type narrowing
// Run: npx tsx src/01-types/union-types.ts

type Status = 'loading' | 'success' | 'error'

type ApiResponse =
  | { status: 'loading' }
  | { status: 'success'; data: string[] }
  | { status: 'error'; message: string }

function handleResponse(response: ApiResponse): string {
  switch (response.status) {
    case 'loading':
      return 'Loading...'
    case 'success':
      return `Got ${response.data.length} items`
    case 'error':
      return `Error: ${response.message}`
  }
}

// Try it
console.log(handleResponse({ status: 'loading' }))
console.log(handleResponse({ status: 'success', data: ['a', 'b', 'c'] }))
console.log(handleResponse({ status: 'error', message: 'Not found' }))

// Your turn: add a 'empty' status that has a `reason` string field
