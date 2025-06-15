import React from 'react';
import { motion } from 'framer-motion';
import { Plus, MoreHorizontal, Calendar, User, AlertCircle } from 'lucide-react';
import { Task } from '../../store/taskStore';
import { format } from 'date-fns';

interface TaskKanbanViewProps {
  tasks: Task[];
}

const TaskKanbanView: React.FC<TaskKanbanViewProps> = ({ tasks }) => {
  const columns = [
    { id: 'todo', title: 'To Do', color: 'gray' },
    { id: 'in-progress', title: 'In Progress', color: 'blue' },
    { id: 'review', title: 'Review', color: 'yellow' },
    { id: 'done', title: 'Done', color: 'green' },
    { id: 'blocked', title: 'Blocked', color: 'red' },
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'critical':
        return 'border-l-red-500';
      case 'high':
        return 'border-l-orange-500';
      case 'medium':
        return 'border-l-yellow-500';
      case 'low':
        return 'border-l-gray-400';
      default:
        return 'border-l-gray-300';
    }
  };

  const getColumnColor = (color: string) => {
    const colors = {
      gray: 'bg-gray-100 text-gray-700',
      blue: 'bg-blue-100 text-blue-700',
      yellow: 'bg-yellow-100 text-yellow-700',
      green: 'bg-green-100 text-green-700',
      red: 'bg-red-100 text-red-700',
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <div className="flex space-x-6 overflow-x-auto pb-6">
      {columns.map((column) => {
        const columnTasks = getTasksByStatus(column.id);
        
        return (
          <div key={column.id} className="flex-shrink-0 w-80">
            {/* Column Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-900">{column.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getColumnColor(column.color)}`}>
                    {columnTasks.length}
                  </span>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <Plus className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Column Content */}
            <div className="space-y-3 min-h-96">
              {columnTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  className={`card p-4 cursor-pointer hover:shadow-md transition-all duration-200 border-l-4 ${getPriorityColor(task.priority)}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {/* Task Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-gray-900 line-clamp-2 flex-1">
                      {task.title}
                    </h4>
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors ml-2">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Task Description */}
                  {task.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {task.description}
                    </p>
                  )}

                  {/* Task Tags */}
                  {task.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {task.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {task.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          +{task.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Subtasks Progress */}
                  {task.subtasks.length > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>Subtasks</span>
                        <span>{task.subtasks.filter(st => st.completed).length}/{task.subtasks.length}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${(task.subtasks.filter(st => st.completed).length / task.subtasks.length) * 100}%` 
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Task Footer */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      {task.dueDate && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{format(new Date(task.dueDate), 'MMM d')}</span>
                        </div>
                      )}
                      {task.assignee && (
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>Assigned</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {task.status === 'blocked' && (
                        <AlertCircle className="w-3 h-3 text-red-500" />
                      )}
                      <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${task.assignee || 'default'}`}
                          alt="Assignee"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Add Task Button */}
              <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors">
                <Plus className="w-5 h-5 mx-auto mb-1" />
                <span className="text-sm">Add task</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskKanbanView;