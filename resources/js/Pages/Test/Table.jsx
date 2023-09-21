import Pagination from "@/Components/Pagination";
import { Link, router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Example({ data, columns, routeName }) {
  const { permissions } = usePage().props;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        router.post(`/admin/${routeName}/${id}`, {
          onSuccess: () =>
            Swal.fire("Deleted!", "Your file has been deleted.", "success"),
        });
      }
    });
  };

  const renderColumnValue = (item, col) => {
    if (col === "image") {
      // Render the image
      return (
        <td
          key={col}
          className="py-4 pl-4 pr-3 text-sm font-medium text-center text-gray-900 whitespace-nowrap sm:pl-6"
        >
          <img
            src={item.image} // Assuming 'item.image' contains the image URL
            alt="Image"
            className="h-auto max-w-xs"
          />
        </td>
      );
    } else {
      // Render other columns as text
      return (
        <td
          key={col}
          className="py-4 pl-4 pr-3 text-sm font-medium text-center text-gray-900 whitespace-nowrap sm:pl-6"
        >
          {item[col]}
        </td>
      );
    }
  };

  const renderActions = (item) => (
    <td className="relative flex py-4 pl-3 pr-4 text-sm font-medium text-center whitespace-nowrap sm:pr-6">
      {/* Render your action links/buttons here */}
      {permissions.includes(`view ${routeName}`) && (
        <Link
          href={`/admin/${routeName}/${item.id}`}
          className="text-yellow-700 hover:text-yello-200 me-5"
        >
          {/* Render your view link */}
        </Link>
      )}
      {permissions.includes(`edit ${routeName}`) && (
        <Link
          href={`/admin/${routeName}/edit/${item.id}`}
          className="text-indigo-600 hover:text-indigo-900 me-5"
        >
          {/* Render your edit link */}
        </Link>
      )}
      {permissions.includes(`create ${routeName}`) && (
        <button
          onClick={() => handleDelete(item.id)}
          className="text-red-500 hover:text-red-300"
        >
          {/* Render your delete button */}
        </button>
      )}
    </td>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Users
          </h1>
        </div>

        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {permissions.includes(`create ${routeName}`) ? (
            <button
              type="button"
              className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Link href={`/admin/${routeName}/create`}>
                Add {routeName.toUpperCase()}
              </Link>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {columns.map((col) => (
                      <th
                        key={col}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {col.toUpperCase()}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-center"
                    >
                      <span className="sr-only">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 text-yellow-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {data.data.data.map((item) => (
                    <tr key={item.id}>
                      {columns.map((col) =>
                        renderColumnValue(item, col)
                      )}
                      {renderActions(item)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Pagination links={data.links} meta={data.meta} />
      </div>
    </div>
  );
}
