import React from "react";
import { Link } from 'react-router-dom'

export default function ShoppingCart() {
    return (
        <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
            <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
                <h3 className="text-2xl">Shopping Cart</h3>
            </div>
            <div className="border-b border-gray-200 mb-4 hidden md:block">
                <div className="flex flex-start items-center pb-2 -mx-4">
                    <div className="px-4 flex-none">
                        <div className="" style={{ width: 90 }}>
                            <h6>Photo</h6>
                        </div>
                    </div>
                    <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Product</h6>
                        </div>
                    </div>
                    <div className="px-4 w-5/12">
                        <div className="">
                            <h6>Price</h6>
                        </div>
                    </div>
                    <div className="px-4 w-2/12">
                        <div className="text-center">
                            <h6>Action</h6>
                        </div>
                    </div>
                </div>
            </div>
            <p id="cart-empty" className="hidden text-center py-8">
                Ooops... Cart is empty
                <Link to="/" className="underline">
                    Shop Now
                </Link>
            </p>
            {/* START: ROW 1 */}
            <div
                className="flex flex-start flex-wrap items-center mb-4 -mx-4"
                data-row={1}
            >
                <div className="px-4 flex-none">
                    <div className="" style={{ width: 90, height: 90 }}>
                        <img
                            src="/images/content/chair-1.png"
                            alt="chair-1"
                            className="object-cover rounded-xl w-full h-full"
                        />
                    </div>
                </div>
                <div className="px-4 w-auto flex-1 md:w-5/12">
                    <div className="">
                        <h6 className="font-semibold text-lg md:text-xl leading-8">
                            Saman Kakka
                        </h6>
                        <span className="text-sm md:text-lg">Office Room</span>
                        <h6 className="font-semibold text-base md:text-lg block md:hidden">
                            IDR 28.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                    <div className="">
                        <h6 className="font-semibold text-lg">
                            IDR 28.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-2/12">
                    <div className="text-center">
                        <button
                            data-delete-item={1}
                            className="text-red-600 border-none focus:outline-none px-3 py-1"
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
            {/* END: ROW 1 */}
            {/* START: ROW 2 */}
            <div
                className="flex flex-start flex-wrap items-center mb-4 -mx-4"
                data-row={2}
            >
                <div className="px-4 flex-none">
                    <div className="" style={{ width: 90, height: 90 }}>
                        <img
                            src="/images/content/chair-2.png"
                            alt="chair-2"
                            className="object-cover rounded-xl w-full h-full"
                        />
                    </div>
                </div>
                <div className="px-4 w-auto flex-1 md:w-5/12">
                    <div className="">
                        <h6 className="font-semibold text-lg md:text-xl leading-8">
                            Green Seat
                        </h6>
                        <span className="text-sm md:text-lg">Office Room</span>
                        <h6 className="font-semibold text-base md:text-lg block md:hidden">
                            IDR 28.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                    <div className="">
                        <h6 className="font-semibold text-lg">
                            IDR 12.500.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-2/12">
                    <div className="text-center">
                        <button
                            data-delete-item={2}
                            className="text-red-600 border-none focus:outline-none px-3 py-1"
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
            {/* END: ROW 2 */}
            {/* START: ROW 3 */}
            <div
                className="flex flex-start flex-wrap items-center mb-4 -mx-4"
                data-row={3}
            >
                <div className="px-4 flex-none">
                    <div className="" style={{ width: 90, height: 90 }}>
                        <img
                            src="/images/content/chair-3.png"
                            alt="chair-3"
                            className="object-cover rounded-xl w-full h-full"
                        />
                    </div>
                </div>
                <div className="px-4 w-auto flex-1 md:w-5/12">
                    <div className="">
                        <h6 className="font-semibold text-lg md:text-xl leading-8">
                            Pacific
                        </h6>
                        <span className="text-sm md:text-lg">Office Room</span>
                        <h6 className="font-semibold text-base md:text-lg block md:hidden">
                            IDR 28.000.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                    <div className="">
                        <h6 className="font-semibold text-lg">
                            IDR 88.800.000
                        </h6>
                    </div>
                </div>
                <div className="px-4 w-2/12">
                    <div className="text-center">
                        <button
                            data-delete-item={3}
                            className="text-red-600 border-none focus:outline-none px-3 py-1"
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
            {/* END: ROW 3 */}
        </div>
    );
}
