import { Skeleton } from "../ui/skeleton";

const TableSkeleton = ({ long }: { long: number }) => {
  return (
  
      <table>
        <thead>
          <tr>
            <th>
              <Skeleton className="h-5 w-full bg-neutral-500" />
            </th>

            <th>
              <Skeleton className="h-5 w-full bg-neutral-500" />
            </th>
            <th className="ltr:rounded-r-md rtl:rounded-l-md">
              <Skeleton className="h-5 w-full bg-neutral-500" />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: long }).map((_, i) => (
            <tr
              key={i}
              className="group text-white-dark hover:text-black dark:hover:text-white-light/90"
            >
              <td className="text-primary max-w-44">
                <Skeleton className="h-3 w-full bg-foreground" />
              </td>

              <td>
                <Skeleton className="h-3 w-full bg-foreground" />
              </td>
              <td>
                <Skeleton className="h-3 w-full bg-foreground" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default TableSkeleton;
