type descriptionProps = {
  description: string,
  colorText: string
}

import clsx from "clsx"
export default function Description({description, colorText}: descriptionProps) {
  return (
    <span className={clsx(`flex p-6 font-semibold text-justify text-sm lg:text-2xl md:text-base xl:text-3xl 2xl:text-2xl 2xl:p-14 text-${colorText}`)}>{description}</span>
  )
}
