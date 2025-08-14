

// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import {
//   User,
//   Lock,
//   Trash2,
//   Copy,
//   Save,
//   Eye,
//   EyeOff,
//   Upload,
//   Mail,
//   Bell,
//   HelpCircle,
//   Shield,
//   Palette,
//   Globe,
//   MessageSquare,
//   Check,
//   X,
//   SettingsIcon,
// } from "lucide-react"
// import { toast } from "@/hooks/use-toast"
// import { cn } from "@/lib/utils"
// import { AppSidebar } from "@/components/app-sidebar"
// import { AppHeader } from "@/components/app-header"

// interface UserProfile {
//   username: string
//   email: string
//   fullName: string
//   displayName: string
//   avatarUrl: string
// }

// interface NotificationSettings {
//   emailNotifications: boolean
//   appAlerts: boolean
//   newsletter: boolean
//   securityAlerts: boolean
// }

// interface AppearanceSettings {
//   theme: "light" | "dark" | "system"
//   fontSize: "small" | "medium" | "large"
//   language: string
// }

// export default function SettingsPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true)
//   const [darkMode, setDarkMode] = useState(false)
//   const [activeTab, setActiveTab] = useState("profile")
//   const [isLoading, setIsLoading] = useState(false)

//   // User Profile State
//   const [userProfile, setUserProfile] = useState<UserProfile>({
//     username: "johndoe",
//     email: "john.doe@example.com",
//     fullName: "John Doe",
//     displayName: "John",
//     avatarUrl: "/placeholder.svg?height=80&width=80",
//   })

//   // Password Change State
//   const [passwordData, setPasswordData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   })
//   const [showPasswords, setShowPasswords] = useState({
//     current: false,
//     new: false,
//     confirm: false,
//   })

//   // Delete Account State
//   const [deleteConfirmation, setDeleteConfirmation] = useState("")

//   // Notification Settings State
//   const [notifications, setNotifications] = useState<NotificationSettings>({
//     emailNotifications: true,
//     appAlerts: true,
//     newsletter: false,
//     securityAlerts: true,
//   })

//   // Appearance Settings State
//   const [appearance, setAppearance] = useState<AppearanceSettings>({
//     theme: "system",
//     fontSize: "medium",
//     language: "en",
//   })

//   // Feedback Modal State
//   const [feedbackOpen, setFeedbackOpen] = useState(false)
//   const [feedback, setFeedback] = useState("")

//   // Theme management
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme")
//     if (savedTheme === "dark") {
//       setDarkMode(true)
//       document.documentElement.classList.add("dark")
//     }
//   }, [])

//   // Password validation
//   const validatePassword = (password: string) => {
//     const minLength = password.length >= 8
//     const hasUpper = /[A-Z]/.test(password)
//     const hasLower = /[a-z]/.test(password)
//     const hasNumber = /\d/.test(password)
//     const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)

//     return {
//       minLength,
//       hasUpper,
//       hasLower,
//       hasNumber,
//       hasSpecial,
//       isValid: minLength && hasUpper && hasLower && hasNumber && hasSpecial,
//     }
//   }

//   const passwordValidation = validatePassword(passwordData.newPassword)

//   // Handlers
//   const handleProfileUpdate = async () => {
//     setIsLoading(true)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     setIsLoading(false)
//     toast({
//       title: "Profile Updated",
//       description: "Your profile information has been saved successfully.",
//     })
//   }

//   const handlePasswordChange = async () => {
//     if (!passwordValidation.isValid) {
//       toast({
//         title: "Invalid Password",
//         description: "Please ensure your password meets all requirements.",
//         variant: "destructive",
//       })
//       return
//     }

//     if (passwordData.newPassword !== passwordData.confirmPassword) {
//       toast({
//         title: "Passwords Don't Match",
//         description: "New password and confirmation password must match.",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     setIsLoading(false)
//     setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
//     toast({
//       title: "Password Changed",
//       description: "Your password has been updated successfully.",
//     })
//   }

//   const handleDeleteAccount = async () => {
//     if (deleteConfirmation !== userProfile.email) {
//       toast({
//         title: "Confirmation Failed",
//         description: "Please enter your email address to confirm account deletion.",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     setIsLoading(false)
//     toast({
//       title: "Account Deleted",
//       description: "Your account has been permanently deleted.",
//       variant: "destructive",
//     })
//     // Redirect to login or home page
//   }

//   const handleNotificationUpdate = async () => {
//     setIsLoading(true)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     setIsLoading(false)
//     toast({
//       title: "Preferences Updated",
//       description: "Your notification preferences have been saved.",
//     })
//   }

//   const handleAppearanceUpdate = async () => {
//     setIsLoading(true)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     setIsLoading(false)
//     toast({
//       title: "Appearance Updated",
//       description: "Your appearance preferences have been saved.",
//     })
//   }

//   const handleSendFeedback = async () => {
//     if (!feedback.trim()) {
//       toast({
//         title: "Feedback Required",
//         description: "Please enter your feedback before sending.",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     setIsLoading(false)
//     setFeedback("")
//     setFeedbackOpen(false)
//     toast({
//       title: "Feedback Sent",
//       description: "Thank you for your feedback! We'll review it shortly.",
//     })
//   }

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text)
//     toast({
//       title: "Copied!",
//       description: "Email address copied to clipboard.",
//     })
//   }

//   return (
//     <div className={cn("flex h-screen", darkMode ? "dark bg-gray-900" : "bg-gray-50")}>
//       {/* Sidebar */}
//       <AppSidebar
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//         darkMode={darkMode}
//         setDarkMode={setDarkMode}
//       />

//       {/* Main Content */}
//       <div className="flex-1 overflow-hidden flex flex-col">
//         {/* Header */}
//         <AppHeader sidebarOpen={sidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />

//         {/* Page Content */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="max-w-5xl mx-auto px-6 py-8">
//             {/* Page Header */}
//             <div className="mb-8">
//               <div className="flex items-center gap-2 mb-4">
//                 <SettingsIcon className="h-8 w-8 text-gray-600" />
//                 <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
//                   Settings
//                 </h1>
//               </div>
//               <p className={cn("text-lg max-w-3xl", darkMode ? "text-gray-300" : "text-gray-600")}>
//                 Manage your account settings, preferences, and security options.
//               </p>
//             </div>

//             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//               <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
//                 <TabsTrigger value="profile" className="flex items-center gap-2">
//                   <User className="h-4 w-4" />
//                   Profile
//                 </TabsTrigger>
//                 <TabsTrigger value="security" className="flex items-center gap-2">
//                   <Lock className="h-4 w-4" />
//                   Security
//                 </TabsTrigger>
//                 <TabsTrigger value="preferences" className="flex items-center gap-2">
//                   <Bell className="h-4 w-4" />
//                   Preferences
//                 </TabsTrigger>
//                 <TabsTrigger value="support" className="flex items-center gap-2">
//                   <HelpCircle className="h-4 w-4" />
//                   Support
//                 </TabsTrigger>
//               </TabsList>

//               {/* Profile Tab */}
//               <TabsContent value="profile" className="space-y-6">
//                 {/* User Info Display */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <User className="h-5 w-5" />
//                       User Information
//                     </CardTitle>
//                     <CardDescription>Your account details and basic information</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="flex items-center gap-4">
//                       <Avatar className="h-16 w-16">
//                         <AvatarImage src={userProfile.avatarUrl || "/placeholder.svg"} />
//                         <AvatarFallback>{userProfile.fullName.charAt(0)}</AvatarFallback>
//                       </Avatar>
//                       <div className="space-y-1">
//                         <p className={cn("font-medium", darkMode ? "text-gray-100" : "text-gray-900")}>
//                           @{userProfile.username}
//                         </p>
//                         <div className="flex items-center gap-2">
//                           <p className={cn("text-sm", darkMode ? "text-gray-300" : "text-gray-600")}>
//                             {userProfile.email}
//                           </p>
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => copyToClipboard(userProfile.email)}
//                             className="h-6 w-6 p-0"
//                           >
//                             <Copy className="h-3 w-3" />
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Edit Profile */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle>Edit Profile</CardTitle>
//                     <CardDescription>Update your personal information and profile details</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <Label htmlFor="fullName">Full Name</Label>
//                         <Input
//                           id="fullName"
//                           value={userProfile.fullName}
//                           onChange={(e) => setUserProfile((prev) => ({ ...prev, fullName: e.target.value }))}
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="displayName">Display Name</Label>
//                         <Input
//                           id="displayName"
//                           value={userProfile.displayName}
//                           onChange={(e) => setUserProfile((prev) => ({ ...prev, displayName: e.target.value }))}
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="avatarUrl">Profile Photo URL</Label>
//                       <div className="flex gap-2">
//                         <Input
//                           id="avatarUrl"
//                           placeholder="https://example.com/avatar.jpg"
//                           value={userProfile.avatarUrl}
//                           onChange={(e) => setUserProfile((prev) => ({ ...prev, avatarUrl: e.target.value }))}
//                         />
//                         <Button variant="outline" size="icon">
//                           <Upload className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>

