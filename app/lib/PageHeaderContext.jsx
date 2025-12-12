"use client";

import { createContext, useContext, useState, useEffect } from "react";

const PageHeaderContext = createContext();

export function PageHeaderProvider({ children }) {
  const [headerData, setHeaderData] = useState({
    title: "Page",
    breadcrumbLast: null,
  });

  return (
    <PageHeaderContext.Provider value={{ headerData, setHeaderData }}>
      {children}
    </PageHeaderContext.Provider>
  );
}

export function usePageHeader() {
  const context = useContext(PageHeaderContext);
  if (!context) {
    throw new Error("usePageHeader must be used within PageHeaderProvider");
  }
  return context;
}

export function PageHeaderSetter({ title, breadcrumbLast }) {
  const { setHeaderData } = usePageHeader();

  useEffect(() => {
    setHeaderData({
      title: title || "Page",
      breadcrumbLast: breadcrumbLast || null,
    });
  }, [title, breadcrumbLast, setHeaderData]);

  return null;
}
