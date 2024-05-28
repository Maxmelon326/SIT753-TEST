pipeline {
    agent any
    environment {
        // 设置 PATH 环境变量，包括 Node.js 和 npm 的安装路径
        PATH = "${env.PATH};C:\\Program Files\\nodejs;C:\\Users\\Maxmelon\\AppData\\Roaming\\npm"
    }
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Cloning GitHub repository...'
                    git 'https://github.com/Maxmelon326/SIT753-TEST.git'
                    echo 'Copying HTML and JavaScript files...'
                    sh 'mkdir -p dist'
                    sh 'cp task7.1.html dist/'
                    sh 'cp task7.1.js dist/'
                }
            }
            post {
                success {
                    script {
                        echo 'Build completed successfully.'
                        archiveArtifacts artifacts: 'dist/*', allowEmptyArchive: true
                    }
                    emailext(
                        subject: 'SIT753-6.2',
                        to: 'maxmelon326@gmail.com',
                        body: 'Build successfuly completed', 
                        attachLog: true
                    )  
                }
                failure {
                    script {
                        echo 'Build failed.'
                    }
                    emailext(
                        subject: 'SIT753-6.2',
                        to: 'maxmelon326@gmail.com',
                        body: 'Build Failed. Check logs', 
                        attachLog: true
                    )
                }
            }
        }

        stage('Release') {
            steps {
                script {
                    echo 'Creating a release...'
                    sh 'git config user.email "Maxmelon326@gmail.com"'
                    sh 'git config user.name "Maxmelon"'
                    script {
                        def tagExists = sh(script: 'git rev-parse --quiet --verify "refs/tags/v1.0.0"', returnStatus: true) == 0
                        if (!tagExists) {
                            sh 'git tag -a v1.0.0 -m "Release version 1.0.0"'
                            sh 'git push origin v1.0.0'
                        } else {
                            echo 'Tag v1.0.0 already exists. Skipping tag creation.'
                        }
                    }
                }
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                script {
                    echo 'Setting up monitoring and alerting...'
                    // Here you can add your monitoring and alerting tool configuration
                    // For example, you can use curl to send a notification to your monitoring tool
                    sh 'curl -X POST -H "Content-Type: application/json" -d \'{"text":"Monitoring and Alerting: Application in production is being monitored."}\' https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'
                }
            }
        }
        
    }
}
