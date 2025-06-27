package com.taskmanager.backend.controller;

import com.taskmanager.backend.model.Task;
import com.taskmanager.backend.repository.TaskRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        task.setCompleted(false);
        return taskRepository.save(task);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> markCompleted(@PathVariable Long id) {
        return taskRepository.findById(id).map(task -> {
            task.setCompleted(true);
            return ResponseEntity.ok(taskRepository.save(task));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
public ResponseEntity<?> deleteTask(@PathVariable Long id) {
    return taskRepository.findById(id)
        .map(task -> {
            taskRepository.delete(task);
            return ResponseEntity.noContent().build();
        })
        .orElse(ResponseEntity.notFound().build());
}


}
