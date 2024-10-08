"use client";
import useSWR from "swr";
import axios from "axios";
import { Deposits, User } from "../../../../modals/user";
import { signOut } from "next-auth/react";
import Table from "@/components/Table/Table";
import { getUserDeposit, getUserWithdrew } from "@/libs/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import PaymentModal from "@/components/PaymentModal/PaymentModal";
import BackDrop from "@/components/BackDrop/BackDrop";
import { formatCurrency } from "@/libs/helpers";
import LoadingSpinner from "../../loading";
import { formatCurrencyUSD } from "@/libs/helpers";

const UserDetailes = (props: { params: { id: string } }) => {
  const {
    params: { id: userId },
  } = props;

  const router = useRouter();

  const [amount, setAmount] = useState<number | undefined>();
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [submittingPayment, setSubmittingPayment] = useState(false);
  const [token, setToken] = useState("");

  const toogglModal = () => setIsPaymentVisible((prev) => !prev);

  const [currentNav, setCurrentNav] = useState<
    "deposits" | "withdrew" | "graph"
  >("deposits");

  const fetchUserDeposit = async () => getUserDeposit(userId);
  const fetchUserWithdrew = async () => getUserWithdrew(userId);

  const fetchUserData = async () => {
    const { data } = await axios.get<User>("/api/users");
    return data;
  };

  const {
    data: userDeposit,
    error,
    isLoading,
  } = useSWR("/api/userDeposit", fetchUserDeposit);

  const {
    data: userWithdrew,
    error: iserror,
    isLoading: withdrewIsLoading,
  } = useSWR("/api/userWithdrew", fetchUserWithdrew);

  const {
    data: userData,
    isLoading: loadinguserData,
    error: errorUser,
  } = useSWR("/api/users", fetchUserData);

  if (errorUser) throw new Error(errorUser);

  if (!userData || !userWithdrew || !userDeposit) return <LoadingSpinner />;

  const calculateTotalWithdrawals = (withdrawalsArray: any) => {
    return withdrawalsArray
      ?.filter((withdrawal: any) => withdrawal.paymentStatus === true) // Filter for paymentStatus true
      ?.reduce((total: any, withdrawal: any) => total + withdrawal.amount, 0); // Sum the amounts
  };

  const calculateTotalBalance = (
    withdrawalsArray: any,
    depositsArray: any,
    initialBalance: number
  ): number => {
    const totalWithdrawals = withdrawalsArray
      ?.filter((withdrawal: any) => withdrawal.paymentStatus === true)
      ?.reduce((total: any, withdrawal: any) => total + withdrawal.amount, 0);

    const totalDeposits = depositsArray
      ?.filter((deposit: any) => deposit.paymentStatus === true)
      ?.reduce((total: any, deposit: any) => total + deposit.amount, 0);

    const totalBalance = initialBalance + totalDeposits - totalWithdrawals;

    return totalBalance;
  };

  const onSubmit = async () => {
    if (!token || !amount) {
      return toast.error("All fields my be filled");
    }

    if (
      amount >
      calculateTotalBalance(userWithdrew, userDeposit, userData?.balance)
    ) {
      return toast.error("insufficient balance");
    }

    setSubmittingPayment(true);
    try {
      const { data } = await axios.post("/api/withdrew", {
        token,
        amount,
      });
      console.log(data);
      toast.success("request Submitted");
    } catch (error) {
      console.log(error);
      toast.error("Request Failed");
    } finally {
      setToken("");
      setAmount(0);
      setSubmittingPayment(false);
      setIsPaymentVisible(false);
    }
  };

  return (
    <div className="relative  p-5 mt-[4rem]">
      <section className="container mx-auto grid md:grid-cols-12 gap-[50px]">
        <div className="hidden lg:block md:col-span-3 h-fit lg:col-span-3 w-[300px] bg-white/10 backdrop-blur-lg shadow-md rounded-md py-4 px-5">
          <main className=" grid place-content-center place-items-center">
            <div className=" grid mb-5 place-content-center h-[60px] w-[60px] rounded-full p-3 bg-black">
              <span className=" uppercase font-bold text-base text-gray-50">
                {userData?.name.slice(0, 1)}
              </span>
            </div>
          </main>
          <h1 className="text-center capitalize font-semibold text-lg">
            👋 {userData?.name ?? ""}
          </h1>
          <p className="font-medium text-center text-base pt-4">
            Created at: {userData?._createdAt.split("T")[0]}
          </p>
          <div className=" flex justify-center">
            <button
              className=" bg-red-600 font-medium text-sm w-[100px] text-white rounded mt-7 py-2 hover:bg-red-800 transition-all duration-700"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign Out
            </button>
          </div>
        </div>

        <main className="md:col-span-12 lg:col-span-9">
          <div className=" block lg:hidden mb-5">
            <main className=" flex items-center gap-3">
              {/* <div className=" grid mb-5 place-content-center h-[30px] w-[30px] rounded-full p-3 bg-black">
                <span className=" uppercase font-bold text-base text-gray-50">
                  {userData?.name.slice(0, 1)}
                </span>
              </div> */}
              <h1 className="capitalize font-semibold text-2xl">
                👋 {userData?.name ?? ""}
              </h1>
            </main>
            <div>
              <button
                className=" bg-red-600 font-medium text-sm w-[100px] text-white rounded mt-7 py-2 hover:bg-red-800 transition-all duration-700"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign Out
              </button>
            </div>
          </div>
          <main className=" flex gap-5 flex-wrap">
            <div className=" w-full h-[180px] md:w-[300px] mb-3 p-5 rounded-md shadow-md bg-green-100">
              <h2 className=" font-bold text-lg">Balance:</h2>
              <h1 className=" pt-5 font-semibold text-2xl">
                {/* ${formatCurrencyUSD(userData?.balance ?? "00.0")} */}
                {formatCurrencyUSD(
                  calculateTotalBalance(
                    userWithdrew,
                    userDeposit,
                    userData?.balance
                  )
                )}
              </h1>
              <button
                onClick={toogglModal}
                className=" w-[120px] h-[40px] bg-teal-700 font-medium text-base rounded text-white mt-4"
              >
                Withdrew
              </button>
            </div>
            <div className=" w-full h-[180px] md:w-[300px] mb-3 p-5 rounded-md shadow-md bg-orange-50">
              <h2 className=" font-bold text-lg">withdrews:</h2>
              <h1 className=" pt-5 font-semibold text-2xl">
                {formatCurrencyUSD(calculateTotalWithdrawals(userWithdrew))}
              </h1>
              <button
                className=" w-fit px-3  h-[40px] bg-orange-600 font-medium text-base rounded text-white mt-4"
                onClick={() => router.push("/deposits")}
              >
                Make a Deposit
              </button>
            </div>
          </main>
          <div className=" flex gap-3 my-5">
            <button
              onClick={() => setCurrentNav("deposits")}
              className={`border w-[120px] h-[40px] font-medium text-base rounded text-black ${currentNav === "deposits" ? " bg-green-400 text-white " : ""}`}
            >
              Deposits
            </button>
            <button
              onClick={() => setCurrentNav("withdrew")}
              className={`border w-[120px] h-[40px] font-medium text-base rounded text-black ${currentNav === "withdrew" ? "bg-green-400 text-white" : ""}`}
            >
              Withdrew
            </button>
          </div>
          {currentNav === "deposits" ? (
            <div className=" hidden md:block">
              {userDeposit && userDeposit.length > 0 ? (
                <Table accountDetailes={userDeposit} />
              ) : (
                <h2 className="text-center font-semibold text-lg py-4">
                  You dont have any deposits
                </h2>
              )}
            </div>
          ) : (
            <></>
          )}

          {currentNav === "withdrew" ? (
            <div className=" hidden md:block">
              {userWithdrew && userWithdrew.length > 0 ? (
                <Table accountDetailes={userWithdrew} />
              ) : (
                <h2 className="text-center font-semibold text-lg py-4">
                  You dont have any withdrews
                </h2>
              )}
            </div>
          ) : (
            <></>
          )}
        </main>

        {/* MOBILE VIEW */}

        <main className=" md:hidden flex flex-col gap-4">
          <h3 className=" font-semibold text-lg text-gray-800">
            Transaction History
          </h3>

          {currentNav === "deposits" ? (
            <div>
              {userDeposit && userDeposit.length > 0 ? (
                <div className=" flex flex-col gap-3">
                  {userDeposit?.map((item, index) => (
                    <div
                      key={index}
                      className=" border flex justify-between rounded shadow-md px-3 py-2 w-full"
                    >
                      <span className=" flex flex-col gap-3">
                        <h2 className=" font-semibold text-sm md:text-base">
                          {item.token}
                        </h2>
                        <p className=" font-semibold text-sm md:text-base">
                          {item._createdAt.split("T")[0]}
                        </p>
                      </span>

                      <span className=" flex flex-col gap-3">
                        <h2 className=" font-semibold text-sm md:text-base text-right">
                          {formatCurrency(item.amount)}
                        </h2>
                        <p
                          className={`capitalize font-semibold text-sm md:text-base ${item.paymentStatus ? " text-green-600  " : "text-orange-400"}`}
                        >
                          {" "}
                          {item?.paymentStatus ? "Success" : "Pending"}
                        </p>
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <h2 className="text-center font-semibold text-lg py-4">
                  You dont have any deposits
                </h2>
              )}
            </div>
          ) : (
            <></>
          )}

          {currentNav === "withdrew" ? (
            <div>
              {userWithdrew && userWithdrew.length > 0 ? (
                <div className=" flex flex-col gap-3">
                  {userWithdrew?.map((item, index) => (
                    <div
                      key={index}
                      className=" border flex justify-between rounded shadow-md px-3 py-2 w-full"
                    >
                      <span className=" flex flex-col gap-3">
                        <h2 className=" font-semibold text-sm md:text-base">
                          {item.token}
                        </h2>
                        <p className=" font-semibold text-sm md:text-base">
                          {item._createdAt.split("T")[0]}
                        </p>
                      </span>

                      <span className=" flex flex-col gap-3">
                        <h2 className=" font-semibold text-sm md:text-base text-right">
                          {""}
                          {formatCurrency(item.amount)}
                        </h2>
                        <p
                          className={`capitalize font-semibold text-sm md:text-base ${item.paymentStatus ? " text-green-600  " : "text-orange-400"}`}
                        >
                          {" "}
                          {item?.paymentStatus ? "Success" : "Pending"}
                        </p>
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <h2 className="text-center font-semibold text-lg py-4">
                  You dont have any withdrews
                </h2>
              )}
            </div>
          ) : (
            <></>
          )}
        </main>
      </section>

      <PaymentModal
        token={token}
        setToken={setToken}
        isOpen={isPaymentVisible}
        toggleModal={toogglModal}
        submitHandler={onSubmit}
        isSubmittingPayment={submittingPayment}
        amountSent={amount}
        setAmountSent={setAmount}
        headerText="withdrew Request"
        AmountLable="Amount"
        CurrencyLable="Currency"
      />
      <BackDrop isOpen={isPaymentVisible} />
    </div>
  );
};

export default UserDetailes;
