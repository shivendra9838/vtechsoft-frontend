import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import BlogSearch from "./pages/BlogSearch";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import AdminContacts from "./pages/AdminContacts";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/search" element={<BlogSearch />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin/contacts" element={<AdminContacts />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/*" element={<Layout />}>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
