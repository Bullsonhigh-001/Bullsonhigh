/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import Tools from "./pages/Tools";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    
    // Listen for custom navigation events
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      handleLocationChange();
    } as any;

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const renderPage = () => {
    if (path === "/" || path === "") return <Home />;
    if (path === "/blog") return <Blog />;
    if (path.startsWith("/blog/")) {
      const slug = path.split("/")[2];
      return <BlogPostPage slug={slug} />;
    }
    if (path === "/tools") return <Tools />;
    
    return <Home />; // Default fallback
  };

  return renderPage();
}