//                     <Button onClick={handleProfileUpdate} disabled={isLoading}>
//                       <Save className="h-4 w-4 mr-2" />
//                       {isLoading ? "Saving..." : "Save Changes"}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* Security Tab */}
//               <TabsContent value="security" className="space-y-6">
//                 {/* Change Password */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Lock className="h-5 w-5" />
//                       Change Password
//                     </CardTitle>
//                     <CardDescription>Update your account password for better security</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div className="space-y-2">
//                       <Label htmlFor="currentPassword">Current Password</Label>
//                       <div className="relative">
//                         <Input
//                           id="currentPassword"
//                           type={showPasswords.current ? "text" : "password"}
//                           value={passwordData.currentPassword}
//                           onChange={(e) => setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))}
//                         />
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="absolute right-0 top-0 h-full px-3"
//                           onClick={() => setShowPasswords((prev) => ({ ...prev, current: !prev.current }))}
//                         >
//                           {showPasswords.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                         </Button>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="newPassword">New Password</Label>
//                       <div className="relative">
//                         <Input
//                           id="newPassword"
//                           type={showPasswords.new ? "text" : "password"}
//                           value={passwordData.newPassword}
//                           onChange={(e) => setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
//                         />
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="absolute right-0 top-0 h-full px-3"
//                           onClick={() => setShowPasswords((prev) => ({ ...prev, new: !prev.new }))}
//                         >
//                           {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                         </Button>
//                       </div>

//                       {/* Password Requirements */}
//                       {passwordData.newPassword && (
//                         <div className="space-y-2 mt-3">
//                           <p className="text-sm font-medium">Password Requirements:</p>
//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.minLength ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>At least 8 characters</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.hasUpper ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>Uppercase letter</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.hasLower ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>Lowercase letter</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.hasNumber ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>Number</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.hasSpecial ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>Special character</span>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="confirmPassword">Confirm New Password</Label>
//                       <div className="relative">
//                         <Input
//                           id="confirmPassword"
//                           type={showPasswords.confirm ? "text" : "password"}
//                           value={passwordData.confirmPassword}
//                           onChange={(e) => setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
//                         />
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="absolute right-0 top-0 h-full px-3"
//                           onClick={() => setShowPasswords((prev) => ({ ...prev, confirm: !prev.confirm }))}
//                         >
//                           {showPasswords.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                         </Button>
//                       </div>
//                       {passwordData.confirmPassword && passwordData.newPassword !== passwordData.confirmPassword && (
//                         <p className="text-sm text-red-500">Passwords do not match</p>
//                       )}
//                     </div>

//                     <Button onClick={handlePasswordChange} disabled={isLoading || !passwordValidation.isValid}>
//                       <Lock className="h-4 w-4 mr-2" />
//                       {isLoading ? "Updating..." : "Update Password"}
//                     </Button>
//                   </CardContent>
//                 </Card>

//                 {/* Two-Factor Authentication */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Shield className="h-5 w-5" />
//                       Two-Factor Authentication
//                     </CardTitle>
//                     <CardDescription>Add an extra layer of security to your account</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex items-center justify-between p-4 border rounded-lg">
//                       <div className="space-y-1">
//                         <p className="font-medium">Enable 2FA</p>
//                         <p className="text-sm text-gray-500">Secure your account with two-factor authentication</p>
//                       </div>
//                       <Badge variant="outline" className="text-orange-600 border-orange-600">
//                         Coming Soon
//                       </Badge>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Delete Account */}
//                 <Card className={cn("border-red-200", darkMode ? "bg-red-950 border-red-800" : "bg-red-50")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2 text-red-600">
//                       <Trash2 className="h-5 w-5" />
//                       Delete Account
//                     </CardTitle>
//                     <CardDescription>
//                       Permanently delete your account and all associated data. This action cannot be undone.
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <AlertDialog>
//                       <AlertDialogTrigger asChild>
//                         <Button variant="destructive">
//                           <Trash2 className="h-4 w-4 mr-2" />
//                           Delete Account
//                         </Button>
//                       </AlertDialogTrigger>
//                       <AlertDialogContent>
//                         <AlertDialogHeader>
//                           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                           <AlertDialogDescription>
//                             This action cannot be undone. This will permanently delete your account and remove all your
//                             data from our servers.
//                           </AlertDialogDescription>
//                         </AlertDialogHeader>
//                         <div className="space-y-2">
//                           <Label htmlFor="deleteConfirmation">
//                             Type your email address to confirm: <strong>{userProfile.email}</strong>
//                           </Label>
//                           <Input
//                             id="deleteConfirmation"
//                             value={deleteConfirmation}
//                             onChange={(e) => setDeleteConfirmation(e.target.value)}
//                             placeholder="Enter your email address"
//                           />
//                         </div>
//                         <AlertDialogFooter>
//                           <AlertDialogCancel onClick={() => setDeleteConfirmation("")}>Cancel</AlertDialogCancel>
//                           <AlertDialogAction
//                             onClick={handleDeleteAccount}
//                             disabled={deleteConfirmation !== userProfile.email || isLoading}
//                             className="bg-red-600 hover:bg-red-700"
//                           >
//                             {isLoading ? "Deleting..." : "Delete Account"}
//                           </AlertDialogAction>
//                         </AlertDialogFooter>
//                       </AlertDialogContent>
//                     </AlertDialog>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* Preferences Tab */}
//               <TabsContent value="preferences" className="space-y-6">
//                 {/* Appearance Settings */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Palette className="h-5 w-5" />
//                       Appearance
//                     </CardTitle>
//                     <CardDescription>Customize how the application looks and feels</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <Label htmlFor="theme">Theme</Label>
//                         <Select
//                           value={appearance.theme}
//                           onValueChange={(value: "light" | "dark" | "system") =>
//                             setAppearance((prev) => ({ ...prev, theme: value }))
//                           }
//                         >
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="light">Light</SelectItem>
//                             <SelectItem value="dark">Dark</SelectItem>
//                             <SelectItem value="system">System</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="fontSize">Font Size</Label>
//                         <Select
//                           value={appearance.fontSize}
//                           onValueChange={(value: "small" | "medium" | "large") =>
//                             setAppearance((prev) => ({ ...prev, fontSize: value }))
//                           }
//                         >
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="small">Small</SelectItem>
//                             <SelectItem value="medium">Medium</SelectItem>
//                             <SelectItem value="large">Large</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="language">Language</Label>
//                       <Select
//                         value={appearance.language}
//                         onValueChange={(value) => setAppearance((prev) => ({ ...prev, language: value }))}
//                       >
//                         <SelectTrigger className="w-full md:w-1/2">
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="en">English</SelectItem>
//                           <SelectItem value="es">Español</SelectItem>
//                           <SelectItem value="fr">Français</SelectItem>
//                           <SelectItem value="de">Deutsch</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     <Button onClick={handleAppearanceUpdate} disabled={isLoading}>
//                       <Save className="h-4 w-4 mr-2" />
//                       {isLoading ? "Saving..." : "Save Appearance"}
//                     </Button>
//                   </CardContent>
//                 </Card>

//                 {/* Notification Preferences */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Bell className="h-5 w-5" />
//                       Notifications
//                     </CardTitle>
//                     <CardDescription>Manage how you receive notifications and updates</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div className="space-y-4">
//                       <div className="flex items-center justify-between p-4 border rounded-lg">
//                         <div className="space-y-1">
//                           <Label htmlFor="emailNotifications">Email Notifications</Label>
//                           <p className="text-sm text-gray-500">Receive important updates via email</p>
//                         </div>
//                         <Switch
//                           id="emailNotifications"
//                           checked={notifications.emailNotifications}
//                           onCheckedChange={(checked) =>
//                             setNotifications((prev) => ({ ...prev, emailNotifications: checked }))
//                           }
//                         />
//                       </div>

//                       <div className="flex items-center justify-between p-4 border rounded-lg">
//                         <div className="space-y-1">
//                           <Label htmlFor="appAlerts">App Alerts</Label>
//                           <p className="text-sm text-gray-500">Show notifications within the application</p>
//                         </div>
//                         <Switch
//                           id="appAlerts"
//                           checked={notifications.appAlerts}
//                           onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, appAlerts: checked }))}
//                         />
//                       </div>

//                       <div className="flex items-center justify-between p-4 border rounded-lg">
//                         <div className="space-y-1">
//                           <Label htmlFor="newsletter">Newsletter</Label>
//                           <p className="text-sm text-gray-500">Receive our weekly newsletter and updates</p>
//                         </div>
//                         <Switch
//                           id="newsletter"
//                           checked={notifications.newsletter}
//                           onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, newsletter: checked }))}
//                         />
//                       </div>

//                       <div className="flex items-center justify-between p-4 border rounded-lg">
//                         <div className="space-y-1">
//                           <Label htmlFor="securityAlerts">Security Alerts</Label>
//                           <p className="text-sm text-gray-500">Important security notifications (recommended)</p>
//                         </div>
//                         <Switch
//                           id="securityAlerts"
//                           checked={notifications.securityAlerts}
//                           onCheckedChange={(checked) =>
//                             setNotifications((prev) => ({ ...prev, securityAlerts: checked }))
//                           }
//                         />
//                       </div>
//                     </div>

//                     <Button onClick={handleNotificationUpdate} disabled={isLoading}>
//                       <Save className="h-4 w-4 mr-2" />
//                       {isLoading ? "Saving..." : "Save Preferences"}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* Support Tab */}
//               <TabsContent value="support" className="space-y-6">
//                 {/* Help & Support */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <HelpCircle className="h-5 w-5" />
//                       Help & Support
//                     </CardTitle>
//                     <CardDescription>Get help and contact our support team</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Globe className="h-4 w-4" />
//                           <span className="font-medium">Documentation</span>
//                         </div>
//                         <p className="text-sm text-gray-500 text-left">Browse our comprehensive guides and tutorials</p>
//                       </Button>

