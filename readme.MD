# Started ES6 scrimba course

# Focusing on "Git Flow" as well.

## Git Flow Workflow:
    The Git Flow workflow is a branching model designed for larger projects that involve release management. It defines specific branches for various types of work and promotes a structured approach to development.

## Branches in Git Flow Workflow:

### Main Branches:
    master: Represents production-ready code.
    develop: Integration branch for ongoing development.
### Supporting Branches:
    feature/<feature-name>: For developing new features.
    release/<version>: Preparing for a new production release.
    hotfix/<issue-name>: Fixing critical issues in production.

## Git Flow Workflow Process:

### Start a New Feature:
    Create a new branch for a new feature.
    Work on the feature and commit changes.
### Merge Feature Branch:
    Merge the feature branch into the develop branch.
### Prepare Release:
    Create a release branch from develop.
    Perform final testing and prepare for deployment.
    Merge the release branch into both master and develop after successful testing.
### Hotfixes:
    Create a hotfix branch from master.
    Fix the critical issue.
    Merge the hotfix branch into both master and develop.