
REPO_OWNER="username"
REPO_NAME="reponame"
ACCESS_TOKEN="your_acess_token"

# Get a list of all workflow runs
curl -X GET -H "Authorization: token $ACCESS_TOKEN" "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/actions/runs" > runs.json

# Delete specific runs (replace run_id1, run_id2, etc. with the actual run IDs)
curl -X DELETE -H "Authorization: token $ACCESS_TOKEN" "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/actions/runs/run_id1"
curl -X DELETE -H "Authorization: token $ACCESS_TOKEN" "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/actions/runs/run_id2"
# Add more delete commands as needed for other runs
