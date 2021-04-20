import * as React from 'react'
import * as Next from 'next'
import { useRouter } from 'next/router'

const ExampleIdPage: Next.NextPage = () => {
  const { query } = useRouter()
  const { id } = query
  return <div>the id is {id}</div>
}

export default ExampleIdPage
