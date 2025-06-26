import React from 'react'
type LinkProps = {
  href: string
  children: string | React.ReactNode
  space?: boolean
}
export default function Link({ href, space, children}: LinkProps) {
  return (
    <>
      {" "}
    <a
    target="_blank"
    href={href}
    className=" text-action hover:underline font-bold"
      >{children}</a>
      {space ? " " : ""}
     
    </>

  )
}
