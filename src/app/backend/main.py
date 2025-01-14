from flask import Flask, request, jsonify
from career_planner import CareerPlanner
from user import User

app = Flask(__name__)

# Mock database or use a real one like SQLAlchemy or MongoDB
users = {}

@app.route('/plan', methods=['POST'])
def plan_career():
    data = request.json
    user = User(data.get('name'), data.get('current_position'), data.get('target_position'))
    planner = CareerPlanner()
    plan = planner.create_plan(user)
    return jsonify({"plan": plan})

if __name__ == '__main__':
    app.run(debug=True)