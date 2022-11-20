pipeline {
  agent any
  tools {nodejs "18.10.0"}
  stages {
    stage('preflight') {
      steps {
        script {
            if (isUnix()) {
                 sh 'node -v'
            } else {
                bat 'node -v'
            }
        }
      }
    }
    stage('build') {
      steps {
        script {
        if (isUnix()) {
                 sh 'npm install'
            } else {
                bat 'npm install'
            }
        }
      }
    }
     stage('browser choice') {
      steps {
        script {
           properties([
                parameters([
                    choice (
                        choices: ['chrome', 'firefox'], 
                        name: 'BROWSER_SELECTION',
                        description: 'Please select the browser suitable for testing'
                          ), 
                    choice (
                        choices: ['hardcore', 'hurt-me'], 
                        name: 'TEST_SELECTION',
                        description: 'Please select the test to run'
                          )   
                          ]
                        )]
                    )
        }
      }
    }
    stage('test') {
      steps {
        script {
        if (isUnix()) {
                 sh 'BROWSER=${BROWSER_SELECTION} npm run ${TEST_SELECTION}'
            } else {
                bat 'BROWSER=%BROWSER_SELECTION% npm run %TEST_SELECTION'
            }
       }
      }
    } 
    // stage('artifacts') {
    //   steps {
    //      archiveArtifacts artifacts: '*.js', fingerprint: true
    //   }
    // }  
  }
}


