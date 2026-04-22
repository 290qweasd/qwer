let nextTaskId = 1;

const uniqueTags = (tags = []) => [...new Set(tags)];

const createTask = (description, tags = []) => ({
  id: nextTaskId++,
  description,
  completed: false,
  tags: uniqueTags(tags),
});

const addTask = (tasks, task) => [...tasks, task];

const addTagToTask = (tasks, taskId, tag) => tasks.map((task) => {
  if (task.id !== taskId) {
    return task;
  }

  if (task.tags.includes(tag)) {
    return task;
  }

  return {
    ...task,
    tags: [...task.tags, tag],
  };
});

const removeTagFromTask = (tasks, taskId, tag) => tasks.map((task) => {
  if (task.id !== taskId) {
    return task;
  }

  return {
    ...task,
    tags: task.tags.filter((taskTag) => taskTag !== tag),
  };
});

const markTaskCompleted = (tasks, taskId) => tasks.map((task) => {
  if (task.id !== taskId) {
    return task;
  }

  return {
    ...task,
    completed: true,
  };
});

const filterTasksByTags = (tasks, filterTags) => {
  if (filterTags === undefined) {
    return tasks;
  }

  const tags = Array.isArray(filterTags) ? filterTags : [filterTags];

  return tasks.filter((task) => tags.every((tag) => task.tags.includes(tag)));
};

module.exports = {
  createTask,
  addTask,
  addTagToTask,
  removeTagFromTask,
  markTaskCompleted,
  filterTasksByTags,
};
