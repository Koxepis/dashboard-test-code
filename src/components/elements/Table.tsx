import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { useSortBy, useTable } from "react-table";

interface Props {
  columns: any[];
  data: any[];
  className?: string;
  headerClass?: string;
  bodyClass?: string;
}

const TableComponent = (props: Props) => {
  const { columns, data } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
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
                        className={classNames(props.headerClass)}
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
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="hover:bg-gray-200">
                      {row.cells.map((cell: any) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className={classNames(
                              "px-6 py-4 whitespace-nowrap text-xs text-center sm:text-sm font-normal",
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
