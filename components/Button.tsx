import clsx from 'clsx'

export function Button({ className, ...props }: any) {
  return (
    <button
      className={clsx(
        'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
        'bg-pink-500 font-semibold text-rose-100 hover:bg-pink-400 active:bg-pink-800 active:text-rose-100/70',
        className
      )}
      {...props}
    />
  )
}
