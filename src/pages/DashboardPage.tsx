import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TasksPage from '../components/TasksPage';
import ProjectsPage from '../components/ProjectsPage';
import AnalyticsPage from '../components/AnalyticsPage';
import SettingsPage from '../components/SettingsPage';
import { useTaskStore } from '../store/taskStore';
import { useAuthStore } from '../store/authStore';

const DashboardPage = () => {
  const { fetchTasks, fetchProjects } = useTaskStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      fetchTasks();
      fetchProjects();
    }
  }, [user, fetchTasks, fetchProjects]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;