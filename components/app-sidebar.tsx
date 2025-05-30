"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  FolderPlus,
  Folder,
  LayoutTemplateIcon as Template,
  Bot,
  Search,
  History,
  User,
  Menu,
  ChevronRight,
  LogOut,
  FolderTree,
  Code,
  FileText,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter, usePathname } from "next/navigation"

const sidebarItems = [
  {
    title: "Main",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
      { icon: FolderPlus, label: "New Project", href: "#new-project" },
      { icon: Folder, label: "My Projects", href: "#projects" },
      { icon: Template, label: "Templates", href: "#templates" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: Bot, label: "Prompt Builder", href: "/prompt-builder" },
      { icon: FolderTree, label: "CodeMap Studio", href: "/codemap-studio" },
      { icon: FileText, label: "TextExtract Pro", href: "/textextract-pro" },
      { icon: Code, label: "Code Generator", href: "#code-generator" },
      { icon: Search, label: "Project Explorer", href: "#explorer" },
      { icon: History, label: "History", href: "#history" },
    ],
  },
  {
    title: "Account",
    items: [{ icon: User, label: "Settings", href: "#settings" }],
  },
]

interface AppSidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export function AppSidebar({ sidebarOpen, setSidebarOpen, darkMode }: AppSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/")
  }

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // Handle hash navigation for non-implemented features
      window.location.hash = href.slice(1)
    } else {
      // Use Next.js router for actual pages
      router.push(href)
    }
  }

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false
    return pathname === href
  }

  return (
    <div
      className={cn(
        "border-r transition-all duration-300 flex flex-col",
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200",
        sidebarOpen ? "w-64" : "w-16",
      )}
    >
      {/* Sidebar Header */}
      <div className={cn("p-4 border-b h-16 flex items-center", darkMode ? "border-gray-700" : "border-gray-200")}>
        <div className="flex items-center justify-center w-full">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="h-8 w-8">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {sidebarItems.map((section, sectionIndex) => (
          <div key={section.title} className="mb-6">
            {sidebarOpen && (
              <h3
                className={cn(
                  "px-4 text-xs font-semibold uppercase tracking-wider mb-2",
                  darkMode ? "text-gray-400" : "text-gray-500",
                )}
              >
                {section.title}
              </h3>
            )}
            <nav className="space-y-1 px-2">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                    isActive(item.href)
                      ? darkMode
                        ? "bg-blue-900/50 text-blue-300 border border-blue-700"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                      : darkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100",
                    !sidebarOpen && "justify-center",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {isActive(item.href) && <ChevronRight className="h-4 w-4" />}
                    </>
                  )}
                </button>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Sidebar Footer */}
      <div className={cn("p-4 border-t", darkMode ? "border-gray-700" : "border-gray-200")}>
        <div className={cn("flex items-center gap-3", !sidebarOpen && "justify-center")}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <p className={cn("text-sm font-medium truncate", darkMode ? "text-gray-100" : "text-gray-900")}>
                John Doe
              </p>
              <p className={cn("text-xs truncate", darkMode ? "text-gray-400" : "text-gray-500")}>john@example.com</p>
            </div>
          )}
          {sidebarOpen && (
            <Button variant="ghost" size="icon" onClick={handleSignOut} className="h-8 w-8">
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
