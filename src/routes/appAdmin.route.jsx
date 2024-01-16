import { Routes, Route } from 'react-router-dom'

import { AdminHome } from '../pages/AdminHome'
import { AdminDetails } from '../pages/AdminDetails'
import { EditDish } from '../pages/EditDish'
import { NewDish } from '../pages/NewDish'

export function AppAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/details/:id" element={<AdminDetails />} />
      <Route path="/editdish/:id" element={<EditDish />} />
      <Route path="/newDish/" element={<NewDish />} />
    </Routes>
  )
}