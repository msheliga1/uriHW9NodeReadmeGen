# uriHW9NodeReadmeGen
URI Bootcamp HW Week 9 - Due 1.25.24 - Node.js Readme.md Generator Using inquirer and fs  
Michael Sheliga - This repo is for the University of Richmond (URI) coding bootcamp.   

## Link to Repo, Screenshot(s) and/or Video(s)
Link to GitHub Repo: https://github.com/msheliga1/uriHW9NodeReadmeGen    
<!---  Link to deployed github.io site. https://msheliga1.github.io/uriHW9NodeReadmeGen --->  
Link to generated README.md: https://github.com/msheliga1/uriHW9NodeReadmeGen/blob/main/Develop/README.md  
Link to Video on Google Drive: https://drive.google.com/file/d/1Qy387--czMmpXuCZT-xgI5SDjIt24yz_/view?usp=sharing   
Link to Video on GitHbu of data entry, push to gitHub and resulting README.md file. [Link](./Develop/images/hw9ReadmeGen.webm)   Note that this video seems to be too large to play in GitHub, so you will need to download and play from your computer. WindowsMediaPlayer worked for me.   

Link to screenshot of application. ![HW 9 README.md generator input Screenshot](./Develop/images/WorkingScreenshot.PNG)    
Link to 2nd screenshot of generated README.md file. ![HW 9 README.md generator sample file Screenshot](./Develop/images/ResultsScreenshot.PNG)   
[Link to Acceptance Criteria ](#acceptance-criteria)   

## Project Goals     
Use node and the fs and inquirer libraries to create a README.md file based upon answers to inquirer prompts.  
See Also: [How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)  

========================================================   
## Technical Project Details    
========================================================    
## Github:   
    Create Repo (github, repositories => New)   
        - Dont Make this a shared repo.  
    Copy directories and sample files from prior project (or create from scratch).  
        -- No starter code. No need for copying one file at a time via command line.  
        -- Alternate: Go to Demo (root) folder, download zip, moving to local repo, unzip - likely fastest method.     
        -- Could not find a better way to copy over all files.    
        -- OR ... create HTML, CSS and javascript, etc. from scratch, and copy sample files ... worked well.
    Branches (Optional for single programmer projects)  
        - Could do work in branches. (new branch inside gitHub)    
        - All branch names will begin with the initials of the main person working on the branch.  
        - Must update local repo after adding a branch  
        - Switch to branch: From cmd line git switch <branchname>   
        - Once changes committed, git push origin <branchname>  
            - for pushing to remote test branch: git push origin local_branch:remote_branch  
        - Issue a pull request in gitHub.  
        - Click "Pull Requests" in top menu bar (3rd from left).  
        - Click "review Required" in small font below pull request name.  
        - You may approve your own request.  
    Clone to local machine (Copy https, then git clone paste).    
    Create a nice long READ.md file!!  (Modify prior projects.)   
    Commit and push files back to gitHub/branch. (For multi-programming: Issue pull request, approve, merge).  
    Deploy code (Settings...CodeAndAnimation->Pages on left, GitHub Pages->Branch->main, save)  
        - Deployed code name always msheliga1/github.io/RepoName !!  
    Make Sure it Works   
    Insert Video and/or Screenshot X2 of deployment into readme file. 
  
## Tools and Technologies Used   
    Github - Branches not needed, but could use.  
        - GitIgnore to keep NPM libraries out of gitHub repo.
    NPM - Node Package Manager
        fs - fileSystem   
        inquirer - Used for prompts (text, list, checkboxes, editor, etc.)
        email-validator - a nice add on to validate the user entered email.
    Agile - Try to assign a little work at a time.   

## Acceptance Criteria
-----------------------  
README generator to quickly create a professional README for a new project  
  
CLI app, prompts for info about my app repo
 - title of my project  
 - sections entitled  
    - Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
    - enter description, installation instructions, usage info, contribution guidelines, and test instructions  
    - add to sections entitled Description, Installation, Usage, Contributing, and Tests  
- choose a license for appl from list of options  
    - badge for that license is added near the top of the README  
    - a notice is added to License section that explains which license the application is covered under  
- enter GitHub username, add to Questions, with a link to my GitHub profile  
- enter email address, add to Questions, with instructions on how to reach me with additional questions  
- links in the Table of Contents, take to the sections  