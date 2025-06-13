import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  LayoutDashboard, 
  FolderOpen, 
  BarChart3, 
  Settings, 
  Plus,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users
} from 'lucide-react';
import { useTaskStore } from '../store/taskStore';
import { useAuthStore } from '../store/authStore';
import ProjectModal from './ProjectModal';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const location = useLocation();
  const { projects, currentProject, setCurrentProject, fetchProjects, tasks } = useTaskStore();
  const { profile } = useAuthStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const menuItems = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: 'Dashboard',
      path: '/dashboard',
      badge: null
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      label: 'Tasks',
      path: '/dashboard',
      badge: tasks.length.toString()
    },
    {
      icon: <FolderOpen className="w-5 h-5" />,
      label: 'Projects',
      path: '/dashboard/projects',
      badge: projects.length.toString()
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Calendar',
      path: '/dashboard/calendar',
      badge: null
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: 'Analytics',
      path: '/dashboard/analytics',
      badge: null
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: 'Team',
      path: '/dashboard/team',
      badge: null
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: 'Settings',
      path: '/dashboard/settings',
      badge: null
    }
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname === '/dashboard/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.div 
        className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
        initial={false}
        animate={{ width: isCollapsed ? 64 : 256 }}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">TaskFlow</span>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              {isCollapsed ? (
                <ChevronRight className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className={`${isActive(item.path) ? 'text-blue-600' : 'text-gray-400'}`}>
                {item.icon}
              </div>
              {!isCollapsed && (
                <>
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Projects Section */}
        {!isCollapsed && (
          <div className="px-4 pb-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Projects
              </h3>
              <button 
                onClick={() => setShowProjectModal(true)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <Plus className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentProject(project.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                    currentProject === project.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  />
                  <span className="font-medium truncate">{project.title}</span>
                  <span className="ml-auto text-xs text-gray-400">
                    {tasks.filter(t => t.project_id === project.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <img 
              src={profile?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile?.email}`} 
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{profile?.name}</p>
                <p className="text-xs text-gray-500 truncate">{profile?.email}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
      />
    </>
  );
};

export default Sidebar;