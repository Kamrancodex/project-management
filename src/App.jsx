import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: null,
    }));
  };

  const handleAddProject = (projectData) => {
    setProjectState((prev) => {
      const newProj = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProj],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
    }));
  };

  const handleSelectProject = (id) => {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: id,
    }));
  };

  const handleDeleteProject = () => {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter(
        (project) => project.id !== prev.selectedProjectId
      ),
    }));
  };

  const handleAddTask = (text) => {
    setProjectState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        id: taskId,
        projectId: prev.selectedProjectId,
      };
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      tasks={projectState.tasks.filter(
        (task) => task.projectId === projectState.selectedProjectId
      )}
      onDeleteTask={handleDeleteTask}
      onAddTask={handleAddTask}
      onDelete={handleDeleteProject}
      project={selectedProject}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex flex-col lg:flex-row gap-8">
      <Sidebar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      <div className="flex-1">{content}</div>
    </main>
  );
}

export default App;
