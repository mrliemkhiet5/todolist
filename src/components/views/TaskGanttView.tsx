import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Calendar, MoreHorizontal } from 'lucide-react';
import { Task } from '../../store/taskStore';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addDays, differenceInDays, parseISO } from 'date-fns';

interface TaskGanttViewProps {
  tasks: Task[];
}

const TaskGanttView: React.FC<TaskGanttViewProps> = ({ tasks }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [zoomLevel, setZoomLevel] = useState(1); // 1 = days, 2 = weeks, 3 = months
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const ganttRef = useRef<HTMLDivElement>(null);

  // Filter tasks that have dates
  const tasksWithDates = tasks.filter(task => task.startDate || task.dueDate);

  // Calculate date range
  const startDate = tasksWithDates.length > 0 
    ? new Date(Math.min(...tasksWithDates.map(task => 
        new Date(task.startDate || task.dueDate!).getTime()
      )))
    : startOfMonth(currentDate);

  const endDate = tasksWithDates.length > 0
    ? new Date(Math.max(...tasksWithDates.map(task => 
        new Date(task.dueDate || task.startDate!).getTime()
      )))
    : endOfMonth(currentDate);

  // Extend range by a week on each side
  const rangeStart = addDays(startDate, -7);
  const rangeEnd = addDays(endDate, 7);
  const totalDays = differenceInDays(rangeEnd, rangeStart);

  const dayWidth = 40; // Width of each day column
  const taskHeight = 40; // Height of each task row

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-500';
      case 'high':
        return 'bg-orange-500';
      case 'medium':
        return 'bg-blue-500';
      case 'low':
        return 'bg-gray-400';
      default:
        return 'bg-gray-300';
    }
  };

  const getTaskPosition = (task: Task) => {
    const taskStart = task.startDate ? new Date(task.startDate) : new Date(task.dueDate!);
    const taskEnd = task.dueDate ? new Date(task.dueDate) : taskStart;
    
    const startOffset = differenceInDays(taskStart, rangeStart);
    const duration = Math.max(1, differenceInDays(taskEnd, taskStart));
    
    return {
      left: startOffset * dayWidth,
      width: duration * dayWidth,
      progress: task.progress
    };
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'done':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'blocked':
        return 'bg-red-500';
      case 'review':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  };

  // Generate timeline headers
  const timelineHeaders = [];
  for (let i = 0; i <= totalDays; i++) {
    const date = addDays(rangeStart, i);
    timelineHeaders.push(date);
  }

  if (tasksWithDates.length === 0) {
    return (
      <div className="card p-12 text-center">
        <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks with dates</h3>
        <p className="text-gray-600">Add start and due dates to your tasks to see them in the Gantt chart.</p>
      </div>
    );
  }

  return (
    <div className="card">
      {/* Gantt Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Project Timeline</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setZoomLevel(Math.max(1, zoomLevel - 1))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              disabled={zoomLevel <= 1}
            >
              <ZoomOut className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => setZoomLevel(Math.min(3, zoomLevel + 1))}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              disabled={zoomLevel >= 3}
            >
              <ZoomIn className="w-4 h-4 text-gray-600" />
            </button>
            <div className="text-sm text-gray-500">
              {format(rangeStart, 'MMM d')} - {format(rangeEnd, 'MMM d, yyyy')}
            </div>
          </div>
        </div>
      </div>

      {/* Gantt Chart */}
      <div className="overflow-auto" ref={ganttRef}>
        <div className="relative" style={{ minWidth: totalDays * dayWidth + 300 }}>
          {/* Timeline Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="flex">
              {/* Task Name Column */}
              <div className="w-80 p-4 border-r border-gray-200 bg-gray-50">
                <h3 className="font-medium text-gray-900">Tasks</h3>
              </div>
              
              {/* Date Headers */}
              <div className="flex">
                {timelineHeaders.map((date, index) => (
                  <div
                    key={index}
                    className="border-r border-gray-200 bg-gray-50 p-2 text-center"
                    style={{ width: dayWidth }}
                  >
                    <div className="text-xs text-gray-600">
                      {format(date, 'MMM')}
                    </div>
                    <div className="text-sm font-medium">
                      {format(date, 'd')}
                    </div>
                    <div className="text-xs text-gray-500">
                      {format(date, 'eee')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Task Rows */}
          <div>
            {tasksWithDates.map((task, index) => {
              const position = getTaskPosition(task);
              const isSelected = selectedTask === task.id;

              return (
                <motion.div
                  key={task.id}
                  className="flex border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  style={{ height: taskHeight + 20 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {/* Task Info */}
                  <div className="w-80 p-4 border-r border-gray-200 flex items-center">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">
                        {task.title}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          task.status === 'done' ? 'bg-green-100 text-green-700' :
                          task.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                          task.status === 'blocked' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {task.status.replace('-', ' ')}
                        </span>
                        <span className="text-xs text-gray-500">
                          {task.priority}
                        </span>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Timeline */}
                  <div className="relative flex-1" style={{ height: taskHeight + 20 }}>
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex">
                      {timelineHeaders.map((_, index) => (
                        <div
                          key={index}
                          className="border-r border-gray-100"
                          style={{ width: dayWidth }}
                        />
                      ))}
                    </div>

                    {/* Task Bar */}
                    <div
                      className={`absolute top-1/2 transform -translate-y-1/2 h-6 rounded-md shadow-sm cursor-pointer transition-all duration-200 ${
                        isSelected ? 'ring-2 ring-blue-500' : ''
                      } ${getStatusColor(task.status)}`}
                      style={{
                        left: position.left,
                        width: position.width,
                      }}
                      onClick={() => setSelectedTask(isSelected ? null : task.id)}
                    >
                      {/* Progress Bar */}
                      <div
                        className="h-full bg-black bg-opacity-20 rounded-md transition-all duration-300"
                        style={{ width: `${position.progress * 100}%` }}
                      />
                      
                      {/* Task Label */}
                      {position.width > 100 && (
                        <div className="absolute inset-0 flex items-center px-2">
                          <span className="text-white text-xs font-medium truncate">
                            {task.title}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Dependencies */}
                    {task.dependencies.length > 0 && (
                      <div className="absolute top-1/2 transform -translate-y-1/2">
                        {/* Dependency arrows would be rendered here */}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Today Line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-20 pointer-events-none"
            style={{
              left: 300 + (differenceInDays(new Date(), rangeStart) * dayWidth),
            }}
          >
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-2 bg-green-500 rounded" />
            <span className="text-gray-600">Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-2 bg-blue-500 rounded" />
            <span className="text-gray-600">In Progress</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-2 bg-yellow-500 rounded" />
            <span className="text-gray-600">Review</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-2 bg-red-500 rounded" />
            <span className="text-gray-600">Blocked</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-0.5 h-4 bg-red-500" />
            <span className="text-gray-600">Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskGanttView;