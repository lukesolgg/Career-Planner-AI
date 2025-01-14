# Career Planner API Documentation

## Overview

This API provides endpoints for career planning, allowing users to get tailored career paths based on their current status and desired career goals.

## Endpoints

### POST /plan

**Purpose:** Generate a career plan based on user input.

**Request Body:**
- `name` (string, required): User's name.
- `current_position` (string, required): Current job title or position.
- `target_position` (string, required): Desired job title or career goal.

**Example Request Body:**
```json
{
  "name": "John Doe",
  "current_position": "Junior Developer",
  "target_position": "Senior Software Engineer"
}