class CareerPlanner:
    def __init__(self):
        # Here you could load career paths, job requirements, etc. from a data source
        self.career_paths = {
            "Software Engineer": ["Learn Programming", "Get Internship", "Bachelor's Degree", "Full-time Job"],
            "Data Scientist": ["Learn Statistics", "Master's Degree", "Data Analysis Projects", "Job in Data Science"]
        }

    def create_plan(self, user):
        target = user.target_position
        if target in self.career_paths:
            return self.career_paths[target]
        else:
            return ["Research career path", "Identify necessary skills", "Plan your education/courses", "Look for job opportunities"]