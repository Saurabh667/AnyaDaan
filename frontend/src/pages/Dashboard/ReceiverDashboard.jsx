// import React from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { PackageSearch, HeartHandshake, LogOut } from "lucide-react"
// import { Link } from "react-router-dom"

// const ReceiverDashboard = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 dark:from-gray-900 dark:to-gray-800">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mb-8">
//           Receiver Dashboard
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Card className="hover:shadow-xl transition-all">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <PackageSearch className="text-emerald-500" />
//                 Browse Donations
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-600 dark:text-gray-400 mb-4">
//                 Explore available items and request what you need.
//               </p>
//               <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
//                 <Link to="/contribute">Find Items</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-xl transition-all">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <HeartHandshake className="text-pink-500" />
//                 Your Requests
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-600 dark:text-gray-400 mb-4">
//                 Check status of your previous donation requests.
//               </p>
//               <Button variant="outline" className="text-emerald-600 border-emerald-500">
//                 View Requests
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="hover:shadow-xl transition-all">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <LogOut className="text-red-500" />
//                 Logout
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-600 dark:text-gray-400 mb-4">
//                 Logout from your receiver account safely.
//               </p>
//               <Button className="bg-red-600 hover:bg-red-700 text-white">Logout</Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ReceiverDashboard