//                       <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Mail className="h-4 w-4" />
//                           <span className="font-medium">Contact Support</span>
//                         </div>
//                         <p className="text-sm text-gray-500 text-left">Get in touch with our support team</p>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Send Feedback */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <MessageSquare className="h-5 w-5" />
//                       Send Feedback
//                     </CardTitle>
//                     <CardDescription>Help us improve by sharing your thoughts and suggestions</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
//                       <DialogTrigger asChild>
//                         <Button>
//                           <MessageSquare className="h-4 w-4 mr-2" />
//                           Send Feedback
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent>
//                         <DialogHeader>
//                           <DialogTitle>Send Feedback</DialogTitle>
//                           <DialogDescription>
//                             We'd love to hear your thoughts, suggestions, or report any issues you've encountered.
//                           </DialogDescription>
//                         </DialogHeader>
//                         <div className="space-y-4">
//                           <div className="space-y-2">
//                             <Label htmlFor="feedback">Your Feedback</Label>
//                             <Textarea
//                               id="feedback"
//                               placeholder="Tell us what you think..."
//                               rows={5}
//                               value={feedback}
//                               onChange={(e) => setFeedback(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                         <DialogFooter>
//                           <Button variant="outline" onClick={() => setFeedbackOpen(false)}>
//                             Cancel
//                           </Button>
//                           <Button onClick={handleSendFeedback} disabled={isLoading}>
//                             {isLoading ? "Sending..." : "Send Feedback"}
//                           </Button>
//                         </DialogFooter>
//                       </DialogContent>
//                     </Dialog>
//                   </CardContent>
//                 </Card>

//                 {/* App Information */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle>Application Information</CardTitle>
//                     <CardDescription>Version and system details</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span className="text-gray-500">Version:</span>
//                         <span>1.0.0</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-500">Last Updated:</span>
//                         <span>December 2024</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-500">Build:</span>
//                         <span>2024.12.001</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

















// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import {
//   User,
//   Lock,
//   Trash2,
//   Copy,
//   Save,
//   Eye,
//   EyeOff,
//   Upload,
//   Mail,
//   Bell,
//   HelpCircle,
//   Shield,
//   Palette,
//   Globe,
//   MessageSquare,
//   Check,
//   X,
//   SettingsIcon,
//   Crown,
//   Users,
//   Database,
//   Activity,
//   Key,
//   UserCheck,
// } from "lucide-react"
// import { toast } from "@/hooks/use-toast"
// import { cn } from "@/lib/utils"
// import { AppSidebar } from "@/components/app-sidebar"
// import { AppHeader } from "@/components/app-header"

// interface UserProfile {
//   username: string
//   email: string
//   fullName: string
//   displayName: string
//   avatarUrl: string
//   role: "admin" | "user"
//   permissions: string[]
// }

// interface NotificationSettings {
//   emailNotifications: boolean
//   appAlerts: boolean
//   newsletter: boolean
//   securityAlerts: boolean
//   adminAlerts?: boolean // Admin only
//   systemNotifications?: boolean // Admin only
// }

// interface AppearanceSettings {
//   theme: "light" | "dark" | "system"
//   fontSize: "small" | "medium" | "large"
//   language: string
// }

// interface AdminSettings {
//   userManagement: boolean
//   systemLogs: boolean
//   databaseAccess: boolean
//   apiKeyManagement: boolean
//   maintenanceMode: boolean
// }

// export default function SettingsPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true)
//   const [darkMode, setDarkMode] = useState(false)
//   const [activeTab, setActiveTab] = useState("profile")
//   const [isLoading, setIsLoading] = useState(false)

//   // User Profile State with role
//   const [userProfile, setUserProfile] = useState<UserProfile>({
//     username: "johndoe",
//     email: "john.doe@example.com",
//     fullName: "John Doe",
//     displayName: "John",
//     avatarUrl: "/placeholder.svg?height=80&width=80",
//     role: "admin", // Change this to "user" to test regular user view
//     permissions: ["read", "write", "admin"],
//   })

//   // Password Change State
//   const [passwordData, setPasswordData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   })
//   const [showPasswords, setShowPasswords] = useState({
//     current: false,
//     new: false,
//     confirm: false,
//   })

//   // Delete Account State
//   const [deleteConfirmation, setDeleteConfirmation] = useState("")

//   // Notification Settings State (with admin-specific options)
//   const [notifications, setNotifications] = useState<NotificationSettings>({
//     emailNotifications: true,
//     appAlerts: true,
//     newsletter: false,
//     securityAlerts: true,
//     ...(userProfile.role === "admin" && {
//       adminAlerts: true,
//       systemNotifications: true,
//     }),
//   })

//   // Appearance Settings State
//   const [appearance, setAppearance] = useState<AppearanceSettings>({
//     theme: "system",
//     fontSize: "medium",
//     language: "en",
//   })

//   // Admin Settings State
//   const [adminSettings, setAdminSettings] = useState<AdminSettings>({
//     userManagement: true,
//     systemLogs: true,
//     databaseAccess: false,
//     apiKeyManagement: true,
//     maintenanceMode: false,
//   })

//   // Feedback Modal State
//   const [feedbackOpen, setFeedbackOpen] = useState(false)
//   const [feedback, setFeedback] = useState("")

//   // Role switching for demo purposes
//   const [roleSwitch, setRoleSwitch] = useState(userProfile.role)

//   // Theme management
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme")
//     if (savedTheme === "dark") {
//       setDarkMode(true)
//       document.documentElement.classList.add("dark")
//     }
//   }, [])

//   // Update user role and permissions when role switch changes
//   useEffect(() => {
//     setUserProfile((prev) => ({
//       ...prev,
//       role: roleSwitch,
//       permissions: roleSwitch === "admin" ? ["read", "write", "admin"] : ["read", "write"],
//     }))

//     // Update notifications based on role
//     if (roleSwitch === "admin") {
//       setNotifications((prev) => ({
//         ...prev,
//         adminAlerts: true,
//         systemNotifications: true,
//       }))
//     } else {
//       setNotifications((prev) => {
//         const { adminAlerts, systemNotifications, ...userNotifications } = prev
//         return userNotifications
//       })
//     }

//     // Reset to profile tab when switching roles
//     setActiveTab("profile")
//   }, [roleSwitch])

//   // Check if user is admin
//   const isAdmin = userProfile.role === "admin"

//   // Password validation
//   const validatePassword = (password: string) => {
//     const minLength = password.length >= 8
//     const hasUpper = /[A-Z]/.test(password)
//     const hasLower = /[a-z]/.test(password)
//     const hasNumber = /\d/.test(password)
//     const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)

//     return {
//       minLength,
//       hasUpper,
//       hasLower,
//       hasNumber,
//       hasSpecial,
//       isValid: minLength && hasUpper && hasLower && hasNumber && hasSpecial,
//     }
//   }

//   const passwordValidation = validatePassword(passwordData.newPassword)

//   // Handlers
//   const handleRoleSwitch = (newRole: "admin" | "user") => {
//     setRoleSwitch(newRole)
//     toast({
//       title: "Role Switched",
//       description: `Switched to ${newRole} view. This is for demo purposes only.`,
//     })
//   }

//   const handleProfileUpdate = async () => {
//     setIsLoading(true)
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     setIsLoading(false)
//     toast({
//       title: "Profile Updated",
//       description: "Your profile information has been saved successfully.",
//     })
//   }

//   const handlePasswordChange = async () => {
//     if (!passwordValidation.isValid) {
//       toast({
//         title: "Invalid Password",
//         description: "Please ensure your password meets all requirements.",
//         variant: "destructive",
//       })
//       return
//     }

//     if (passwordData.newPassword !== passwordData.confirmPassword) {
//       toast({
//         title: "Passwords Don't Match",
//         description: "New password and confirmation password must match.",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     setIsLoading(false)
//     setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
//     toast({
//       title: "Password Changed",
//       description: "Your password has been updated successfully.",
//     })
//   }

//   const handleDeleteAccount = async () => {
//     if (deleteConfirmation !== userProfile.email) {
//       toast({
//         title: "Confirmation Failed",
//         description: "Please enter your email address to confirm account deletion.",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     setIsLoading(false)
//     toast({
//       title: "Account Deleted",
//       description: "Your account has been permanently deleted.",
//       variant: "destructive",
//     })
//   }

//   const handleNotificationUpdate = async () => {
//     setIsLoading(true)
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     setIsLoading(false)
//     toast({
//       title: "Preferences Updated",
//       description: "Your notification preferences have been saved.",
//     })
//   }

//   const handleAppearanceUpdate = async () => {
//     setIsLoading(true)
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     setIsLoading(false)
//     toast({
//       title: "Appearance Updated",
//       description: "Your appearance preferences have been saved.",
//     })
//   }

//   const handleAdminSettingsUpdate = async () => {
//     setIsLoading(true)
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     setIsLoading(false)
//     toast({
//       title: "Admin Settings Updated",
//       description: "Administrative settings have been saved successfully.",
//     })
//   }

//   const handleSendFeedback = async () => {
//     if (!feedback.trim()) {
//       toast({
//         title: "Feedback Required",
//         description: "Please enter your feedback before sending.",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     setIsLoading(false)
//     setFeedback("")
//     setFeedbackOpen(false)
//     toast({
//       title: "Feedback Sent",
//       description: "Thank you for your feedback! We'll review it shortly.",
//     })
//   }

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text)
//     toast({
//       title: "Copied!",
//       description: "Email address copied to clipboard.",
//     })
//   }

//   return (
//     <div className={cn("flex h-screen", darkMode ? "dark bg-gray-900" : "bg-gray-50")}>
//       {/* Sidebar */}
//       <AppSidebar
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//         darkMode={darkMode}
//         setDarkMode={setDarkMode}
//       />

//       {/* Main Content */}
//       <div className="flex-1 overflow-hidden flex flex-col">
//         {/* Header */}
//         <AppHeader sidebarOpen={sidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />

