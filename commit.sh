#!/bin/bash

# Define variables
repo_path="/home/shivam/Desktop/docss/Mern" 
commit_message="new files commited"

# Change to the repository directory
cd "$repo_path"

# Check the Git status
git_status=$(git status -s)

# Check if there are changes to commit
if [[ -z "$git_status" ]]; then
  echo "No changes to commit."
  exit 0
fi

# Print the changes
echo "Changes to commit:"
echo "$git_status"

# Add all files
git add .

# Commit changes
git commit -m "$commit_message"

# Push changes to the remote repository
git push   # Change 'main' to your branch name if different

echo "Changes committed and pushed successfully."






