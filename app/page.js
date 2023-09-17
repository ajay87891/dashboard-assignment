'use client'
import Kanban from "@/Components/Kanban"
import Navbar from "@/Components/Navbar"
import Sidebar from "@/Components/Sidebar"
import { useState } from "react"


export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
    <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    <Kanban/>
    </>
  )
}
