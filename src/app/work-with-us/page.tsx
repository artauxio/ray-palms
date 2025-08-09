import React from "react";
import GetInTouchForm from "@/components/GetInTouchForm";

const WorkWithUsPage = () => {
  return (
    <main className="space-y-0">
      <GetInTouchForm title="For Jobs" nameLabel="Full Name" />
      <GetInTouchForm title="For Businesses" nameLabel="Company Name" />
    </main>
  );
};

export default WorkWithUsPage;