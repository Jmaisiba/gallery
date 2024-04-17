pipeline{
    agent any
    tools{
        nodejs 'nodejs'
    }
    
    stages{
        stage("Clone Repo"){
            steps{
                git branch: 'dependency-testing' , url: 'https://github.com/Jmaisiba/gallery'
            }
        }
        
        stage("Clone Update"){
            steps{
                slackSend color:'#BADASS', message: 'Clone Complete'
            }
        }
        
        stage("Build app"){
            steps{
                sh 'npm i'
            }
        }
        
        stage("Build Update"){
            steps{
                slackSend color:'#BADASS', message: 'Clone Complete'
            }
        }
    }
}