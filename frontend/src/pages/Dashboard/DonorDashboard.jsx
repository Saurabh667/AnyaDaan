import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, ListChecks, LogOut } from "lucide-react"
import { Link } from "react-router-dom"

const DonorDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-6 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-8">
          Donor Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="text-purple-500" />
                Donate Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Offer clothes, food, or essentials to those in need.
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link to="/contribute">Start Donating</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="text-green-500" />
                Your Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Track your donation history and impact score.
              </p>
              <Button variant="outline" className="text-purple-600 border-purple-500">
                View Details
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LogOut className="text-red-500" />
                Logout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Logout from your donor account safely.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Logout</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DonorDashboard
