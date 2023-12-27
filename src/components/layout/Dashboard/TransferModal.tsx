import React from 'react'

function TransferModal({ openTransferModal, setOpenTransferModal }: any) {

    return (
        <div
            className={`w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed top-0 right-0 z-100 grid place-content-center transition-opacity duration-500 
                        ${openTransferModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setOpenTransferModal(false)}
        >
            <div
                className={`max-w-[40rem] bg-bg p-6 text-primary rounded-xl mx-7 
                            transition transform duration-500 ease-in-out
                            ${openTransferModal ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}
                onClick={e => e.stopPropagation()}
            >

                <h3 className='font-bold text-xl '>Transfer</h3>

                <form className='my-4'>

                    <div>
                        <label htmlFor="acc">Account Number </label>
                        <input type="number" id="acc" className='w-full bg-transparent outline-none py-2 px-4 rounded-md border-2 border-primary mb-4' />
                    </div>

                    <div>
                        <label htmlFor="amount">Amount </label>
                        <input type="number" id="amount" className='w-full bg-transparent outline-none py-2 px-4 rounded-md border-2 border-primary mb-4' />
                    </div>

                    <button className='bg-primary rounded-md py-2 px-4 text-light-text-color'>Continue</button>

                </form>

            </div>

        </div>
    )
}

export default TransferModal
