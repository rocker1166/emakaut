import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ChevronDownIcon } from "lucide-react";


import { Button } from "@/components/ui/button"
export default function Filter() {

    <>
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 bg-slate-500 rounded-md  text-black">
              <Tabs defaultValue="articles ">
                <TabsList className="flex gap-4 sm:gap-6">
                  <TabsTrigger  value="1">1st Year</TabsTrigger>
                  <TabsTrigger value="2">2nd Year</TabsTrigger>
                  <TabsTrigger value="3">3rd Year</TabsTrigger>
                  <TabsTrigger value="4">4th Year</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Course <ChevronDownIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Cse</DropdownMenuItem>
                    <DropdownMenuItem>IT</DropdownMenuItem>
                    <DropdownMenuItem>ECE</DropdownMenuItem>
                    <DropdownMenuItem>CSE(A.I)</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Subject <ChevronDownIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Math</DropdownMenuItem>
                    <DropdownMenuItem>Physics</DropdownMenuItem>
                    <DropdownMenuItem>Chemistry</DropdownMenuItem>
                    <DropdownMenuItem>English</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Material <ChevronDownIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>E-book</DropdownMenuItem>
                    <DropdownMenuItem>Youtube Playlist</DropdownMenuItem>
                    <DropdownMenuItem>Notes</DropdownMenuItem>
                    <DropdownMenuItem>Question Bank</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Content type <ChevronDownIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem> Free 🆓</DropdownMenuItem>
                    <DropdownMenuItem>Paid 💵</DropdownMenuItem>
                   
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
    </>
}