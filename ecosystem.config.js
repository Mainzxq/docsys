module.exports = [
  {
    script: "index.js",
    name: "question-server",
    exec_mode: "cluster",
    instances: 2
  },
  {
    script: "worker.js",
    name: "worker"
  }
];
