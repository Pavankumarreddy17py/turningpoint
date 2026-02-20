from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def generate_roadmap(request):
    dream_category = request.data.get("dreamCategory")
    dream_name = request.data.get("dreamName")
    responses = request.data.get("responses")

    if dream_category == "software_engineer":
        roadmap = {
            "confirmed_dream": "Software Engineer",
            "exact_role": "Full Stack Developer",
            "required_skills": ["DSA", "React", "Backend"],
            "education_training": "B.Tech CSE",
            "daily_routine": "Coding, debugging, meetings",
            "short_term_goals": ["Learn DSA", "Build Projects"],
            "backup_options": ["QA Engineer"]
        }
    else:
        roadmap = {
            "confirmed_dream": dream_name,
            "exact_role": "Professional",
            "required_skills": ["Communication"],
            "education_training": "Relevant Degree",
            "daily_routine": "Work related tasks",
            "short_term_goals": ["Skill Development"],
            "backup_options": ["Alternative career"]
        }

    return Response(roadmap)