import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDiscussionButton({ text, href }) {
  return (
    <>
      <div class="mt-2"><button class="me-4 py-2 px-3 ps-3 bg-dark"><Link to={href}
        class="text-dark text-decoration-none text-white">
        {text}</Link></button>
      </div>
    </>
  )
}
