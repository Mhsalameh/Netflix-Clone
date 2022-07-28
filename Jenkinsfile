pipeline {
    agent any

    stages {
        stage ("build") {
            steps {
                echo "building app ..."
                nodejs('node'){
                    sh '''
                    npm install
                    '''
                }
            }
        }

        stage ("testing"){
            echo "testing app..."
        }
        stage ("deploying"){
            echo "deploying app ..."
            sshagent(credentials : ['34.125.63.180']){
                sh "ssh -T -o StrictHostKeyChecking=no mohsalameh1@clone"
                sh "ssh mohsalameh1@clone rm -rf /home/mohsalameh1/my-pipeline_main/"
                sh "scp -r /var/lib/jenkins/workspace/my-pipeline_main mohsalameh1@clone:/home/mohsalameh1"
                sh "ssh mohsalameh1@clone 'cd /home/mohsalameh1/my-pipeline_main && sudo docker-compose build && sudo docker-compose up -d' "
            }
        }
    }
}