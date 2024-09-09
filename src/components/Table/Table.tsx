import { formatCurrency } from "@/libs/helpers";
import { Deposits } from "@/modals/user";
import { FC } from "react";

type Props = {
  accountDetailes: Deposits[];
};

const Table: FC<Props> = ({ accountDetailes }) => {
  return (
    <div className=" overflow-x-auto transition-all duration-700 rounded-md mx-auto md:max-w-full shadow-md sm:rounded-md">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <th className="px-4 py-3 text-xs">Currency</th>
          <th className="px-4 py-3 text-xs">Amount</th>
          <th className="px-4 py-3 text-xs">Payment Status</th>
          <th className="px-4 py-3 text-xs">Period</th>
        </thead>
        {/* TABLE BODY */}
        <tbody>
          {accountDetailes?.map((item, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <th className="px-6 py-4 capitalize font-semibold text-sm md:text-base">
                {item.token}
              </th>
              <td className="px-6 py-4 capitalize font-semibold text-sm md:text-base">
                {formatCurrency(item.amount)}
              </td>
              <td
                className={`px-6 py-4 capitalize font-semibold text-sm md:text-base ${item.paymentStatus ? " text-green-600  " : "text-orange-400"}`}
              >
                {item?.paymentStatus ? "Success" : "Pending"}
              </td>
              <td className="px-6 py-4 capitalize font-semibold text-sm md:text-base">
                {item._createdAt?.split("T")[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
