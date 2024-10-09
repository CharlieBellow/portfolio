type descriptionProps = {
  description: string,
  colorText: string
}

import clsx from "clsx"
export default function Description({description, colorText}: descriptionProps) {
  return (
    <div className={clsx(`text-${colorText}`)}>{description}</div>
  )
}
