# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
import datetime
import requests
import json

# Initializing flask app
app = Flask(__name__)

OPENROUTER_API_KEY = ""

# Route for seeing data
@app.route('/data')
def get_time():
    # Get current date and time
    x = datetime.datetime.now()

    # Returning an API response in JSON format
    return jsonify({
        'Name': "geek",
        "Age": "22",
        "Date": x.isoformat(),  # Format date to ISO 8601 string
        "programming": "python"
    })


@app.route('/get_suggestions')
def get_suggestions():
    prompt = (
        "Generate a comprehensive list of innovative marketing strategies and events for the SPCA Hong Kong, "
        "an organization dedicated to ending animal cruelty and promoting animal welfare. Consider the following points:\n"
        "1. Historical Context: Reflect on the performance of past marketing events hosted by SPCA HK, such as the collaboration with Hello Kitty and the 'A Dog Is A Dog, A Cat Is A Cat' campaign. Analyze what worked well and what could be improved.\n"
        "2. Target Audience: Identify key demographics that SPCA HK aims to reach, including animal lovers, potential pet owners, and families. Suggest tailored strategies to engage these groups effectively.\n"
        "3. Digital Engagement: Propose ways to leverage technology and social media platforms to enhance outreach efforts. Consider interactive campaigns, virtual events, or educational webinars that could attract a broader audience.\n"
        "4. Community Involvement: Suggest community-based events or partnerships with local businesses that could raise awareness about animal welfare issues while fostering a sense of community support.\n"
        "5. Educational Initiatives: Recommend programs that educate the public about responsible pet ownership, animal rights, and the importance of adoption over purchasing pets.\n"
        "6. Fundraising Events: Create ideas for fundraising events that could also serve as awareness campaigns, such as charity runs, pet fairs, or themed adoption days.\n"
        "7. Collaborations: Explore potential collaborations with influencers, celebrities, or other organizations that align with SPCA HK’s mission to amplify their message.\n"
        "8. Feedback Mechanism: Include strategies for collecting feedback from participants in past events to refine future initiatives based on community input.\n"
        "The goal is to create actionable strategies that not only raise awareness about animal welfare but also attract more supporters and users to SPCA HK's programs and services.\n"
        "Follow the respond structure:\n"
        "Event 1 name: content\n"
        "Event 1 description: content\n"
        "Event 2 name: content\n"
        "Event 2 description: content\n"
        "..."
    )

    response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json"
        },
        data=json.dumps({
            "model": "openai/gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        })
    )

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        suggestions = response.json().get('choices', [])
        
        # Extract content from suggestions
        results = [suggestion['message']['content'] for suggestion in suggestions]

        # Initialize a list for structured events
        structured_events = []

        for result in results:
            # Split the result into individual events
            events = result.strip().split("\n\n")
            
            for event in events:
                # Split each event into lines
                lines = event.split("\n")
                
                # Initialize a dictionary to hold the event data
                event_data = {}
                
                for line in lines:
                    if line.startswith("Event"):
                        # Extract event name
                        key, name = line.split(": ", 1)
                        event_data['idea'] = name.strip()
                    else:
                        # Extract event description
                        key, description = line.split(": ", 1)
                        event_data['description'] = description.strip()
                
                # Append the structured event to the list
                structured_events.append(event_data)

        # Returning an API response in JSON format
        return jsonify({
            'suggestions': structured_events
        })
    else:
        return jsonify({'error': 'Failed to fetch suggestions', 'status_code': response.status_code}), response.status_code

# Running app
if __name__ == '__main__':
    app.run(debug=True)