//         {/* Page Content */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="max-w-5xl mx-auto px-6 py-8">
//             {/* Page Header */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="flex items-center gap-2 mb-4">
//                     <SettingsIcon className="h-8 w-8 text-gray-600" />
//                     <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
//                       Settings
//                     </h1>
//                     {isAdmin && (
//                       <Badge variant="secondary" className="bg-purple-100 text-purple-700">
//                         <Crown className="h-3 w-3 mr-1" />
//                         Admin
//                       </Badge>
//                     )}
//                   </div>
//                   <p className={cn("text-lg max-w-3xl", darkMode ? "text-gray-300" : "text-gray-600")}>
//                     Manage your account settings, preferences, and {isAdmin ? "administrative" : ""} security options.
//                   </p>
//                 </div>

//                 {/* Demo Role Switcher */}
//                 <div className="flex items-center gap-2">
//                   <Label htmlFor="roleSwitch" className="text-sm">
//                     Demo Role:
//                   </Label>
//                   <Select value={roleSwitch} onValueChange={handleRoleSwitch}>
//                     <SelectTrigger className="w-32">
//                       <SelectValue />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="admin">
//                         <div className="flex items-center gap-2">
//                           <Crown className="h-3 w-3" />
//                           Admin
//                         </div>
//                       </SelectItem>
//                       <SelectItem value="user">
//                         <div className="flex items-center gap-2">
//                           <User className="h-3 w-3" />
//                           User
//                         </div>
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//             </div>


//             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//               <TabsList
//                 className={cn(
//                   "grid w-full gap-2 mb-8",
//                   isAdmin ? "grid-cols-2 sm:grid-cols-5" : "grid-cols-2 sm:grid-cols-4",
//                 )}
//               >
//                 <TabsTrigger value="profile" className="flex items-center gap-2">
//                   <User className="h-4 w-4" />
//                   Profile
//                 </TabsTrigger>

//                 <TabsTrigger value="security" className="flex items-center gap-2">
//                   <Lock className="h-4 w-4" />
//                   Security
//                 </TabsTrigger>
                
//                 <TabsTrigger value="preferences" className="flex items-center gap-2">
//                   <Bell className="h-4 w-4" />
//                   Preferences
//                 </TabsTrigger>
//                 {isAdmin && (
//                   <TabsTrigger value="admin" className="flex items-center gap-2">
//                     <Crown className="h-4 w-4" />
//                     Admin
//                   </TabsTrigger>
//                 )}
//                 <TabsTrigger value="support" className="flex items-center gap-2">
//                   <HelpCircle className="h-4 w-4" />
//                   Support
//                 </TabsTrigger>
//               </TabsList>


//               {/* Profile Tab */}
//               <TabsContent value="profile" className="space-y-6">
//                 {/* User Info Display */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <User className="h-5 w-5" />
//                       User Information
//                     </CardTitle>
//                     <CardDescription>Your account details and basic information</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="flex items-center gap-4">
//                       <Avatar className="h-16 w-16">
//                         <AvatarImage src={userProfile.avatarUrl || "/placeholder.svg"} />
//                         <AvatarFallback>{userProfile.fullName.charAt(0)}</AvatarFallback>
//                       </Avatar>
//                       <div className="space-y-1">
//                         <div className="flex items-center gap-2">
//                           <p className={cn("font-medium", darkMode ? "text-gray-100" : "text-gray-900")}>
//                             @{userProfile.username}
//                           </p>
//                           <Badge variant={isAdmin ? "default" : "secondary"} className={isAdmin ? "bg-purple-600" : ""}>
//                             {isAdmin ? (
//                               <>
//                                 <Crown className="h-3 w-3 mr-1" />
//                                 Administrator
//                               </>
//                             ) : (
//                               <>
//                                 <UserCheck className="h-3 w-3 mr-1" />
//                                 User
//                               </>
//                             )}
//                           </Badge>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <p className={cn("text-sm", darkMode ? "text-gray-300" : "text-gray-600")}>
//                             {userProfile.email}
//                           </p>
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={() => copyToClipboard(userProfile.email)}
//                             className="h-6 w-6 p-0"
//                           >
//                             <Copy className="h-3 w-3" />
//                           </Button>
//                         </div>
//                         {isAdmin && (
//                           <div className="flex flex-wrap gap-1 mt-2">
//                             {userProfile.permissions.map((permission) => (
//                               <Badge key={permission} variant="outline" className="text-xs">
//                                 {permission}
//                               </Badge>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Edit Profile */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle>Edit Profile</CardTitle>
//                     <CardDescription>Update your personal information and profile details</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <Label htmlFor="fullName">Full Name</Label>
//                         <Input
//                           id="fullName"
//                           value={userProfile.fullName}
//                           onChange={(e) => setUserProfile((prev) => ({ ...prev, fullName: e.target.value }))}
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="displayName">Display Name</Label>
//                         <Input
//                           id="displayName"
//                           value={userProfile.displayName}
//                           onChange={(e) => setUserProfile((prev) => ({ ...prev, displayName: e.target.value }))}
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="avatarUrl">Profile Photo URL</Label>
//                       <div className="flex gap-2">
//                         <Input
//                           id="avatarUrl"
//                           placeholder="https://example.com/avatar.jpg"
//                           value={userProfile.avatarUrl}
//                           onChange={(e) => setUserProfile((prev) => ({ ...prev, avatarUrl: e.target.value }))}
//                         />
//                         <Button variant="outline" size="icon">
//                           <Upload className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>

//                     <Button onClick={handleProfileUpdate} disabled={isLoading}>
//                       <Save className="h-4 w-4 mr-2" />
//                       {isLoading ? "Saving..." : "Save Changes"}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* Security Tab */}
//               <TabsContent value="security" className="space-y-6">
//                 {/* Change Password */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Lock className="h-5 w-5" />
//                       Change Password
//                     </CardTitle>
//                     <CardDescription>Update your account password for better security</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div className="space-y-2">
//                       <Label htmlFor="currentPassword">Current Password</Label>
//                       <div className="relative">
//                         <Input
//                           id="currentPassword"
//                           type={showPasswords.current ? "text" : "password"}
//                           value={passwordData.currentPassword}
//                           onChange={(e) => setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))}
//                         />
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="absolute right-0 top-0 h-full px-3"
//                           onClick={() => setShowPasswords((prev) => ({ ...prev, current: !prev.current }))}
//                         >
//                           {showPasswords.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                         </Button>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="newPassword">New Password</Label>
//                       <div className="relative">
//                         <Input
//                           id="newPassword"
//                           type={showPasswords.new ? "text" : "password"}
//                           value={passwordData.newPassword}
//                           onChange={(e) => setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
//                         />
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="absolute right-0 top-0 h-full px-3"
//                           onClick={() => setShowPasswords((prev) => ({ ...prev, new: !prev.new }))}
//                         >
//                           {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                         </Button>
//                       </div>

//                       {/* Password Requirements */}
//                       {passwordData.newPassword && (
//                         <div className="space-y-2 mt-3">
//                           <p className="text-sm font-medium">Password Requirements:</p>
//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.minLength ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>At least 8 characters</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.hasUpper ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>Uppercase letter</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.hasLower ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>Lowercase letter</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.hasNumber ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>Number</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               {passwordValidation.hasSpecial ? (
//                                 <Check className="h-3 w-3 text-green-500" />
//                               ) : (
//                                 <X className="h-3 w-3 text-red-500" />
//                               )}
//                               <span>Special character</span>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="confirmPassword">Confirm New Password</Label>
//                       <div className="relative">
//                         <Input
//                           id="confirmPassword"
//                           type={showPasswords.confirm ? "text" : "password"}
//                           value={passwordData.confirmPassword}
//                           onChange={(e) => setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
//                         />
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="absolute right-0 top-0 h-full px-3"
//                           onClick={() => setShowPasswords((prev) => ({ ...prev, confirm: !prev.confirm }))}
//                         >
//                           {showPasswords.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                         </Button>
//                       </div>
//                       {passwordData.confirmPassword && passwordData.newPassword !== passwordData.confirmPassword && (
//                         <p className="text-sm text-red-500">Passwords do not match</p>
//                       )}
//                     </div>

//                     <Button onClick={handlePasswordChange} disabled={isLoading || !passwordValidation.isValid}>
//                       <Lock className="h-4 w-4 mr-2" />
//                       {isLoading ? "Updating..." : "Update Password"}
//                     </Button>
//                   </CardContent>
//                 </Card>

