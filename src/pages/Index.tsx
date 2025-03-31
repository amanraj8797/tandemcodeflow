
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Code, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("learn");

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-indigo-600">TandemCodeFlow</h1>
            <nav className="ml-10 hidden space-x-4 md:flex">
              <a href="#" className="text-sm font-medium text-indigo-600">Home</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Dashboard</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">My Paths</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">Leaderboard</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">user@example.com</span>
            <Button variant="outline" size="sm">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <Code className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">React Development</h2>
              <p className="text-gray-500">12,500 students enrolled</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="space-y-4 rounded-lg bg-white p-6 shadow-md">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Learn modern React with hooks, context API, and advanced patterns</h3>
              </div>

              <nav className="space-y-1">
                <a href="#" className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Roadmap</span>
                </a>
                <a href="#" className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Documentation</span>
                </a>
                <a href="#" className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Resources</span>
                </a>
                <a href="#" className="flex items-center space-x-2 rounded-md bg-indigo-100 px-3 py-2 text-sm font-medium text-indigo-700">
                  <Code className="h-5 w-5 text-indigo-500" />
                  <span>Practice</span>
                </a>
                <a href="#" className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Tests</span>
                </a>
                <a href="#" className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Videos</span>
                </a>
              </nav>

              <div className="space-y-4 pt-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>12,500 enrolled</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <BookOpen className="h-4 w-4" />
                  <span>48 lessons</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Certificate available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <Tabs defaultValue="learn" onValueChange={setActiveTab} value={activeTab}>
                <TabsList className="mb-8 grid w-full grid-cols-2">
                  <TabsTrigger value="learn">Learn</TabsTrigger>
                  <TabsTrigger value="practice">Practice</TabsTrigger>
                </TabsList>
                <TabsContent value="learn">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">
                      React Development
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      Learn modern React with hooks, context API, and advanced patterns.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="practice">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">
                      Collaborative Practice
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      Join or create a collaborative coding session to practice
                      with peers.
                    </p>

                    <div className="space-y-6">
                      <Card className="border-2 border-primary/50">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-medium mb-2">
                            Create a New Room
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            Start a collaborative coding session and invite
                            others to join.
                          </p>
                          <Link to="/collaborative">
                            <Button className="w-full">
                              <Users className="mr-2 h-4 w-4" />
                              Go to Collaborative Editor
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
