
// "use client"
import  PanelCard  from "../(components)/PanelCards/PanelCards"
import  AdminPanelCards  from "../(components)/AdminPanelCards/AdminPanelCards"


function AdminPanel() {

    let navBar = [{ title: "Dashboard", links: [{ componentName: "Go to Dashboard", path: "/admin" }] },
    {
        title: "Products", links: [{ componentName: "All Products", path: "/#" },
        { componentName: "All Products", path: "/#" },
        { componentName: "Create Product", path: "/newproduct" }]
    },
    {
        title: "Orders Details", links: [{ componentName: "Pending Orders", path: "/pendingOrders" },
        { componentName: "Completed Orders", path: "/completedOrders" }]
    },
    {
        title: "About", links: [{ componentName: "About Us", path: "/#" },
        { componentName: "LogOut", path: "/#" }]
    }
    ]

    let record = [{
        title: "Orders",
        year: 89,
        month: 52,
        today: 2,
        type: "orders"
    },
    {
        title: "Reveneu",
        year: 71703,
        month: 5111,
        today: 0,
        type: " Rs"
    },
    {
        title: "Orders",
        year: 87,
        month: 50,
        today: 0,
        type: "orders"
    }]

    return (
        <div className="flex bg-zinc-100">
            <aside className="w-1/6 my-6">  {/* left pr jo nav cards bna gan wo ya kra ga */}
                <div className="float-right mr-4 " >
                    {navBar.map((card,index) => {
                        return < AdminPanelCards card={card} key={index}/>
                    })
                    }
                </div>
            </aside>
            <div className="w-10/12 my-6 bg-white">
                <section className="flex justify-between shadow-md divide-x-2 rounded bg-white py-9 my-5">
                    <div className="flex w-1/3 justify-between px-5"> <img src="https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/totalS.png" /><div className="flex flex-col"><p>89</p><p>Total Orders</p></div></div>
                    <div className="flex w-1/3 justify-between px-5"> <img src="https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/comp2.png" /><div className="flex flex-col"><p>87</p><p>Completed Orders</p></div></div>
                    <div className="flex w-1/3 justify-between px-5"> <img src="https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/dollor.png" /><div className="flex flex-col"><p>71703</p><p>Total Revenue</p></div></div>
                </section>
                <section className="flex justify-between divide-x-2 shadow-md rounded bg-white py-10">
                    {record.map((object,index) => {
                        return <PanelCard record={object} key={index}/>
                    })
                    }
                </section>
                <section className="shadow-md">

                    <h1 className="text-2xl font-bold">Pending Orders</h1>
                    <div>
                        <h2>HOOPS 3.0 LOW CLASSIC VINTAGE SHOES</h2>{/* should be dynamic */}
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col ml-2 text-left">
                                <p>Explanation:</p>
                                <div>
                                    <p>Size: <span></span></p>
                                    <p>Quantity: <span></span></p>
                                </div>
                            </div>
                            <div className="flex flex-col mr-2 text-left">
                                <p>Price:<span>{ }</span></p>
                                <p className="text-green-600"></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default AdminPanel 