//                 {/* Two-Factor Authentication */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Shield className="h-5 w-5" />
//                       Two-Factor Authentication
//                     </CardTitle>
//                     <CardDescription>Add an extra layer of security to your account</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex items-center justify-between p-4 border rounded-lg">
//                       <div className="space-y-1">
//                         <p className="font-medium">Enable 2FA</p>
//                         <p className="text-sm text-gray-500">Secure your account with two-factor authentication</p>
//                       </div>
//                       <Badge variant="outline" className="text-orange-600 border-orange-600">
//                         Coming Soon
//                       </Badge>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Delete Account - Only show for regular users or with admin warning */}
//                 <Card className={cn("border-red-200", darkMode ? "bg-red-950 border-red-800" : "bg-red-50")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2 text-red-600">
//                       <Trash2 className="h-5 w-5" />
//                       Delete Account
//                     </CardTitle>
//                     <CardDescription>
//                       {isAdmin
//                         ? "⚠️ Warning: Deleting an admin account will remove all administrative privileges and access."
//                         : "Permanently delete your account and all associated data. This action cannot be undone."}
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <AlertDialog>
//                       <AlertDialogTrigger asChild>
//                         <Button variant="destructive">
//                           <Trash2 className="h-4 w-4 mr-2" />
//                           Delete Account
//                         </Button>
//                       </AlertDialogTrigger>
//                       <AlertDialogContent>
//                         <AlertDialogHeader>
//                           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                           <AlertDialogDescription>
//                             {isAdmin && (
//                               <div className="mb-4 p-3 bg-orange-100 border border-orange-300 rounded-lg">
//                                 <p className="text-orange-800 font-medium">⚠️ Admin Account Warning</p>
//                                 <p className="text-orange-700 text-sm">
//                                   You are about to delete an administrator account. This will permanently remove all
//                                   administrative privileges.
//                                 </p>
//                               </div>
//                             )}
//                             This action cannot be undone. This will permanently delete your account and remove all your
//                             data from our servers.
//                           </AlertDialogDescription>
//                         </AlertDialogHeader>
//                         <div className="space-y-2">
//                           <Label htmlFor="deleteConfirmation">
//                             Type your email address to confirm: <strong>{userProfile.email}</strong>
//                           </Label>
//                           <Input
//                             id="deleteConfirmation"
//                             value={deleteConfirmation}
//                             onChange={(e) => setDeleteConfirmation(e.target.value)}
//                             placeholder="Enter your email address"
//                           />
//                         </div>
//                         <AlertDialogFooter>
//                           <AlertDialogCancel onClick={() => setDeleteConfirmation("")}>Cancel</AlertDialogCancel>
//                           <AlertDialogAction
//                             onClick={handleDeleteAccount}
//                             disabled={deleteConfirmation !== userProfile.email || isLoading}
//                             className="bg-red-600 hover:bg-red-700"
//                           >
//                             {isLoading ? "Deleting..." : "Delete Account"}
//                           </AlertDialogAction>
//                         </AlertDialogFooter>
//                       </AlertDialogContent>
//                     </AlertDialog>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* Preferences Tab */}
//               <TabsContent value="preferences" className="space-y-6">
//                 {/* Appearance Settings */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Palette className="h-5 w-5" />
//                       Appearance
//                     </CardTitle>
//                     <CardDescription>Customize how the application looks and feels</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-2">
//                         <Label htmlFor="theme">Theme</Label>
//                         <Select
//                           value={appearance.theme}
//                           onValueChange={(value: "light" | "dark" | "system") =>
//                             setAppearance((prev) => ({ ...prev, theme: value }))
//                           }
//                         >
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="light">Light</SelectItem>
//                             <SelectItem value="dark">Dark</SelectItem>
//                             <SelectItem value="system">System</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="fontSize">Font Size</Label>
//                         <Select
//                           value={appearance.fontSize}
//                           onValueChange={(value: "small" | "medium" | "large") =>
//                             setAppearance((prev) => ({ ...prev, fontSize: value }))
//                           }
//                         >
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="small">Small</SelectItem>
//                             <SelectItem value="medium">Medium</SelectItem>
//                             <SelectItem value="large">Large</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="language">Language</Label>
//                       <Select
//                         value={appearance.language}
//                         onValueChange={(value) => setAppearance((prev) => ({ ...prev, language: value }))}
//                       >
//                         <SelectTrigger className="w-full md:w-1/2">
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="en">English</SelectItem>
//                           <SelectItem value="es">Español</SelectItem>
//                           <SelectItem value="fr">Français</SelectItem>
//                           <SelectItem value="de">Deutsch</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     <Button onClick={handleAppearanceUpdate} disabled={isLoading}>
//                       <Save className="h-4 w-4 mr-2" />
//                       {isLoading ? "Saving..." : "Save Appearance"}
//                     </Button>
//                   </CardContent>
//                 </Card>

//                 {/* Notification Preferences */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Bell className="h-5 w-5" />
//                       Notifications
//                     </CardTitle>
//                     <CardDescription>Manage how you receive notifications and updates</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div className="space-y-4">
//                       <div className="flex items-center justify-between p-4 border rounded-lg">
//                         <div className="space-y-1">
//                           <Label htmlFor="emailNotifications">Email Notifications</Label>
//                           <p className="text-sm text-gray-500">Receive important updates via email</p>
//                         </div>
//                         <Switch
//                           id="emailNotifications"
//                           checked={notifications.emailNotifications}
//                           onCheckedChange={(checked) =>
//                             setNotifications((prev) => ({ ...prev, emailNotifications: checked }))
//                           }
//                         />
//                       </div>

//                       <div className="flex items-center justify-between p-4 border rounded-lg">
//                         <div className="space-y-1">
//                           <Label htmlFor="appAlerts">App Alerts</Label>
//                           <p className="text-sm text-gray-500">Show notifications within the application</p>
//                         </div>
//                         <Switch
//                           id="appAlerts"
//                           checked={notifications.appAlerts}
//                           onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, appAlerts: checked }))}
//                         />
//                       </div>

//                       <div className="flex items-center justify-between p-4 border rounded-lg">
//                         <div className="space-y-1">
//                           <Label htmlFor="newsletter">Newsletter</Label>
//                           <p className="text-sm text-gray-500">Receive our weekly newsletter and updates</p>
//                         </div>
//                         <Switch
//                           id="newsletter"
//                           checked={notifications.newsletter}
//                           onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, newsletter: checked }))}
//                         />
//                       </div>

//                       <div className="flex items-center justify-between p-4 border rounded-lg">
//                         <div className="space-y-1">
//                           <Label htmlFor="securityAlerts">Security Alerts</Label>
//                           <p className="text-sm text-gray-500">Important security notifications (recommended)</p>
//                         </div>
//                         <Switch
//                           id="securityAlerts"
//                           checked={notifications.securityAlerts}
//                           onCheckedChange={(checked) =>
//                             setNotifications((prev) => ({ ...prev, securityAlerts: checked }))
//                           }
//                         />
//                       </div>

//                       {/* Admin-only notification settings */}
//                       {isAdmin && (
//                         <>
//                           <div className="flex items-center justify-between p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
//                             <div className="space-y-1">
//                               <Label htmlFor="adminAlerts" className="flex items-center gap-2">
//                                 <Crown className="h-4 w-4 text-purple-600" />
//                                 Admin Alerts
//                               </Label>
//                               <p className="text-sm text-gray-500">Administrative notifications and alerts</p>
//                             </div>
//                             <Switch
//                               id="adminAlerts"
//                               checked={notifications.adminAlerts || false}
//                               onCheckedChange={(checked) =>
//                                 setNotifications((prev) => ({ ...prev, adminAlerts: checked }))
//                               }
//                             />
//                           </div>

//                           <div className="flex items-center justify-between p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
//                             <div className="space-y-1">
//                               <Label htmlFor="systemNotifications" className="flex items-center gap-2">
//                                 <Activity className="h-4 w-4 text-purple-600" />
//                                 System Notifications
//                               </Label>
//                               <p className="text-sm text-gray-500">System status and maintenance notifications</p>
//                             </div>
//                             <Switch
//                               id="systemNotifications"
//                               checked={notifications.systemNotifications || false}
//                               onCheckedChange={(checked) =>
//                                 setNotifications((prev) => ({ ...prev, systemNotifications: checked }))
//                               }
//                             />
//                           </div>
//                         </>
//                       )}
//                     </div>

//                     <Button onClick={handleNotificationUpdate} disabled={isLoading}>
//                       <Save className="h-4 w-4 mr-2" />
//                       {isLoading ? "Saving..." : "Save Preferences"}
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* Admin Tab - Only visible to admins */}
//               {isAdmin && (
//                 <TabsContent value="admin" className="space-y-6">
//                   {/* Admin Privileges */}
//                   <Card
//                     className={cn("border-purple-200", darkMode ? "bg-purple-950 border-purple-800" : "bg-purple-50")}
//                   >
//                     <CardHeader>
//                       <CardTitle className="flex items-center gap-2 text-purple-600">
//                         <Crown className="h-5 w-5" />
//                         Administrative Settings
//                       </CardTitle>
//                       <CardDescription>
//                         Configure system-wide settings and administrative privileges. These settings affect all users.
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-6">
//                       <div className="space-y-4">
//                         <div className="flex items-center justify-between p-4 border rounded-lg">
//                           <div className="space-y-1">
//                             <Label htmlFor="userManagement" className="flex items-center gap-2">
//                               <Users className="h-4 w-4" />
//                               User Management
//                             </Label>
//                             <p className="text-sm text-gray-500">Access to user accounts and permissions</p>
//                           </div>
//                           <Switch
//                             id="userManagement"
//                             checked={adminSettings.userManagement}
//                             onCheckedChange={(checked) =>
//                               setAdminSettings((prev) => ({ ...prev, userManagement: checked }))
//                             }
//                           />
//                         </div>

//                         <div className="flex items-center justify-between p-4 border rounded-lg">
//                           <div className="space-y-1">
//                             <Label htmlFor="systemLogs" className="flex items-center gap-2">
//                               <Activity className="h-4 w-4" />
//                               System Logs
//                             </Label>
//                             <p className="text-sm text-gray-500">View and manage system activity logs</p>
//                           </div>
//                           <Switch
//                             id="systemLogs"
//                             checked={adminSettings.systemLogs}
//                             onCheckedChange={(checked) =>
//                               setAdminSettings((prev) => ({ ...prev, systemLogs: checked }))
//                             }
//                           />
//                         </div>

