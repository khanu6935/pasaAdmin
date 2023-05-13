import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Blogs,
  HomePage,
  Setting,
  Signin,
  Submission,
  Subscribers,
  Users,
  Notification,
} from "./pages";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import CreateBlog from "./pages/dashboard/blogs/CreateBlog";
import BlogDetail from "./pages/dashboard/blogs/BlogDetail";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/subscribers" element={<Subscribers />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/blog-details/:id" element={<BlogDetail />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
