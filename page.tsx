
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart2, Users, DollarSign, Home } from "lucide-react";

export default function KidpreneurAcademyApp() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Kidpreneur Academy</h1>
      <Tabs defaultValue="dashboard">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="dashboard"><Home className="inline-block mr-2" />Home</TabsTrigger>
          <TabsTrigger value="sales"><DollarSign className="inline-block mr-2" />Sales</TabsTrigger>
          <TabsTrigger value="lessons"><BarChart2 className="inline-block mr-2" />Lessons</TabsTrigger>
          <TabsTrigger value="community"><Users className="inline-block mr-2" />Community</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card>
            <CardContent className="space-y-2 p-4">
              <h2 className="text-lg font-semibold">Welcome Back, Junior CEO!</h2>
              <p>Your next goal: Earn $50 by Sunday</p>
              <Button className="w-full">Start Selling</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales">
          <Card>
            <CardContent className="space-y-2 p-4">
              <h2 className="text-lg font-semibold">Sales Tracker</h2>
              <Input placeholder="How much did you earn today?" />
              <Button className="w-full">Add Sale</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lessons">
          <Card>
            <CardContent className="space-y-2 p-4">
              <h2 className="text-lg font-semibold">Today's Lesson</h2>
              <p>What is profit? Learn the difference between revenue and expenses.</p>
              <Button className="w-full">Start Lesson</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community">
          <Card>
            <CardContent className="space-y-2 p-4">
              <h2 className="text-lg font-semibold">Community Board</h2>
              <p>Post your wins, ask for tips, or help a fellow Kidpreneur!</p>
              <Input placeholder="Write your message here..." />
              <Button className="w-full">Post</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
