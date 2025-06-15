import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  MoreHorizontal, 
  CheckCircle,
  Circle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';
import { Task } from '../../store/taskStore';
import { format } from 'date-fns';

interface TaskListViewProps {
  tasks: Task[];
}

const TaskListView: React.FC<TaskListViewProps> = ({ tasks }) => {
  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'done':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'blocked':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityIcon = (priority: Task['priority']) => {
    switch (priority) {
      case 'critical':
        return <ArrowUp className="w-4 h-4 text-red-600" />;
      case 'high':
        return <ArrowUp className="w-4 h-4 text-orange-600" />;
      case 'low':
        return <ArrowDown className="w-4 h-4 text-gray-400" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'todo':
        return 'bg-gray-100 text-gray-700';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700';
      case 'review':
        return 'bg-yellow-100 text-yellow-700';
      case 'done':
        return 'bg-green-100 text-green-700';
      case 'blocked':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-700';
      case 'high':
        return 'bg-orange-100 text-orange-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="card p-12 text-center">
        <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
        <p className="text-gray-600">Create a new task to get started.</p>
      </div>
    );
  }

  return (
    <div className="card">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
          <div className="col-span-4">Task</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-2">Due Date</div>
          <div className="col-span-1">Progress</div>
          <div className="col-span-1"></div>
        </div>
      </div>

      {/* Task Rows */}
      <div className="divide-y divide-gray-200">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Task Info */}
              <div className="col-span-4">
                <div className="flex items-start space-x-3">
                  <button className="mt-1">
                    {getStatusIcon(task.status)}
                  </button>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className="text-sm text-gray-500 truncate mt-1">
                        {task.description}
                      </p>
                    )}
                    {task.subtasks.length > 0 && (
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="text-xs text-gray-500">
                          {task.subtasks.filter(st => st.completed).length}/{task.subtasks.length} subtasks
                        </div>
                        <div className="w-16 bg-gray-200 rounded-full h-1">
                          <div 
                            className="bg-blue-600 h-1 rounded-full"
                            style={{ 
                              width: `${(task.subtasks.filter(st => st.completed).length / task.subtasks.length) * 100}%` 
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="col-span-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                  {task.status.replace('-', ' ')}
                </span>
              </div>

              {/* Priority */}
              <div className="col-span-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                  <span className="mr-1">{getPriorityIcon(task.priority)}</span>
                  {task.priority}
                </span>
              </div>

              {/* Due Date */}
              <div className="col-span-2">
                {task.dueDate ? (
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(task.dueDate), 'MMM d')}</span>
                  </div>
                ) : (
                  <span className="text-sm text-gray-400">No date</span>
                )}
              </div>

              {/* Progress */}
              <div className="col-span-1">
                <div className="flex items-center space-x-2">
                  <div className="w-8 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${task.progress * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{Math.round(task.progress * 100)}%</span>
                </div>
              </div>

              {/* Actions */}
              <div className="col-span-1 flex justify-end">
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TaskListView;