import Stats from "./Stats"

function Report() {
    return (
        <div className="border-4 mx-64 px-64 py-12">
            <div className="flex flex-row justify-between">
                <div className="avatar w-48 h-48">
                    <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
                    </div>
                </div>
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold mb-4">Faculty Name</h1>
                <h1 className="text-2xl font-bold mb-4">Designation, University</h1>
                <h1 className="text-2xl font-bold mb-4">Country</h1>
                <h1 className="text-2xl font-bold mb-4">email@gmail.com</h1>
            </div>
        </div>

        <div className="flex flex-row mt-20 justify-between">
            <div className="flex flex-col">
                    <h1 className="text-3xl font-bold mb-4">Faculty Name</h1>
                    <h1 className="text-2xl font-bold mb-4">Designation, University</h1>
                    <h1 className="text-2xl font-bold mb-4">Country</h1>
                    <h1 className="text-2xl font-bold mb-4">email@gmail.com</h1>
            </div>
            <div className="flex flex-col">
                <Stats></Stats>
            </div>
        </div>
        <div className="flex flex-row mt-20 justify-between">
            <div className="flex flex-col">
                    <h1 className="text-3xl font-bold mb-4">Faculty Name</h1>
                    <h1 className="text-2xl font-bold mb-4">Designation, University</h1>
                    <h1 className="text-2xl font-bold mb-4">Country</h1>
                    <h1 className="text-2xl font-bold mb-4">email@gmail.com</h1>
            </div>
            <div className="flex flex-col max-w-sm">
                <span className="text-3xl">Total Journal Papers: 20</span>
                <span className="text-3xl">Total Conference Papers: 15</span>
                <span>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </span>
            </div>
        </div>
        <div className="flex flex-row mt-20 justify-between">
            <div className="flex flex-col">
                    <h1 className="text-3xl font-bold mb-4">Key Publications</h1>
                    <span className="text-lg mb-4">lorem ipsum lorem ipsum lorem ipsum lorem ipsum </span>
                    <span className="text-lg mb-4">lorem ipsum lorem ipsum lorem ipsum lorem ipsum </span>
                    <span className="text-lg mb-4">lorem ipsum lorem ipsum lorem ipsum lorem ipsum </span>
            </div>
            <div className="w-50 h-50 border-4 p-10 bg-gray-900">
                <span className="text-3xl">World Map of Readers</span>
            </div>
        </div>
        </div>
    )
}

export default Report