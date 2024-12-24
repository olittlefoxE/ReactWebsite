import React, { Suspense, lazy } from "react";

export const DynamicProjectsPage = ({ projectName }) => {
  if (!projectName || typeof projectName !== "string") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="mt-4 text-lg text-gray-600">Invalid project name.</p>
      </div>
    );
  }

  try {
    const ProjectComponent = lazy(() =>
      import(`../components/projects/${projectName}`).catch(() => {
        throw new Error(`Component "${projectName}" not found.`);
      }),
    );

    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Suspense fallback={<p>Loading {projectName}...</p>}>
          <ProjectComponent />
        </Suspense>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Error</h1>
        <p className="mt-4 text-lg text-gray-600">
          Project not found: {projectName}
        </p>
      </div>
    );
  }
};
