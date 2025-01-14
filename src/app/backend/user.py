class User:
    def __init__(self, name, current_position, target_position):
        self.name = name
        self.current_position = current_position
        self.target_position = target_position

    def __str__(self):
        return f"{self.name} - Current: {self.current_position}, Target: {self.target_position}"