//                         <div className="flex items-center justify-between p-4 border rounded-lg">
//                           <div className="space-y-1">
//                             <Label htmlFor="databaseAccess" className="flex items-center gap-2">
//                               <Database className="h-4 w-4" />
//                               Database Access
//                             </Label>
//                             <p className="text-sm text-gray-500">Direct database management capabilities</p>
//                           </div>
//                           <Switch
//                             id="databaseAccess"
//                             checked={adminSettings.databaseAccess}
//                             onCheckedChange={(checked) =>
//                               setAdminSettings((prev) => ({ ...prev, databaseAccess: checked }))
//                             }
//                           />
//                         </div>

//                         <div className="flex items-center justify-between p-4 border rounded-lg">
//                           <div className="space-y-1">
//                             <Label htmlFor="apiKeyManagement" className="flex items-center gap-2">
//                               <Key className="h-4 w-4" />
//                               API Key Management
//                             </Label>
//                             <p className="text-sm text-gray-500">Generate and manage system API keys</p>
//                           </div>
//                           <Switch
//                             id="apiKeyManagement"
//                             checked={adminSettings.apiKeyManagement}
//                             onCheckedChange={(checked) =>
//                               setAdminSettings((prev) => ({ ...prev, apiKeyManagement: checked }))
//                             }
//                           />
//                         </div>

//                         <div className="flex items-center justify-between p-4 border rounded-lg border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
//                           <div className="space-y-1">
//                             <Label htmlFor="maintenanceMode" className="flex items-center gap-2 text-orange-700">
//                               <Shield className="h-4 w-4" />
//                               Maintenance Mode
//                             </Label>
//                             <p className="text-sm text-orange-600">Enable system-wide maintenance mode</p>
//                           </div>
//                           <Switch
//                             id="maintenanceMode"
//                             checked={adminSettings.maintenanceMode}
//                             onCheckedChange={(checked) =>
//                               setAdminSettings((prev) => ({ ...prev, maintenanceMode: checked }))
//                             }
//                           />
//                         </div>
//                       </div>

//                       <Button
//                         onClick={handleAdminSettingsUpdate}
//                         disabled={isLoading}
//                         className="bg-purple-600 hover:bg-purple-700"
//                       >
//                         <Save className="h-4 w-4 mr-2" />
//                         {isLoading ? "Saving..." : "Save Admin Settings"}
//                       </Button>
//                     </CardContent>
//                   </Card>

//                   {/* System Information - Admin Only */}
//                   <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                     <CardHeader>
//                       <CardTitle>System Information</CardTitle>
//                       <CardDescription>System status and administrative details</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//                         <div className="space-y-2">
//                           <div className="flex justify-between">
//                             <span className="text-gray-500">Total Users:</span>
//                             <span>1,247</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-500">Active Sessions:</span>
//                             <span>89</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-500">System Uptime:</span>
//                             <span>99.9%</span>
//                           </div>
//                         </div>
//                         <div className="space-y-2">
//                           <div className="flex justify-between">
//                             <span className="text-gray-500">Database Size:</span>
//                             <span>2.4 GB</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-500">API Requests (24h):</span>
//                             <span>45,231</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-500">Last Backup:</span>
//                             <span>2 hours ago</span>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </TabsContent>
//               )}

//               {/* Support Tab */}
//               <TabsContent value="support" className="space-y-6">
//                 {/* Help & Support */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <HelpCircle className="h-5 w-5" />
//                       Help & Support
//                     </CardTitle>
//                     <CardDescription>Get help and contact our support team</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Globe className="h-4 w-4" />
//                           <span className="font-medium">Documentation</span>
//                         </div>
//                         <p className="text-sm text-gray-500 text-left">Browse our comprehensive guides and tutorials</p>
//                       </Button>

//                       <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Mail className="h-4 w-4" />
//                           <span className="font-medium">{isAdmin ? "Priority Support" : "Contact Support"}</span>
//                         </div>
//                         <p className="text-sm text-gray-500 text-left">
//                           {isAdmin ? "Get priority support as an administrator" : "Get in touch with our support team"}
//                         </p>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Send Feedback */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <MessageSquare className="h-5 w-5" />
//                       Send Feedback
//                     </CardTitle>
//                     <CardDescription>Help us improve by sharing your thoughts and suggestions</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
//                       <DialogTrigger asChild>
//                         <Button>
//                           <MessageSquare className="h-4 w-4 mr-2" />
//                           Send Feedback
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent>
//                         <DialogHeader>
//                           <DialogTitle>Send Feedback</DialogTitle>
//                           <DialogDescription>
//                             We'd love to hear your thoughts, suggestions, or report any issues you've encountered.
//                             {isAdmin && " As an admin, your feedback helps us improve the platform for everyone."}
//                           </DialogDescription>
//                         </DialogHeader>
//                         <div className="space-y-4">
//                           <div className="space-y-2">
//                             <Label htmlFor="feedback">Your Feedback</Label>
//                             <Textarea
//                               id="feedback"
//                               placeholder="Tell us what you think..."
//                               rows={5}
//                               value={feedback}
//                               onChange={(e) => setFeedback(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                         <DialogFooter>
//                           <Button variant="outline" onClick={() => setFeedbackOpen(false)}>
//                             Cancel
//                           </Button>
//                           <Button onClick={handleSendFeedback} disabled={isLoading}>
//                             {isLoading ? "Sending..." : "Send Feedback"}
//                           </Button>
//                         </DialogFooter>
//                       </DialogContent>
//                     </Dialog>
//                   </CardContent>
//                 </Card>

//                 {/* App Information */}
//                 <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
//                   <CardHeader>
//                     <CardTitle>Application Information</CardTitle>
//                     <CardDescription>Version and system details</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span className="text-gray-500">Version:</span>
//                         <span>1.0.0</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-500">Last Updated:</span>
//                         <span>December 2024</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-500">Build:</span>
//                         <span>2024.12.001</span>
//                       </div>
//                       {isAdmin && (
//                         <>
//                           <div className="flex justify-between">
//                             <span className="text-gray-500">Environment:</span>
//                             <span>Production</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-500">Server:</span>
//                             <span>AWS us-east-1</span>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
















"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  User,
  Lock,
  Trash2,
  Copy,
  Save,
  Eye,
  EyeOff,
  Upload,
  Mail,
  Bell,
  HelpCircle,
  Shield,
  Palette,
  Globe,
  MessageSquare,
  Check,
  X,
  SettingsIcon,
  Crown,
  Users,
  Database,
  Activity,
  Key,
  UserCheck,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"

interface UserProfile {
  username: string
  email: string
  fullName: string
  displayName: string
  avatarUrl: string
  role: "admin" | "user"
  permissions: string[]
}

interface NotificationSettings {
  emailNotifications: boolean
  appAlerts: boolean
  newsletter: boolean
  securityAlerts: boolean
  adminAlerts?: boolean // Admin only
  systemNotifications?: boolean // Admin only
}

interface AppearanceSettings {
  theme: "light" | "dark" | "system"
  fontSize: "small" | "medium" | "large"
  language: string
}

