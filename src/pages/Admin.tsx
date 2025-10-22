import { useEffect, useState } from "react";
import { db } from "@/integrations/firebase/client";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactOverlay from "@/components/ContactOverlay";

interface Application {
  id: string;
  name: string;
  email: string;
  github_link: string | null;
  linkedin_link: string | null;
  resume_url: string | null;
  role: string;
  reason: string;
  createdAt: any;
}

export default function Admin() {
  const [showContactOverlay, setShowContactOverlay] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    // Check if already authenticated in session storage
    const isAuth = sessionStorage.getItem("adminAuth") === "true";
    if (isAuth) {
      setIsAuthenticated(true);
      fetchApplications();
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simple hardcoded credential check
      if (email === "syedabdulla7979@gmail.com" && password === "MB@#123$abd..") {
        sessionStorage.setItem("adminAuth", "true");
        setIsAuthenticated(true);
        fetchApplications();
        toast({
          title: "Success",
          description: "Logged in successfully",
        });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    setApplications([]);
  };

  const fetchApplications = async () => {
    try {
      const q = query(collection(db, "applications"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedApplications = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Application[];
      setApplications(fetchedApplications);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch applications",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Navbar onContactClick={() => setShowContactOverlay(true)} />
        <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-20">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Admin Login</CardTitle>
              <CardDescription>
                Enter your credentials to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Footer />
        <ContactOverlay
          isOpen={showContactOverlay}
          onClose={() => setShowContactOverlay(false)}
        />
      </>
    );
  }

  return (
    <>
      <Navbar onContactClick={() => setShowContactOverlay(true)} />
      <div className="min-h-screen bg-background px-4 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage job applications
              </p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Applications ({applications.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>GitHub</TableHead>
                      <TableHead>LinkedIn</TableHead>
                      <TableHead>Resume</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center py-8">
                          No applications yet
                        </TableCell>
                      </TableRow>
                    ) : (
                      applications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">
                            {app.name}
                          </TableCell>
                          <TableCell>{app.email}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                              {app.role}
                            </span>
                          </TableCell>
                          <TableCell>
                            {app.github_link ? (
                              <a
                                href={app.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                View
                              </a>
                            ) : (
                              "-"
                            )}
                          </TableCell>
                          <TableCell>
                            {app.linkedin_link ? (
                              <a
                                href={app.linkedin_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                View
                              </a>
                            ) : (
                              "-"
                            )}
                          </TableCell>
                          <TableCell>
                            {app.resume_url ? (
                              <a
                                href={app.resume_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                View
                              </a>
                            ) : (
                              "-"
                            )}
                          </TableCell>
                          <TableCell className="max-w-xs truncate">
                            {app.reason}
                          </TableCell>
                          <TableCell>
                            {app.createdAt?.toDate().toLocaleDateString() || '-'}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <ContactOverlay
        isOpen={showContactOverlay}
        onClose={() => setShowContactOverlay(false)}
      />
    </>
  );
}
