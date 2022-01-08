import React from "react";
import { useTable } from "react-table";

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
    useTable({
      columns,
      data,
    });

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            className={classNames(
              "overflow-hidden rounded-none border-gray-800",
              props.className
            )}
          >
            <table
              {...getTableProps()}
              className="min-w-full divide-y divide-gray-800"
            >
              <thead>
                {headerGroups.map((headerGroup: any) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any) => (
                      <th
                        {...column.getHeaderProps()}
                        scope="col"
                        className={classNames(
                          "px-6 py-3 whitespace-nowrap text-gray-600 text-xs sm:text-sm font-semibold capitalize tracking-tight",
                          props.headerClass
                        )}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="divide-y divide-gray-800"
              >
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell: any) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className={classNames(
                              "px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-normal",
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
