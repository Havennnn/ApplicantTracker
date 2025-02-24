import { Link } from "@inertiajs/react";

export default function NavLink({
  active = false,
  className = "",
  children,
  title,
  ...props
}) {
  return (
    <Link
      {...props}
      className={
        " group w-full inline-flex justify-center items-center px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
        (active
          ? "bg-blue-50 px-2 py-1.5 text-blue-700"
          : "px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700") +
        className
      }
    >
      <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
        {title}
      </span>
      {children}
    </Link>
  );
}
