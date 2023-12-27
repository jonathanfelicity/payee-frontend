
function Transaction() {
    return (
        <div className="bg-primary cursor-pointer rounded-md py-2 px-4 sm:px-2 w-full flex items-center justify-between gap-4 mt-2 ">
            <div>
                <h4 className="capitalize font-medium">tranfer</h4>
                <p className="text-sm capitalize">august 20 2020</p>
            </div>

            <div>
                <p className="font-medium">+ ₦10000</p>
                <p className="text-sm capitalize text-green-600">successful</p>
            </div>
        </div>
    )
}

export default Transaction
