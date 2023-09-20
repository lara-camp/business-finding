import Pagination from "@/Components/Pagination";
import { Link, router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Example({ data, columns, routeName, view, title, edit, destroy, add}) {

    const {permissions} = usePage().props;
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                router.post(`/admin/${routeName}/${id}`, {
                    onSuccess: () => Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )   
                })
            }
          })     
    }
    
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                        Users
                    </h1>
                </div>

                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    {
                        permissions.includes(`create ${title}`) 
                        ? 
                        <button
                            type="button"
                            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <Link href={`/admin/${routeName}/create`}>
                              Add {title.toUpperCase()}
                            </Link>
                        </button>
                        : ""
                    }
                    
                </div>
            </div>

            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {columns.map((item) => (
                                            <th
                                                key={item}
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                            >
                                                {item.toUpperCase()}
                                            </th>
                                        ))}

                                        <th
                                            scope="col"
                                            className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                                        >
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {data.data.data.map((item) => (
                                        <tr key={item.id}>
                                          {
                                            columns.map(col => (
                                              <td key={col} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                  {item[col]}
                                              </td>
                                            ))
                                          }
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                                                {   
                                                    view &&
                                                    permissions.includes(`view ${title}`) ? 
                                                    <Link
                                                        href={`/admin/${routeName}/${item.id}`}
                                                        className="text-yellow-700 hover:text-yello-200 me-5"
                                                    >
                                                        View 
                                                    </Link> : ""
                                                }
                                                {
                                                    permissions.includes(`edit ${title}`) ?
                                                    <Link
                                                    href={`/admin/${routeName}/edit/${item.id}`}
                                                    className="text-indigo-600 hover:text-indigo-900  me-5"
                                                >
                                                    Edit
                                                </Link> : ""
                                                }
                                                {   
                                                    destroy &&
                                                    permissions.includes(`delete ${title}`) ?
                                                        <button 
                                                            onClick={() => handleDelete(item.id)}
                                                            className="text-red-500 hover:text-red-300"
                                                        > 
                                                            Delete 
                                                        </button>: ""
                                                }
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Pagination links={data.links} meta={data.meta}/>
            </div>
        </div>
    );
}
