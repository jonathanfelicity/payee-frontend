import { FaMoneyBillTransfer } from "react-icons/fa6"
import { IoIosArrowForward } from "react-icons/io";
import TransferModal from "./TransferModal";
import { useState } from "react";
function UserInfo() {

  const [openTransferModal, setOpenTransferModal] = useState(false)

  return (
    <div className="w-full phone:w-[50%] tablet:w-[35%] bg-primary px-10 py-4 rounded-2xl text-light-text-color h-fit phone:sticky top-20">
      <h2 className="text-3xl font-bold capitalize text-center mt-8">John doe michael</h2>
      <p className="text-center mb-8">verified account</p>

      <div className=" bg-secondary w-full my-8 p-8 rounded-xl">
        <div className="mb-4">
          <p className="text-sm">Balance</p>
          <p className="text-2xl font-medium">₦ 25000</p>
        </div>

        <div className="">
          <p className="text-sm">Account</p>
          <p className="text-xl font-medium">35558 xxx xxx xxx 3593</p>
        </div>
      </div>

      <div className="">
        <button className="mb-2 w-full text-left font-medium capitalize bg-secondary p-4 rounded-xl flex items-center justify-between gap-4 "
          onClick={() => setOpenTransferModal(true)}
        >
          <div className="flex items-center justify-between gap-4">
            <FaMoneyBillTransfer className="text-3xl bg-light-text-color text-primary p-1 rounded-lg " />
            <span>transfer</span>
          </div>

          <IoIosArrowForward className="text-light-text-color" />
        </button>

        <button className="mb-2 w-full text-left font-medium capitalize bg-secondary p-4 rounded-xl flex items-center justify-between gap-4 ">
          <div className="flex items-center justify-between gap-4">
            <FaMoneyBillTransfer className="text-3xl bg-light-text-color text-primary p-1 rounded-lg" />
            <span>withdraw</span>
          </div>

          <IoIosArrowForward className="text-light-text-color" />
        </button>


      </div>


      <>
        <TransferModal setOpenTransferModal={setOpenTransferModal} openTransferModal={openTransferModal} />
      </>


    </div>
  )
}

export default UserInfo
