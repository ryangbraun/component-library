# Building and Publishing an Artifact Component Library in Azure DevOps

This guide provides step-by-step instructions on how to set up, build, and publish an NPM package for a React component library using Azure DevOps.

## Step 1: Navigate to Your Azure DevOps Project
1. Log into your Azure DevOps account.
2. Select the project where you want to create the artifact.

## Step 2: Create and Configure Your Artifact Feed
1. Click on **Artifacts** in the left menu.
2. Click on **Connect to Feed**. If a feed has not been created, follow the instructions to create one:
   - Click on **Create Feed** on the top panel.
   - Provide a name for your feed and set the visibility as required.
3. Select the package type you want to work with. For an NPM React project, select **NPM**.

## Step 3: Follow Installation Instructions for NPM
1. Click on **NPM** and follow the installation instructions provided by Azure DevOps.

## Step 4: Create a Personal Access Token (PAT)
1. Go to your user settings in Azure DevOps.
2. Create a Personal Access Token (PAT) with read and write scopes.
3. Base64 encode your personal access token using the following Node.js command:

    ```sh
    node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
    ```

## Step 5: Configure Your NPM Authentication
1. Make sure your user `.npmrc` is configured for the Azure DevOps registry with your login credentials. Add the following lines to your `.npmrc` file:

    ```ini
    ; begin auth token
    //pkgs.dev.azure.com/blaincloud/shared-components-node/_packaging/shared-components-node/npm/registry/:username=<your username>
    //pkgs.dev.azure.com/blaincloud/shared-components-node/_packaging/shared-components-node/npm/registry/:_password=<your PAT>
    //pkgs.dev.azure.com/blaincloud/shared-components-node/_packaging/shared-components-node/npm/registry/:email=npm requires email to be set but doesn't use the value
    //pkgs.dev.azure.com/blaincloud/shared-components-node/_packaging/shared-components-node/npm/:username=<your username>
    //pkgs.dev.azure.com/blaincloud/shared-components-node/_packaging/shared-components-node/npm/:_password=<your PAT>
    //pkgs.dev.azure.com/blaincloud/shared-components-node/_packaging/shared-components-node/npm/:email=npm requires email to be set but doesn't use the value
    ; end auth token

    registry=https://pkgs.dev.azure.com/blaincloud/shared-components-node/_packaging/shared-components-node/npm/registry/
    ```

## Step 6: Set Up Your React Project
1. Create a new project in Azure DevOps.
2. Set up a repository for the React project.
3. On your local machine, set up your React project:

    ```sh
    npx create-react-app my-react-project
    ```

4. Initialize a Git repository in your project directory:

    ```sh
    cd my-react-project
    git init
    ```

5. Add the remote repository URL for the Azure DevOps project:

    ```sh
    git remote add origin <repository-url>
    ```

6. Add, commit, and push your project to the main branch:

    ```sh
    git add .
    git commit -m 'Initial commit'
    git push origin master
    ```

## Step 7: Add the Component Library to Your React Project
1. In your React application directory, add the repository to your `package.json`:

    ```json
    "dependencies": {
      "your-component-library": "^1.0.0"
    }
    ```

## Step 8: Install and Publish Your Package
1. Run the following commands to install and publish your package:

    ```sh
    npm install
    npm publish
    ```

## Optional: Setting Up a CI/CD Pipeline for Automated Publishing
A pipeline might be a better approach for automating the process. Store the code in Azure, run a YAML file that runs the unit tests when the main branch is updated as part of the build flow, and publishes to the repository. This ensures security keys and usernames are not part of the code base.

### CI/CD Pipeline for Publishing the Artifact

1. **Store your authentication key as a secret variable** in Azure DevOps.

2. **Create a YAML pipeline file** (e.g., `azure-pipelines.yml`) with the following content:

    ```yaml
    trigger:
      branches:
        include:
          - main

    pool:
      vmImage: 'ubuntu-latest'

    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '14.x'
        displayName: 'Install Node.js'

    - script: |
        npm ci
      displayName: 'Install dependencies'

    - script: |
        npm test
      displayName: 'Run unit tests'

    - script: |
        echo "//pkgs.dev.azure.com/blaincloud/_packaging/blaincloud/npm/registry/:username=${NPM_USERNAME}" >> .npmrc
        echo "//pkgs.dev.azure.com/blaincloud/_packaging/blaincloud/npm/registry/:_password=${NPM_TOKEN}" >> .npmrc
        echo "registry=https://pkgs.dev.azure.com/blaincloud/_packaging/blaincloud/npm/registry/" >> .npmrc
        echo "always-auth=true" >> .npmrc
        npm publish
      env:
        NPM_TOKEN: $(NPM_TOKEN)
      displayName: 'Publish to registry'
    ```

3. **Add the pipeline to your Azure DevOps project**:
   - Navigate to the Pipelines section in Azure DevOps.
   - Create a new pipeline and follow the prompts to use the existing `azure-pipelines.yml` file from your repository.

This pipeline will automatically run the unit tests and publish your package to the Azure DevOps artifact feed whenever changes are pushed to the main branch.

## Summary
Follow these steps to set up and publish an artifact component library for an NPM React project in Azure DevOps. Replace placeholders like `<your username>`, `<your PAT>`, and `<repository-url>` with your actual credentials and repository URL.
