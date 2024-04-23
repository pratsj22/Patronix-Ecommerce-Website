import useValidate from "../../hooks/useValidate";

export default function MyProfile() {

  const {user}=useValidate();
  
  return (
    <div className=' flex flex-col items-center'>
      <div className="flex flex-col px-4 sm:px-0 items-center">
        <h3 className="text-base font-semibold leading-7 text-gray-900">User Details</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100 sm:w-1/3 w-11/12">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 grid grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">{user?.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 grid grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">{user?.phone}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 grid grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">{user?.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-2 grid grid-cols-2 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0">
              {user?.address}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
