import React from 'react';
import Underline from './underline';
import Project from './project';

function Projects(){

    return(
        <div className = "project-box">
            <div className = "project-text-box">
                <p className = "project-text">Projects</p>
                <Underline/>
            </div>
            <div className = "project-box-2">
                <Project desc = {"Made using love, in 2 months deadline"} android = {"https://play.google.com/store/apps/details?id=com.skyit.dictionary&hl=en"} used = {"iOS / Swift & Android / Kotlin & Firebase"} name = {"Kalimaty Dictionary"} img2 = {"https://lh3.googleusercontent.com/zGGoJBgt6DNiQOLhWx1J0HZX9aBUe8Z_QYI0eNR4u47TGvbzzZJCCNqtOgESRh00UgQ=w1916-h959-rw"} image = {1} img1 = {"https://lh3.googleusercontent.com/1IXg9H7AMtwPsIhfObFpAYS_cDsOGOBQMVuQeCZpbkiNSKgsQz3wdCN2troiPkFkyA=w1920-h969-rw"}/>
                <Project desc = {""} android = {"https://play.google.com/store/apps/details?id=thinkit.qpay.hesab&hl=en"} used = {"iOS / Swift & Android / Kotlin & Firebase"} name = {"7sab"} img1 = {"https://lh3.googleusercontent.com/soFoEM50h4aL0DbBsncReYhythwVvcq7sCu85QryDrAjBofFClf9ZNzoatzPpzeANA=w1916-h959-rw"} image = {1} img2 = {"https://lh3.googleusercontent.com/iQnnYJjVhGmLt99B19wz-xmfOMngTDguzDtPpl41b142d4X24Ox2ytspMSvxIvSF4BA=w1916-h959-rw"}/>
                <Project desc = {""} android = {"https://play.google.com/store/apps/details?id=thinkit.aswaq&hl=en"} used = {"iOS / Swift & Android / Kotlin & Firebase"} name = {"Aswaq"} img1 = {"https://lh3.googleusercontent.com/fbSoywWcJR-5nP01wZ0uNinFwtMmqYZdvDMut88taqt0O5wLpk2tQCuF3HNg2oL7Qvk=w1916-h959-rw"} image = {0} img2 = {""}/>
                <Project desc = {""} android = {"https://play.google.com/store/apps/details?id=com.wcreations.trainingrooms&hl=en"} image = {1} used = {"iOS / Swift & Android / Kotlin & Firebase"} name = {"QatarCare EDU"} img1 = {"https://lh3.googleusercontent.com/hE2prasyupxlvN7zxP0b597BD_DzjsQLvFDI5Dyfalb0J7_18JOzGWJpeuStIqtaqtg=w1916-h959-rw"} img2 = {"https://lh3.googleusercontent.com/s3GT4FBSgM2LQ19bbDjn85HZai4WWu5F78W3Dg_iGQ6-7H6_bEoDzpK6v9U_Nd1M0CA=w1916-h959-rw"}/>
                <Project desc = {""} android = {""} image = {1} used = {"iOS / Swift & Android / Kotlin & Firebase"} name = {"Healfy"} img2 = {"https://cdn.discordapp.com/attachments/558386070094479390/715882895448735744/Screenshot_20200529-140242_Helfy.jpg"} img1 = {"https://cdn.discordapp.com/attachments/558386070094479390/715882895448735744/Screenshot_20200529-140242_Helfy.jpg"}/>
                <Project desc = {""} android = {""} image = {1} used = {"Android / Kotlin & Firebase"} name = {"Staff Manager"} img2 = {"https://cdn.discordapp.com/attachments/558386070094479390/715882895448735744/Screenshot_20200529-140242_Helfy.jpg"} img1 = {"https://cdn.discordapp.com/attachments/558386070094479390/715882895448735744/Screenshot_20200529-140242_Helfy.jpg"}/>
            </div>
        </div>
    )
}

export default Projects;