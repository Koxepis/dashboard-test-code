import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { Button } from "@vechaiui/react";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import FilterHelpers from "../modules/FilterHelpers";

interface Props {
  columns: any[];
  data: any[];
  className?: string;
  headerClass?: string;
  bodyClass?: string;
}

const TableComponent = (props: Props) => {
  const { columns, data } = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as any;

  const { globalFilter }: any = state;

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <FilterHelpers filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className={classNames(
                "overflow-hidden rounded-none border-gray-200",
                props.className
              )}
            >
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-400"
              >
                <thead>
                  {headerGroups.map((headerGroup: any) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column: any) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                          scope="col"
                          className={classNames(
                            "px-3 sm:px-6 py-4 text-center text-xs font-medium tracking-wide uppercase font-base text-gray-500",
                            props.headerClass
                          )}
                        >
                          <div className="flex items-center justify-center">
                            {column.render("Header")}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <ChevronDownIcon className="w-4 h-4" />
                                ) : (
                                  <ChevronUpIcon className="w-4 h-4" />
                                )
                              ) : (
                                ""
                              )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>

                <tbody
                  {...getTableBodyProps()}
                  className="divide-y divide-gray-200"
                >
                  {page.map((row: any, i: number) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} className="hover:bg-gray-200">
                        {row.cells.map((cell: any) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className={classNames(
                                "px-3 sm:px-6 py-4 whitespace-nowrap text-xs text-center sm:text-sm font-normal",
                                props.bodyClass
                              )}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="w-full bg-gray-100 flex flex-row justify-between">
                <Button
                  onClick={() => previousPage()}
                  variant="outline"
                  size="lg"
                  color="gray"
                  className="w-[50%] focus:ring-0 ring-gray-600 font-normal rounded-none"
                  disabled={!canPreviousPage}
                >
                  Prev
                </Button>

                <Button
                  onClick={() => nextPage()}
                  variant="outline"
                  size="lg"
                  color="gray"
                  className="w-[50%] focus:ring-0 ring-gray-600 font-normal rounded-none"
                  disabled={!canNextPage}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default TableComponent;
