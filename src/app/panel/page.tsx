import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import connectDB from '@/lib/db'

import Certificate from '@/models/Certificate'
import Order from '@/models/Order'
import SupportTicket from '@/models/SupportTicket'

import CustomerDashboard from '@/components/customer/CustomerDashboard'

export default async function PanelPage() {
  const session = await getServerSession(authOptions)

  if (!session) redirect('/giris')
  if (session.user.role !== 'customer') redirect('/admin')

  await connectDB()

  const userId = session.user.id

  const certificates = await Certificate.find({ user: userId })
  const orders = await Order.find({ user: userId })
  const openTickets = await SupportTicket.find({
    user: userId,
    status: 'open',
  })

  const now = new Date()
  const thirtyDaysLater = new Date()
  thirtyDaysLater.setDate(now.getDate() + 30)

  const expiringSoon = certificates.filter(
    (cert) =>
      cert.expiresAt >= now &&
      cert.expiresAt <= thirtyDaysLater
  )

  return (
    <CustomerDashboard
      certificatesCount={certificates.length}
      expiringCount={expiringSoon.length}
      ordersCount={orders.length}
      openTicketsCount={openTickets.length}
    />
  )
}
