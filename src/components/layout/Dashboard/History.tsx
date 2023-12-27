import Transaction from "./Transaction";

const History = () => {
    return (
        <div className="w-full phone:w-[50%] tablet:w-[65%] ">
            <div className=" flex  justify-between gap-4">
                <h2 className="text-lg phone:block hidden">History</h2>

                <div className="flex gap-4 py-0.5 items-end flex-wrap">
                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="start">Start Date</label>
                        <input className="bg-transparent border-2 border-black border-solid rounded-md py-1 px-2 text-xs outline-none" type="date" id="start" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm" htmlFor="end">End Date</label>
                        <input className="bg-transparent border-2 border-black border-solid rounded-md py-1 px-2 text-xs outline-none" type="date" id="end" />
                    </div>
                    <button className="bg-primary text-white font-1xl rounded-md h-fit py-1 px-4" >Filter</button>
                </div>
            </div>

            <div className="mt-4 mb-8  text-light-text-color">
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
            </div>


        </div>
    )
}


export default History;