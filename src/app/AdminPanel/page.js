
"use client"
// import  PanelCard  from "../(components)/PanelCards/PanelCards"
import  AdminPanelCards  from "../(components)/AdminPanelCards/AdminPanelCards"
import Image from 'next/image'
import { useState } from "react"

function AdminPanel() {

    let navBar = [{ title: "Dashboard", links: [{ componentName: "Go to Dashboard", path: "/AdminPanel" }] },
    {
        title: "Data", links: [{ componentName: "Students Data", path: "/StudentsData" },
        { componentName: "Courses Data", path: "/CourseData" },
        ]
    },
    {
        title: "Registrations", links: [{ componentName: "Student Registration", path: "/StudentRegistration" },
        { componentName: "Course Registration", path: "/CourseRegistration" }]
    },
    {
        title: "About", links: [{ componentName: "About Us", path: "/#" },
        { componentName: "LogOut", path: "/#" }]
    }
    ]
const [students, setStudents] = useState(0)
const [courses, setCourses] = useState(0)
    // let record = [{
    //     title: "Orders",
    //     year: 89,
    //     month: 52,
    //     today: 2,
    //     type: "orders"
    // },
    // {
    //     title: "Reveneu",
    //     year: 71703,
    //     month: 5111,
    //     today: 0,
    //     type: " Rs"
    // },
    // {
    //     title: "Orders",
    //     year: 87,
    //     month: 50,
    //     today: 0,
    //     type: "orders"
    // }]

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
                    <div className="flex w-1/3 justify-between px-5"> <img src="https://logowik.com/content/uploads/images/student5651.jpg" width={90} height={90}/><div className="flex flex-col"><p>89</p><p>Total Students</p></div></div>
                    <div className="flex w-1/3 justify-between px-5"> <img src="https://static.vecteezy.com/system/resources/previews/016/017/402/original/transparent-training-icon-free-png.png" width={60} height={20}/><div className="flex flex-col"><p>87</p><p>Total Courses</p></div></div>
                    <div className="flex w-1/3 justify-between px-5"> <img src="https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/dollor.png" /><div className="flex flex-col"><p>71703</p><p>Total Revenue</p></div></div>
                </section>
                {/* <section className="flex justify-between divide-x-2 shadow-md rounded bg-white py-10">
                    {record.map((object,index) => {
                        return <PanelCard record={object} key={index}/>
                    })
                    }
                </section> */}
            </div>
        </div>
    )
}
export default AdminPanel 