interface AdminSettings {
  userManagement: boolean
  systemLogs: boolean
  databaseAccess: boolean
  apiKeyManagement: boolean
  maintenanceMode: boolean
}

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const [isLoading, setIsLoading] = useState(false)

  // User Profile State with role
  const [userProfile, setUserProfile] = useState<UserProfile>({
    username: "johndoe",
    email: "john.doe@example.com",
    fullName: "John Doe",
    displayName: "John",
    avatarUrl: "/placeholder.svg?height=80&width=80",
    role: "admin", // Change this to "user" to test regular user view
    permissions: ["read", "write", "admin"],
  })

  // Password Change State
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  // Delete Account State
  const [deleteConfirmation, setDeleteConfirmation] = useState("")

  // Notification Settings State (with admin-specific options)
  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    appAlerts: true,
    newsletter: false,
    securityAlerts: true,
    ...(userProfile.role === "admin" && {
      adminAlerts: true,
      systemNotifications: true,
    }),
  })

  // Appearance Settings State
  const [appearance, setAppearance] = useState<AppearanceSettings>({
    theme: "system",
    fontSize: "medium",
    language: "en",
  })

  // Admin Settings State
  const [adminSettings, setAdminSettings] = useState<AdminSettings>({
    userManagement: true,
    systemLogs: true,
    databaseAccess: false,
    apiKeyManagement: true,
    maintenanceMode: false,
  })

  // Feedback Modal State
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [feedback, setFeedback] = useState("")

  // Role switching for demo purposes
  const [roleSwitch, setRoleSwitch] = useState(userProfile.role)

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Update user role and permissions when role switch changes
  useEffect(() => {
    setUserProfile((prev) => ({
      ...prev,
      role: roleSwitch,
      permissions: roleSwitch === "admin" ? ["read", "write", "admin"] : ["read", "write"],
    }))

    // Update notifications based on role
    if (roleSwitch === "admin") {
      setNotifications((prev) => ({
        ...prev,
        adminAlerts: true,
        systemNotifications: true,
      }))
    } else {
      setNotifications((prev) => {
        const { adminAlerts, systemNotifications, ...userNotifications } = prev
        return userNotifications
      })
    }

    // Reset to profile tab when switching roles
    setActiveTab("profile")
  }, [roleSwitch])

  // Check if user is admin
  const isAdmin = userProfile.role === "admin"

  // Password validation
  const validatePassword = (password: string) => {
    const minLength = password.length >= 8
    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    return {
      minLength,
      hasUpper,
      hasLower,
      hasNumber,
      hasSpecial,
      isValid: minLength && hasUpper && hasLower && hasNumber && hasSpecial,
    }
  }

  const passwordValidation = validatePassword(passwordData.newPassword)

  // Handlers
  const handleRoleSwitch = (newRole: "admin" | "user") => {
    setRoleSwitch(newRole)
    toast({
      title: "Role Switched",
      description: `Switched to ${newRole} view. This is for demo purposes only.`,
    })
  }

  const handleProfileUpdate = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    })
  }

  const handlePasswordChange = async () => {
    if (!passwordValidation.isValid) {
      toast({
        title: "Invalid Password",
        description: "Please ensure your password meets all requirements.",
        variant: "destructive",
      })
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Passwords Don't Match",
        description: "New password and confirmation password must match.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
    toast({
      title: "Password Changed",
      description: "Your password has been updated successfully.",
    })
  }

  const handleDeleteAccount = async () => {
    if (deleteConfirmation !== userProfile.email) {
      toast({
        title: "Confirmation Failed",
        description: "Please enter your email address to confirm account deletion.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    toast({
      title: "Account Deleted",
      description: "Your account has been permanently deleted.",
      variant: "destructive",
    })
  }

  const handleNotificationUpdate = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsLoading(false)
    toast({
      title: "Preferences Updated",
      description: "Your notification preferences have been saved.",
    })
  }

  const handleAppearanceUpdate = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsLoading(false)
    toast({
      title: "Appearance Updated",
      description: "Your appearance preferences have been saved.",
    })
  }

  const handleAdminSettingsUpdate = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsLoading(false)
    toast({
      title: "Admin Settings Updated",
      description: "Administrative settings have been saved successfully.",
    })
  }

  const handleSendFeedback = async () => {
    if (!feedback.trim()) {
      toast({
        title: "Feedback Required",
        description: "Please enter your feedback before sending.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setFeedback("")
    setFeedbackOpen(false)
    toast({
      title: "Feedback Sent",
      description: "Thank you for your feedback! We'll review it shortly.",
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Email address copied to clipboard.",
    })
  }

  return (
    <div className={cn("flex h-screen", darkMode ? "dark bg-gray-900" : "bg-gray-50")}>
      {/* Sidebar */}
      <AppSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <AppHeader sidebarOpen={sidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <SettingsIcon className="h-8 w-8 text-gray-600" />
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                    Settings
                  </h1>
                  {isAdmin && (
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      <Crown className="h-3 w-3 mr-1" />
                      Admin
                    </Badge>
                  )}
                </div>
                <p className={cn("text-lg max-w-3xl mb-4", darkMode ? "text-gray-300" : "text-gray-600")}>
                  Manage your account settings, preferences, and {isAdmin ? "administrative" : ""} security options.
                </p>

                {/* Demo Role Switcher */}
                <div className="flex items-center gap-2">
                  <Label htmlFor="roleSwitch" className="text-sm">
                    Demo Role:
                  </Label>
                  <Select value={roleSwitch} onValueChange={handleRoleSwitch}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">
                        <div className="flex items-center gap-2">
                          <Crown className="h-3 w-3" />
                          Admin
                        </div>
                      </SelectItem>
                      <SelectItem value="user">
                        <div className="flex items-center gap-2">
                          <User className="h-3 w-3" />
                          User
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList
                className={cn(
                  "grid w-full gap-2 mt-2 mb-48 sm:mt-2 sm:mb-8",
                  isAdmin ? "grid-cols-1 sm:grid-cols-5" : "grid-cols-1 sm:grid-cols-4",
                )}
              >
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Security
                </TabsTrigger>
                <TabsTrigger value="preferences" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Preferences
                </TabsTrigger>
                {isAdmin && (
                  <TabsTrigger value="admin" className="flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    Admin
                  </TabsTrigger>
                )}
                <TabsTrigger value="support" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Support
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                {/* User Info Display */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      User Information
                    </CardTitle>
                    <CardDescription>Your account details and basic information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={userProfile.avatarUrl || "/placeholder.svg"} />
                        <AvatarFallback>{userProfile.fullName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className={cn("font-medium", darkMode ? "text-gray-100" : "text-gray-900")}>
                            @{userProfile.username}
                          </p>
                          <Badge variant={isAdmin ? "default" : "secondary"} className={isAdmin ? "bg-purple-600" : ""}>
                            {isAdmin ? (
                              <>
                                <Crown className="h-3 w-3 mr-1" />
                                Administrator
                              </>
                            ) : (
                              <>
                                <UserCheck className="h-3 w-3 mr-1" />
                                User
                              </>
                            )}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className={cn("text-sm", darkMode ? "text-gray-300" : "text-gray-600")}>
                            {userProfile.email}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(userProfile.email)}
                            className="h-6 w-6 p-0"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                        {isAdmin && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {userProfile.permissions.map((permission) => (
                              <Badge key={permission} variant="outline" className="text-xs">
                                {permission}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Edit Profile */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                    <CardDescription>Update your personal information and profile details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          value={userProfile.fullName}
                          onChange={(e) => setUserProfile((prev) => ({ ...prev, fullName: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="displayName">Display Name</Label>
                        <Input
                          id="displayName"
                          value={userProfile.displayName}
                          onChange={(e) => setUserProfile((prev) => ({ ...prev, displayName: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="avatarUrl">Profile Photo URL</Label>
                      <div className="flex gap-2">
                        <Input
                          id="avatarUrl"
                          placeholder="https://example.com/avatar.jpg"
                          value={userProfile.avatarUrl}
                          onChange={(e) => setUserProfile((prev) => ({ ...prev, avatarUrl: e.target.value }))}
                        />
                        <Button variant="outline" size="icon">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <Button onClick={handleProfileUpdate} disabled={isLoading}>
                      <Save className="h-4 w-4 mr-2" />
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                {/* Change Password */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      Change Password
                    </CardTitle>
                    <CardDescription>Update your account password for better security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          type={showPasswords.current ? "text" : "password"}
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData((prev) => ({ ...prev, currentPassword: e.target.value }))}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPasswords((prev) => ({ ...prev, current: !prev.current }))}
                        >
                          {showPasswords.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type={showPasswords.new ? "text" : "password"}
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData((prev) => ({ ...prev, newPassword: e.target.value }))}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPasswords((prev) => ({ ...prev, new: !prev.new }))}
                        >
                          {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>

                      {/* Password Requirements */}
                      {passwordData.newPassword && (
                        <div className="space-y-2 mt-3">
                          <p className="text-sm font-medium">Password Requirements:</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2">
                              {passwordValidation.minLength ? (
                                <Check className="h-3 w-3 text-green-500" />
                              ) : (
                                <X className="h-3 w-3 text-red-500" />
                              )}
                              <span>At least 8 characters</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {passwordValidation.hasUpper ? (
                                <Check className="h-3 w-3 text-green-500" />
                              ) : (
                                <X className="h-3 w-3 text-red-500" />
                              )}
                              <span>Uppercase letter</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {passwordValidation.hasLower ? (
                                <Check className="h-3 w-3 text-green-500" />
                              ) : (
                                <X className="h-3 w-3 text-red-500" />
                              )}
                              <span>Lowercase letter</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {passwordValidation.hasNumber ? (
                                <Check className="h-3 w-3 text-green-500" />
                              ) : (
                                <X className="h-3 w-3 text-red-500" />
                              )}
                              <span>Number</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {passwordValidation.hasSpecial ? (
                                <Check className="h-3 w-3 text-green-500" />
                              ) : (
                                <X className="h-3 w-3 text-red-500" />
                              )}
                              <span>Special character</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showPasswords.confirm ? "text" : "password"}
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPasswords((prev) => ({ ...prev, confirm: !prev.confirm }))}
                        >
                          {showPasswords.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      {passwordData.confirmPassword && passwordData.newPassword !== passwordData.confirmPassword && (
                        <p className="text-sm text-red-500">Passwords do not match</p>
                      )}
                    </div>

                    <Button onClick={handlePasswordChange} disabled={isLoading || !passwordValidation.isValid}>
                      <Lock className="h-4 w-4 mr-2" />
                      {isLoading ? "Updating..." : "Update Password"}
                    </Button>
                  </CardContent>
                </Card>

                {/* Two-Factor Authentication */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Two-Factor Authentication
                    </CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">Enable 2FA</p>
                        <p className="text-sm text-gray-500">Secure your account with two-factor authentication</p>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        Coming Soon
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Delete Account - Only show for regular users or with admin warning */}
                <Card className={cn("border-red-200", darkMode ? "bg-red-950 border-red-800" : "bg-red-50")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <Trash2 className="h-5 w-5" />
                      Delete Account
                    </CardTitle>
                    <CardDescription>
                      {isAdmin
                        ? "⚠️ Warning: Deleting an admin account will remove all administrative privileges and access."
                        : "Permanently delete your account and all associated data. This action cannot be undone."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            {isAdmin && (
                              <div className="mb-4 p-3 bg-orange-100 border border-orange-300 rounded-lg">
                                <p className="text-orange-800 font-medium">⚠️ Admin Account Warning</p>
                                <p className="text-orange-700 text-sm">
                                  You are about to delete an administrator account. This will permanently remove all
                                  administrative privileges.
                                </p>
                              </div>
                            )}
                            This action cannot be undone. This will permanently delete your account and remove all your
                            data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div className="space-y-2">
                          <Label htmlFor="deleteConfirmation">
                            Type your email address to confirm: <strong>{userProfile.email}</strong>
                          </Label>
                          <Input
                            id="deleteConfirmation"
                            value={deleteConfirmation}
                            onChange={(e) => setDeleteConfirmation(e.target.value)}
                            placeholder="Enter your email address"
                          />
                        </div>
                        <AlertDialogFooter>
                          <AlertDialogCancel onClick={() => setDeleteConfirmation("")}>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={handleDeleteAccount}
                            disabled={deleteConfirmation !== userProfile.email || isLoading}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            {isLoading ? "Deleting..." : "Delete Account"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value="preferences" className="space-y-6">
                {/* Appearance Settings */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Appearance
                    </CardTitle>
                    <CardDescription>Customize how the application looks and feels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="theme">Theme</Label>
                        <Select
                          value={appearance.theme}
                          onValueChange={(value: "light" | "dark" | "system") =>
                            setAppearance((prev) => ({ ...prev, theme: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fontSize">Font Size</Label>
                        <Select
                          value={appearance.fontSize}
                          onValueChange={(value: "small" | "medium" | "large") =>
                            setAppearance((prev) => ({ ...prev, fontSize: value }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select
                        value={appearance.language}
                        onValueChange={(value) => setAppearance((prev) => ({ ...prev, language: value }))}
                      >
                        <SelectTrigger className="w-full md:w-1/2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button onClick={handleAppearanceUpdate} disabled={isLoading}>
                      <Save className="h-4 w-4 mr-2" />
                      {isLoading ? "Saving..." : "Save Appearance"}
                    </Button>
                  </CardContent>
                </Card>

                {/* Notification Preferences */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Notifications
                    </CardTitle>
                    <CardDescription>Manage how you receive notifications and updates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="emailNotifications">Email Notifications</Label>
                          <p className="text-sm text-gray-500">Receive important updates via email</p>
                        </div>
                        <Switch
                          id="emailNotifications"
                          checked={notifications.emailNotifications}
                          onCheckedChange={(checked) =>
                            setNotifications((prev) => ({ ...prev, emailNotifications: checked }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="appAlerts">App Alerts</Label>
                          <p className="text-sm text-gray-500">Show notifications within the application</p>
                        </div>
                        <Switch
                          id="appAlerts"
                          checked={notifications.appAlerts}
                          onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, appAlerts: checked }))}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="newsletter">Newsletter</Label>
                          <p className="text-sm text-gray-500">Receive our weekly newsletter and updates</p>
                        </div>
                        <Switch
                          id="newsletter"
                          checked={notifications.newsletter}
                          onCheckedChange={(checked) => setNotifications((prev) => ({ ...prev, newsletter: checked }))}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <Label htmlFor="securityAlerts">Security Alerts</Label>
                          <p className="text-sm text-gray-500">Important security notifications (recommended)</p>
                        </div>
                        <Switch
                          id="securityAlerts"
                          checked={notifications.securityAlerts}
                          onCheckedChange={(checked) =>
                            setNotifications((prev) => ({ ...prev, securityAlerts: checked }))
                          }
                        />
                      </div>

                      {/* Admin-only notification settings */}
                      {isAdmin && (
                        <>
                          <div className="flex items-center justify-between p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
                            <div className="space-y-1">
                              <Label htmlFor="adminAlerts" className="flex items-center gap-2">
                                <Crown className="h-4 w-4 text-purple-600" />
                                Admin Alerts
                              </Label>
                              <p className="text-sm text-gray-500">Administrative notifications and alerts</p>
                            </div>
                            <Switch
                              id="adminAlerts"
                              checked={notifications.adminAlerts || false}
                              onCheckedChange={(checked) =>
                                setNotifications((prev) => ({ ...prev, adminAlerts: checked }))
                              }
                            />
                          </div>

                          <div className="flex items-center justify-between p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
                            <div className="space-y-1">
                              <Label htmlFor="systemNotifications" className="flex items-center gap-2">
                                <Activity className="h-4 w-4 text-purple-600" />
                                System Notifications
                              </Label>
                              <p className="text-sm text-gray-500">System status and maintenance notifications</p>
                            </div>
                            <Switch
                              id="systemNotifications"
                              checked={notifications.systemNotifications || false}
                              onCheckedChange={(checked) =>
                                setNotifications((prev) => ({ ...prev, systemNotifications: checked }))
                              }
                            />
                          </div>
                        </>
                      )}
                    </div>

                    <Button onClick={handleNotificationUpdate} disabled={isLoading}>
                      <Save className="h-4 w-4 mr-2" />
                      {isLoading ? "Saving..." : "Save Preferences"}
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Admin Tab - Only visible to admins */}
              {isAdmin && (
                <TabsContent value="admin" className="space-y-6">
                  {/* Admin Privileges */}
                  <Card
                    className={cn("border-purple-200", darkMode ? "bg-purple-950 border-purple-800" : "bg-purple-50")}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-purple-600">
                        <Crown className="h-5 w-5" />
                        Administrative Settings
                      </CardTitle>
                      <CardDescription>
                        Configure system-wide settings and administrative privileges. These settings affect all users.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <Label htmlFor="userManagement" className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              User Management
                            </Label>
                            <p className="text-sm text-gray-500">Access to user accounts and permissions</p>
                          </div>
                          <Switch
                            id="userManagement"
                            checked={adminSettings.userManagement}
                            onCheckedChange={(checked) =>
                              setAdminSettings((prev) => ({ ...prev, userManagement: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <Label htmlFor="systemLogs" className="flex items-center gap-2">
                              <Activity className="h-4 w-4" />
                              System Logs
                            </Label>
                            <p className="text-sm text-gray-500">View and manage system activity logs</p>
                          </div>
                          <Switch
                            id="systemLogs"
                            checked={adminSettings.systemLogs}
                            onCheckedChange={(checked) =>
                              setAdminSettings((prev) => ({ ...prev, systemLogs: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <Label htmlFor="databaseAccess" className="flex items-center gap-2">
                              <Database className="h-4 w-4" />
                              Database Access
                            </Label>
                            <p className="text-sm text-gray-500">Direct database management capabilities</p>
                          </div>
                          <Switch
                            id="databaseAccess"
                            checked={adminSettings.databaseAccess}
                            onCheckedChange={(checked) =>
                              setAdminSettings((prev) => ({ ...prev, databaseAccess: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="space-y-1">
                            <Label htmlFor="apiKeyManagement" className="flex items-center gap-2">
                              <Key className="h-4 w-4" />
                              API Key Management
                            </Label>
                            <p className="text-sm text-gray-500">Generate and manage system API keys</p>
                          </div>
                          <Switch
                            id="apiKeyManagement"
                            checked={adminSettings.apiKeyManagement}
                            onCheckedChange={(checked) =>
                              setAdminSettings((prev) => ({ ...prev, apiKeyManagement: checked }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg border-orange-200 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
                          <div className="space-y-1">
                            <Label htmlFor="maintenanceMode" className="flex items-center gap-2 text-orange-700">
                              <Shield className="h-4 w-4" />
                              Maintenance Mode
                            </Label>
                            <p className="text-sm text-orange-600">Enable system-wide maintenance mode</p>
                          </div>
                          <Switch
                            id="maintenanceMode"
                            checked={adminSettings.maintenanceMode}
                            onCheckedChange={(checked) =>
                              setAdminSettings((prev) => ({ ...prev, maintenanceMode: checked }))
                            }
                          />
                        </div>
                      </div>

                      <Button
                        onClick={handleAdminSettingsUpdate}
                        disabled={isLoading}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        {isLoading ? "Saving..." : "Save Admin Settings"}
                      </Button>
                    </CardContent>
                  </Card>

                  {/* System Information - Admin Only */}
                  <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                    <CardHeader>
                      <CardTitle>System Information</CardTitle>
                      <CardDescription>System status and administrative details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Total Users:</span>
                            <span>1,247</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Active Sessions:</span>
                            <span>89</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">System Uptime:</span>
                            <span>99.9%</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Database Size:</span>
                            <span>2.4 GB</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">API Requests (24h):</span>
                            <span>45,231</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Last Backup:</span>
                            <span>2 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              {/* Support Tab */}
              <TabsContent value="support" className="space-y-6">
                {/* Help & Support */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" />
                      Help & Support
                    </CardTitle>
                    <CardDescription>Get help and contact our support team</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="h-4 w-4" />
                          <span className="font-medium">Documentation</span>
                        </div>
                        <p className="text-sm text-gray-500 text-left">Browse our comprehensive guides and tutorials</p>
                      </Button>

                      <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="h-4 w-4" />
                          <span className="font-medium">{isAdmin ? "Priority Support" : "Contact Support"}</span>
                        </div>
                        <p className="text-sm text-gray-500 text-left">
                          {isAdmin ? "Get priority support as an administrator" : "Get in touch with our support team"}
                        </p>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Send Feedback */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Send Feedback
                    </CardTitle>
                    <CardDescription>Help us improve by sharing your thoughts and suggestions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Send Feedback
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Send Feedback</DialogTitle>
                          <DialogDescription>
                            We'd love to hear your thoughts, suggestions, or report any issues you've encountered.
                            {isAdmin && " As an admin, your feedback helps us improve the platform for everyone."}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="feedback">Your Feedback</Label>
                            <Textarea
                              id="feedback"
                              placeholder="Tell us what you think..."
                              rows={5}
                              value={feedback}
                              onChange={(e) => setFeedback(e.target.value)}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setFeedbackOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleSendFeedback} disabled={isLoading}>
                            {isLoading ? "Sending..." : "Send Feedback"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                {/* App Information */}
                <Card className={cn(darkMode ? "bg-gray-800 border-gray-700" : "bg-white")}>
                  <CardHeader>
                    <CardTitle>Application Information</CardTitle>
                    <CardDescription>Version and system details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Version:</span>
                        <span>1.0.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Last Updated:</span>
                        <span>December 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Build:</span>
                        <span>2024.12.001</span>
                      </div>
                      {isAdmin && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Environment:</span>
                            <span>Production</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Server:</span>
                            <span>AWS us-east-1</span>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
