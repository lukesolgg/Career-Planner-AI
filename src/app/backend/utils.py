def validate_input(data):
    if not all(key in data for key in ['name', 'current_position', 'target_position']):
        return False
    return True