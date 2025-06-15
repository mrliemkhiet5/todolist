import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  List, 
  Grid3X3, 
  Calendar, 
  BarChart3, 
  Filter, 
  SortAsc, 
  Plus,
  Search,
  ChevronDown
} from 'lucide-react';
import { useTaskStore } from '../store/taskStore';
import TaskListView from './views/TaskListView';
import TaskKanbanView from './views/TaskKanbanView';
import TaskCalendarView from './views/TaskCalendarView';
import TaskGanttView from './views/TaskGanttView';
import TaskModal from './TaskModal';

const TasksPage = () => {
  const { viewMode, setViewMode, tasks, currentProject, projects, isLoading, error } = useTaskStore();
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const currentProjectData = projects.find(p => p.id === currentProject);
  const filteredTasks = tasks.filter(task => {
    if (currentProject && task.project_id !== currentProject) return false;
    if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (statusFilter !== 'all' && task.status !== statusFilter) return false;
    if (priorityFilter !== 'all' && task.priority !== priorityFilter) return false;
    return true;
  });

  const viewOptions = [
    { id: 'list', icon: <List className="w-4 h-4" />, label: 'List' },
    { id: 'kanban', icon: <Grid3X3 className="w-4 h-4" />, label: 'Kanban' },
    { id: 'calendar', icon: <Calendar className="w-4 h-4" />, label: 'Calendar' },
    { id: 'gantt', icon: <BarChart3 className="w-4 h-4" />, label: 'Gantt' },
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'todo', label: 'To Do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'review', label: 'Review' },
    { value: 'done', label: 'Done' },
    { value: 'blocked', label: 'Blocked' },
  ];

  const priorityOptions = [
    { value: 'all', label: 'All Priority' },
    { value: 'critical', label: 'Critical' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ];

  const renderView = () => {
    switch (viewMode) {
      case 'list':
        return <TaskListView tasks={filteredTasks} />;
      case 'kanban':
        return <TaskKanbanView tasks={filteredTasks} />;
      case 'calendar':
        return <TaskCalendarView tasks={filteredTasks} />;
      case 'gantt':
        return <TaskGanttView tasks={filteredTasks} />;
      default:
        return <TaskListView tasks={filteredTasks} />;
    }
  };

  if (error) {
    return (
      <div className="card p-12 text-center">
        <div className="text-red-600 mb-4">Error: {error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="btn-primary"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {currentProjectData ? currentProjectData.title : 'All Tasks'}
            </h1>
            <p className="text-gray-600 mt-1">
              {currentProjectData 
                ? currentProjectData.description 
                : 'Manage and organize your tasks across all projects'
              }
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setShowTaskModal(true)}
              className="btn-primary flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Task</span>
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="card p-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Left side - Search and View Toggle */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                {viewOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setViewMode(option.id as any)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                      viewMode === option.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {option.icon}
                    <span className="hidden sm:inline text-sm font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Filters and Sort */}
            <div className="flex items-center space-x-3">
              {/* Status Filter */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Priority Filter */}
              <div className="relative">
                <select
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {priorityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              <button className="btn-secondary flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filter</span>
              </button>

              <button className="btn-secondary flex items-center space-x-2">
                <SortAsc className="w-4 h-4" />
                <span className="hidden sm:inline">Sort</span>
              </button>
            </div>
          </div>
        </div>

        {/* Task Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Tasks', value: filteredTasks.length, color: 'blue' },
            { label: 'In Progress', value: filteredTasks.filter(t => t.status === 'in-progress').length, color: 'yellow' },
            { label: 'Completed', value: filteredTasks.filter(t => t.status === 'done').length, color: 'green' },
            { label: 'Overdue', value: filteredTasks.filter(t => t.due_date && new Date(t.due_date) < new Date() && t.status !== 'done').length, color: 'red' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        {isLoading ? (
          <div className="card p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading tasks...</p>
          </div>
        ) : (
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        )}
      </div>

      {/* Task Modal */}
      <TaskModal
        isOpen={showTaskModal}
        onClose={() => setShowTaskModal(false)}
        projectId={currentProject || undefined}
      />
    </>
  );
};

export default TasksPage;