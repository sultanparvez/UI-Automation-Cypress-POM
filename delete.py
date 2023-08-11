import json
import requests

# Replace with your values
REPO_OWNER = "username"
REPO_NAME = "reponame"
ACCESS_TOKEN = "Your_Access_Token"

# Load the list of runs from the JSON file
with open("runs.json", "r") as f:
    runs_data = json.load(f)

# Delete each run
for run in runs_data["workflow_runs"]:
    run_id = run["id"]
    response = requests.delete(
        f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/actions/runs/{run_id}",
        headers={"Authorization": f"Bearer {ACCESS_TOKEN}"}
    )
    if response.status_code == 204:
        print(f"Deleted run {run_id}")
    else:
        print(f"Failed to delete run {run_id}")
